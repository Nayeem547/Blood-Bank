import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaUser, FaBars, FaXmark, FaHandHoldingHeart } from 'react-icons/fa6';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // টিপস: এটি আপনার আসল অথেন্টিকেশন (যেমন: Firebase বা Context API) দিয়ে পরিবর্তন করে নেবেন।
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

  return (
    <nav className="bg-amber-50/90 backdrop-blur-md text-gray-800 shadow-sm sticky top-0 z-50 border-b border-amber-200/80 transition-all duration-300">
      {/* Top subtle emergency accent line */}
      <div className="h-[2.5px] bg-red-600 w-full" />

      {/* Main Navbar Content */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="LifeLine Logo" 
              className="h-8 sm:h-10 w-auto cursor-pointer transition-transform duration-200 hover:scale-105" 
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
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

        {/* Action Buttons & Conditional Rendering */}
        <div className="flex items-center gap-3">
          
          {/* যদি ইউজার লগইন করা না থাকে, তবে 'Become a Donor' এবং 'Login' দেখাবে */}
          {!isLoggedIn ? (
            <>
              {/* Become a Donor Button (লগইন না থাকলে দেখাবে) */}
              <Link 
                to="/become-donor" 
                className="hidden sm:flex items-center gap-1.5 bg-red-50 text-red-600 hover:bg-red-100 font-semibold text-xs sm:text-sm px-4 py-2 rounded-full border border-red-200 transition-all"
              >
                <FaHandHoldingHeart />
                <span>Become a Donor</span>
              </Link>

              {/* Login Button */}
              <Link 
                to="/login" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full flex items-center gap-2 transition-all shadow-sm"
              >
                <FaUser className="text-xs" />
                <span>Login</span>
              </Link>
            </>
          ) : (
            /* যদি ইউজার লগইন করা থাকে, তবে শুধু Profile দেখাবে */
            <Link 
              to="/profile" 
              className="btn btn-ghost btn-circle avatar border border-amber-300 hover:border-red-400 transition-all"
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
            className="lg:hidden p-2 text-gray-700 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100 py-4 px-6 bg-amber-50/98 border-t border-amber-200/60 shadow-lg' : 'max-h-0 opacity-0 py-0 px-6'}`}>
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

          {/* মোবাইলের জন্যও লগইন না থাকলে Become a Donor দেখাবে */}
          {!isLoggedIn && (
            <li className="pt-2 border-t border-amber-200">
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
    </nav>
  );
};

export default Navbar;