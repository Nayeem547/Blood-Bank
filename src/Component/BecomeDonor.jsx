import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'; 

const BecomeDonor = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full max-w-2xl border">
        
        {/* Top Logo Section (Centered) */}
        <div className="flex justify-center mb-4">
          <Link to="/">
            <img 
              src={logo} 
              alt="LifeLine Logo" 
              className="h-9 sm:h-11 w-auto cursor-pointer" 
            />
          </Link>
        </div>

        {/* Title Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-1">
          Become a Donor
        </h2>
        <p className="text-center text-gray-500 text-xs sm:text-sm mb-6">
          Register as a blood donor and help save lives
        </p>

        {/* Form Start */}
        <form className="space-y-4">
          
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Username & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Blood Group & Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Blood Group
              </label>
              <select className="w-full border p-2.5 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-red-500 bg-white">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Gender
              </label>
              <select className="w-full border p-2.5 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-red-500 bg-white">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Date of Birth & Last Donation Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border p-2.5 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Last Donation Date
              </label>
              <input
                type="date"
                className="w-full border p-2.5 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Your Area / City"
              className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg mt-2 hover:bg-red-700 transition-colors"
          >
            Register as Donor
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="bg-white px-3 text-xs text-gray-500 absolute">OR</span>
        </div>

        {/* Google Sign In Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Sign in with Google</span>
        </button>

        {/* Already have an account */}
        <p className="text-center text-xs text-gray-600 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 font-bold hover:underline">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default BecomeDonor;