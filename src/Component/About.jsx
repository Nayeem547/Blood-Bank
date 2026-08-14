import React from 'react';
import { Link } from 'react-router';
import { FaHeartPulse, FaUsers, FaHandHoldingHeart, FaShieldHalved, FaClock } from 'react-icons/fa6';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* 1. Hero / Header Section */}
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            <FaHeartPulse /> About LifeLine
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
            Connecting Hearts, <span className="text-red-600">Saving Lives</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            জরুরি মুহূর্তে রক্তদাতা ও গ্রহীতার মধ্যে দ্রুততম উপায়ে সংযোগ তৈরি করাই আমাদের মূল লক্ষ্য। আমাদের প্রতিটি পদক্ষেপ মানুষের জীবন রক্ষার অঙ্গীকার নিয়ে।
          </p>
        </div>

        {/* 2. Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-xl mb-4">
              <FaHandHoldingHeart />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              একটি ডিজিটাল প্ল্যাটফর্মের মাধ্যমে দেশের প্রতিটি প্রান্তে রক্তদান প্রক্রিয়াকে সহজ, দ্রুত এবং আধুনিক করা। যেন রক্তের অভাবে কারো প্রিয়জনের জীবন বিপন্ন না হয়।
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              একটি সচেতন ও রক্তদানে ইচ্ছুক স্বেচ্ছাসেবী কমিউনিটি গড়ে তোলা, যেখানে প্রয়োজনের মুহূর্তে মুহূর্তের মধ্যে সঠিক ব্লাড গ্রুপের রক্তদাতা খুঁজে পাওয়া সম্ভব হবে।
            </p>
          </div>
        </div>

        {/* 3. Impact Statistics Section */}
        <div className="bg-red-600 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <h4 className="text-3xl sm:text-4xl font-extrabold">৫,০০০+</h4>
              <p className="text-xs sm:text-sm text-red-100">নিবন্ধিত রক্তদাতা</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl sm:text-4xl font-extrabold">৩,২০০+</h4>
              <p className="text-xs sm:text-sm text-red-100">জীবন রক্ষা হয়েছে</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl sm:text-4xl font-extrabold">৬৪</h4>
              <p className="text-xs sm:text-sm text-red-100">জেলায় সেবা সংগৃহীত</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-3xl sm:text-4xl font-extrabold">২৪/৭</h4>
              <p className="text-xs sm:text-sm text-red-100">জরুরি সেবা</p>
            </div>
          </div>
        </div>

        {/* 4. Why Choose Us / Features */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            কেন <span className="text-red-600">LifeLine</span> ব্যবহার করবেন?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border text-center space-y-2">
              <div className="text-red-600 text-2xl flex justify-center">
                <FaClock />
              </div>
              <h4 className="font-semibold text-gray-800">দ্রুত অনুসন্ধান</h4>
              <p className="text-xs text-gray-500">
                লোকেশন এবং ব্লাড গ্রুপ দিয়ে কয়েক সেকেন্ডের মধ্যে ডোনার খুঁজুন।
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border text-center space-y-2">
              <div className="text-red-600 text-2xl flex justify-center">
                <FaShieldHalved />
              </div>
              <h4 className="font-semibold text-gray-800">নিরাপদ তথ্য</h4>
              <p className="text-xs text-gray-500">
                রক্তদাতাদের ব্যক্তিগত তথ্যের সুরক্ষা এবং সর্বোচ্চ গোপনীয়তা রক্ষা।
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border text-center space-y-2">
              <div className="text-red-600 text-2xl flex justify-center">
                <FaHandHoldingHeart />
              </div>
              <h4 className="font-semibold text-gray-800">১০০% ফ্রী সার্ভিস</h4>
              <p className="text-xs text-gray-500">
                আমাদের সার্ভিস সম্পূর্ণ বিনামূল্যে মানবসেবায় নিবেদিত।
              </p>
            </div>
          </div>
        </div>

        {/* 5. Call to Action (CTA) */}
        <div className="bg-white border p-8 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            আপনিও হতে পারেন কারও জীবনের অনুপ্রেরণা
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm max-w-lg mx-auto">
            আজই আমাদের ডোনার তালিকায় যুক্ত হন অথবা আপনার প্রয়োজনে রক্তদাতা খুঁজুন।
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/become-donor"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Become a Donor
            </Link>
            <Link
              to="/login"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;