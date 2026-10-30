import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router';
import { FaUser, FaBars, FaXmark, FaHandHoldingHeart } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../../../assets/logo.png';

gsap.registerPlugin(useGSAP);

// Heartbeat (ECG) line for the navbar background: 4 beats across a 1400 x 60 canvas
const ECG_PATH = [0, 350, 700, 1050]
  .map(
    (x) =>
      `${x === 0 ? 'M0 30' : ''} H${x + 110} L${x + 125} 30 L${x + 140} 8 L${x + 157} 52 L${x + 172} 18 L${x + 182} 30 H${x + 350}`
  )
  .join(' ');

// Floating blood drops (position + size + opacity)
// left/top are relative to the animation area, which starts to the right of the logo
const DROPS = [
  { left: '6%', top: '55%', size: 10, opacity: 0.22 },
  { left: '26%', top: '20%', size: 7, opacity: 0.16 },
  { left: '46%', top: '62%', size: 9, opacity: 0.2 },
  { left: '66%', top: '25%', size: 12, opacity: 0.18 },
  { left: '84%', top: '58%', size: 8, opacity: 0.22 },
  { left: '95%', top: '18%', size: 6, opacity: 0.16 },
];

// Soft fade on the left edge so the line appears gradually after the logo
const FADE_MASK = 'linear-gradient(to right, transparent 0%, black 14%)';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // টিপস: এটি আপনার আসল অথেন্টিকেশন (যেমন: Firebase বা Context API) দিয়ে পরিবর্তন করে নেবেন।
  // যেমন: const { user } = useContext(AuthContext);
  // আপাতত টেস্টিং এর জন্য true/false করে দেখতে পারেন।
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Donors', path: '/donors' },
    { name: 'Blood Stock', path: '/blood-stock' },
    { name: 'Request', path: '/request' },
    { name: 'Blog', path: '/blog' },
  ];

  const navRef = useRef(null);
  const innerRef = useRef(null);
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const isFirstRender = useRef(true);
  const isFirstAuth = useRef(true);

  const prefersReduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1) Background: ECG pulse running along the navbar + drifting blood drops
  useGSAP(
    () => {
      if (prefersReduced()) return;

      // Bright pulse travelling along the ECG line (loops forever)
      gsap.fromTo(
        '.ecg-pulse',
        { strokeDashoffset: 0 },
        { strokeDashoffset: -1, duration: 5, ease: 'none', repeat: -1 }
      );

      // Slow breathing glow on the whole line, like a heartbeat
      gsap.to('.ecg-wrap', {
        opacity: 0.55,
        duration: 0.9,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Each drop floats on its own rhythm
      gsap.utils.toArray('.bg-drop').forEach((drop) => {
        gsap.to(drop, {
          y: gsap.utils.random(-14, 14),
          x: gsap.utils.random(-10, 10),
          rotation: '+=' + gsap.utils.random(-20, 20),
          duration: gsap.utils.random(3, 5.5),
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: gsap.utils.random(0, 2),
        });
      });
    },
    { scope: navRef }
  );

  // 2) Scroll: navbar gets slightly slimmer + stronger shadow
  useGSAP(
    () => {
      if (prefersReduced()) return;

      let scrolled = false;
      const onScroll = () => {
        const shouldShrink = window.scrollY > 24;
        if (shouldShrink === scrolled) return;
        scrolled = shouldShrink;

        gsap.to(innerRef.current, {
          paddingTop: shouldShrink ? 8 : 12,
          paddingBottom: shouldShrink ? 8 : 12,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        gsap.to(navRef.current, {
          boxShadow: shouldShrink
            ? '0 6px 24px rgba(0, 0, 0, 0.1)'
            : '0 1px 2px rgba(0, 0, 0, 0.05)',
          duration: 0.3,
          overwrite: 'auto',
        });
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    },
    { scope: navRef }
  );

  // 3) Mobile menu open/close
  useGSAP(
    () => {
      const menu = menuRef.current;
      const items = menu.querySelectorAll('.m-item');
      const d = prefersReduced() ? 0 : 1;

      if (isFirstRender.current) {
        isFirstRender.current = false;
        gsap.set(menu, { height: 0 });
        gsap.set(items, { opacity: 0, x: -14 });
        return;
      }

      if (menuOpen) {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .to(menu, { height: 'auto', duration: 0.4 * d })
          .to(
            items,
            { opacity: 1, x: 0, duration: 0.35 * d, stagger: 0.05 * d },
            '-=0.2'
          );
      } else {
        gsap
          .timeline({ defaults: { ease: 'power2.in' } })
          .to(items, { opacity: 0, x: -14, duration: 0.18 * d, stagger: 0.02 * d })
          .to(menu, { height: 0, duration: 0.3 * d }, '-=0.1');
      }

      // hamburger / close icon pop
      gsap.fromTo(
        iconRef.current,
        { rotate: menuOpen ? -90 : 90, scale: 0.6, opacity: 0 },
        { rotate: 0, scale: 1, opacity: 1, duration: 0.3 * d, ease: 'back.out(2)' }
      );
    },
    { scope: navRef, dependencies: [menuOpen] }
  );

  // 4) Login <-> Profile swap
  useGSAP(
    () => {
      if (isFirstAuth.current) {
        isFirstAuth.current = false;
        return;
      }
      if (prefersReduced()) return;

      gsap.from('.auth-item', {
        scale: 0.85,
        opacity: 0,
        y: -8,
        duration: 0.45,
        stagger: 0.08,
        ease: 'back.out(1.7)',
      });
    },
    { scope: navRef, dependencies: [isLoggedIn] }
  );

  // Small hover motions (desktop links + logo)
  const hoverIn = (e) =>
    !prefersReduced() &&
    gsap.to(e.currentTarget, { y: -2, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
  const hoverOut = (e) =>
    gsap.to(e.currentTarget, { y: 0, duration: 0.25, ease: 'power2.out', overwrite: 'auto' });

  const logoIn = (e) =>
    !prefersReduced() &&
    gsap.to(e.currentTarget, { scale: 1.06, duration: 0.25, ease: 'power2.out' });
  const logoOut = (e) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });

  const btnIn = (e) =>
    !prefersReduced() &&
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
  const btnOut = (e) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: 'power2.out' });

  return (
    <nav
      ref={navRef}
      className="bg-white/90 backdrop-blur-md text-gray-800 shadow-sm sticky top-0 z-50 border-b border-gray-200"
    >
      {/* Animated background: heartbeat line + floating blood drops.
          It starts to the right of the logo (left-36 / sm:left-56), so nothing runs behind the logo. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 left-36 sm:left-56 overflow-hidden pointer-events-none"
        style={{ WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK }}
      >
        <svg
          className="ecg-wrap absolute inset-0 w-full h-full"
          viewBox="0 0 1400 60"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* faint static line */}
          <path
            d={ECG_PATH}
            stroke="#dc2626"
            strokeOpacity="0.12"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* moving bright pulse */}
          <path
            className="ecg-pulse"
            d={ECG_PATH}
            pathLength="1"
            stroke="#dc2626"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="0.12 0.88"
          />
        </svg>

        {DROPS.map((d, i) => (
          <div
            key={i}
            className="bg-drop absolute"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size, opacity: d.opacity }}
          >
            <span
              className="block w-full h-full bg-red-600"
              style={{ borderRadius: '50% 0 50% 50%', transform: 'rotate(-45deg)' }}
            />
          </div>
        ))}
      </div>

      {/* Top subtle emergency accent line */}
      <div className="accent-line relative z-10 h-[2.5px] bg-red-600 w-full" />

      {/* Main Navbar Content */}
      <div
        ref={innerRef}
        className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3"
      >
        {/* Logo */}
        <div className="logo-wrap flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="LifeLine Logo"
              onMouseEnter={logoIn}
              onMouseLeave={logoOut}
              className="h-8 sm:h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-semibold tracking-wide text-gray-700">
            {navItems.map((item) => (
              <li key={item.name} className="nav-link-item">
                <NavLink
                  to={item.path}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  className={({ isActive }) =>
                    `relative inline-block py-1 transition-colors duration-200 hover:text-red-600 ${
                      isActive
                        ? 'text-red-600 font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600 after:rounded-full'
                        : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500/50 hover:after:rounded-full'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons & Conditional Rendering */}
        <div className="flex items-center gap-3">
          {/* যদি ইউজার লগইন করা না থাকে, তবে 'Become a Donor' এবং 'Login' দেখাবে */}
          {!isLoggedIn ? (
            <>
              {/* Become a Donor Button (লগইন না থাকলে দেখাবে) */}
              <Link
                to="/become-donor"
                onMouseEnter={btnIn}
                onMouseLeave={btnOut}
                className="nav-action auth-item hidden sm:flex items-center gap-1.5 bg-red-50 text-red-600 hover:bg-red-100 font-semibold text-xs sm:text-sm px-4 py-2 rounded-full border border-red-200 transition-colors"
              >
                <FaHandHoldingHeart />
                <span>Become a Donor</span>
              </Link>

              {/* Login Button */}
              <Link
                to="/login"
                onMouseEnter={btnIn}
                onMouseLeave={btnOut}
                className="nav-action auth-item bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 transition-colors shadow-sm"
              >
                <FaUser className="text-xs" />
                <span>Login</span>
              </Link>
            </>
          ) : (
            /* যদি ইউজার লগইন করা থাকে, তবে শুধু Profile দেখাবে */
            <Link
              to="/profile"
              onMouseEnter={btnIn}
              onMouseLeave={btnOut}
              className="nav-action auth-item btn btn-ghost btn-circle avatar border border-gray-300 hover:border-red-400 transition-colors"
              title="Profile"
            >
              <div className="w-8 sm:w-9 rounded-full">
                <img
                  alt="User Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="nav-action lg:hidden p-2 text-gray-700 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <span ref={iconRef} className="block">
              {menuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-xl" />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (height animated by GSAP) */}
      <div ref={menuRef} className="relative z-10 lg:hidden overflow-hidden h-0">
        <div className="py-4 px-6 bg-white/98 border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col gap-3 text-[15px] font-semibold text-gray-700">
            {navItems.map((item) => (
              <li key={item.name} className="m-item">
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1.5 transition-colors ${
                      isActive ? 'text-red-600 font-bold' : 'hover:text-red-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* মোবাইলের জন্যও লগইন না থাকলে Become a Donor দেখাবে */}
            {!isLoggedIn && (
              <li className="m-item pt-2 border-t border-gray-200">
                <Link
                  to="/become-donor"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-xl text-center font-semibold"
                >
                  <FaHandHoldingHeart /> Become a Donor
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;