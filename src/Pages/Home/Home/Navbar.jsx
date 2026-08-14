import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { FaUser, FaBars, FaXmark } from 'react-icons/fa6';
import logo from '../../../assets/logo.png';
import gsap from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // স্লিক ও ক্লিন নেভবার এন্ট্রান্স এনিমেশন
    const ctx = gsap.context(() => {
      gsap.from('.nav-content', {
        y: -15,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Donors', path: '/donors' },
    { name: 'Blood Stock', path: '/blood-stock' },
    { name: 'Request', path: '/request' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      ref={navRef}
      className="bg-amber-50/90 backdrop-blur-md text-gray-800 shadow-sm sticky top-0 z-50 border-b border-amber-200/80"
    >
      {/* Top subtle emergency accent line */}
      <div className="h-[2.5px] bg-red-600 w-full" />

      {/* Main Navbar Content */}
      <div className="nav-content max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="LifeLine Logo" 
              className="h-8 sm:h-10 w-auto cursor-pointer transition-transform duration-200 hover:scale-102" 
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop (মানসম্মত ও স্লিক ফন্ট ডিজাইন) */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-semibold tracking-wide text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-1 transition-colors duration-200 hover:text-red-600 ${
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

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Login Button */}
          <Link 
            to="/login" 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <FaUser className="text-xs" />
            <span>Login</span>
          </Link>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-amber-300">
              <div className="w-8 sm:w-9 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-700 rounded-xl z-[1] mt-3 w-48 p-2 shadow-xl border border-gray-100"
            >
              <li>
                <a className="justify-between font-medium hover:bg-red-50 hover:text-red-600">
                  Profile
                  <span className="badge badge-xs bg-red-600 text-white border-none p-1.5">New</span>
                </a>
              </li>
              <li><a className="font-medium hover:bg-red-50 hover:text-red-600">Settings</a></li>
              <li><a className="font-medium hover:bg-red-50 hover:text-red-600 text-red-600">Logout</a></li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-red-600 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-amber-50/98 border-t border-amber-200/60 px-6 py-4 shadow-lg transition-all">
          <ul className="flex flex-col gap-3 text-[15px] font-semibold text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
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
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;