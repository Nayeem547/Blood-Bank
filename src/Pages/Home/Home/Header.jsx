import { FaUser, FaHeartPulse, FaHeart, FaMagnifyingGlass, FaUserPlus, FaUserGroup, FaDroplet, FaHospital, FaArrowTrendUp, FaBars } from "react-icons/fa6";
import heroBanner from "../../../assets/hero_banner.png";
import heroDrop from "../../../assets/hero_banner_blood_drop.png";
import { useState } from "react";
import { Link } from "react-router"; 
import logo from '../../../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full max-w-full overflow-x-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      
{/* Emergency Alert Bar */}
<div className="bg-red-700 text-white text-sm sm:text-base py-3 px-4 sm:px-6 font-bold flex items-center shadow-lg border-b-2 border-red-800">
  
  {/* Urgent Alert Badge with Pulsing Red Dot */}
  <div className="bg-amber-300 text-red-900 px-3 py-1 rounded-md font-extrabold uppercase text-xs sm:text-sm shrink-0 mr-4 shadow-md flex items-center gap-2 z-10 relative">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
    </span>
    <span>EMERGENCY ALERT</span>
  </div>

  {/* Scrolling Text */}
  <marquee behavior="scroll" direction="left" scrollamount="7" className="w-full flex-1 tracking-wide font-semibold">
    🚨 জরুরি রক্তের প্রয়োজনে কল করুন: +880 1800-000000 | রক্তদান করুন, জীবন বাঁচান! | LifeLine-এ যেকোনো রক্তের গ্রুপ তাৎক্ষণিক খুঁজে পেতে আমাদের ওয়েবসাইট ব্যবহার করুন।
  </marquee>

</div>

{/* Navbar */}




      {/* hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* left: text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full">
            <FaHeart className="text-red-600" />
            Donate Blood • Save Lives
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 leading-tight break-words">
            Every Drop Can{" "}
            <span className="text-red-600 font-serif italic font-normal">
              Save a Life
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-md mx-auto lg:mx-0">
            LifeLine connects donors, hospitals, and patients to ensure blood
            is available when it matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto justify-center">
              Find Blood
              <FaMagnifyingGlass />
            </button>
            <Link 
              to="/become-donor" 
              className="flex items-center gap-2 border border-amber-300 hover:bg-amber-100 text-gray-800 font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto justify-center"
            >
              Become a Donor
              <FaUserPlus />
            </Link>
          </div>
        </div>

        {/* right: hand with blood drop image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroDrop}
            alt="Blood donation"
            className="w-full max-w-xs sm:max-w-md h-auto"
          />
        </div>
      </div>

      {/* stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-3 sm:px-5 py-3 sm:py-4">
            <div className="h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-amber-100 text-base sm:text-lg text-amber-600 shrink-0">
              <FaUserGroup />
            </div>
            <div>
              <p className="text-base sm:text-xl font-bold text-gray-900 flex items-center gap-1">
                12,540+ <FaArrowTrendUp className="text-green-500 text-sm" />
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Registered Donors</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-3 sm:px-5 py-3 sm:py-4">
            <div className="h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-red-100 text-base sm:text-lg text-red-500 shrink-0">
              <FaDroplet />
            </div>
            <div>
              <p className="text-base sm:text-xl font-bold text-gray-900">3,218+</p>
              <p className="text-xs sm:text-sm text-gray-600">Units of Blood Available</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-3 sm:px-5 py-3 sm:py-4">
            <div className="h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-amber-100 text-base sm:text-lg text-amber-600 shrink-0">
              <FaHospital />
            </div>
            <div>
              <p className="text-base sm:text-xl font-bold text-gray-900">186+</p>
              <p className="text-xs sm:text-sm text-gray-600">Hospitals Connected</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-3 sm:px-5 py-3 sm:py-4">
            <div className="h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-full bg-red-100 text-base sm:text-lg text-red-500 shrink-0">
              <FaHeart />
            </div>
            <div>
              <p className="text-base sm:text-xl font-bold text-gray-900">9,600+</p>
              <p className="text-xs sm:text-sm text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8 text-sm sm:text-base">
          One donation can bring hope.{" "}
          <span className="text-red-600 font-semibold">
            Be the reason someone lives.
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;