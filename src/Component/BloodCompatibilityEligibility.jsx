import React, { useState } from 'react';
import { FaHeartPulse, FaCircleCheck, FaCircleXmark, FaHandHoldingHeart } from 'react-icons/fa6';

const BloodCompatibilityEligibility = () => {
  const [selectedGroup, setSelectedGroup] = useState('O+');
  const [eligibility, setEligibility] = useState({
    age: false,
    weight: false,
    interval: false,
    health: false,
  });

  const bloodData = {
    'A+': { give: ['A+', 'AB+'], receive: ['A+', 'A-', 'O+', 'O-'] },
    'A-': { give: ['A+', 'A-', 'AB+', 'AB-'], receive: ['A-', 'O-'] },
    'B+': { give: ['B+', 'AB+'], receive: ['B+', 'B-', 'O+', 'O-'] },
    'B-': { give: ['B+', 'B-', 'AB+', 'AB-'], receive: ['B-', 'O-'] },
    'AB+': { give: ['AB+'], receive: ['Everyone (Universal Recipient)'] },
    'AB-': { give: ['AB+', 'AB-'], receive: ['AB-', 'A-', 'B-', 'O-'] },
    'O+': { give: ['O+', 'A+', 'B+', 'AB+'], receive: ['O+', 'O-'] },
    'O-': { give: ['Everyone (Universal Donor)'], receive: ['O-'] },
  };

  const handleCheckbox = (key) => {
    setEligibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isEligible = Object.values(eligibility).every(Boolean);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="bg-red-100 text-red-600 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <FaHeartPulse className="animate-pulse text-red-600" /> Know Your Blood Info
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Blood Compatibility & <span className="text-red-600">Eligibility</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            জেনে নিন আপনার রক্তের গ্রুপে কার কাছে রক্ত দিতে ও নিতে পারবেন এবং রক্তদানে আপনি যোগ্য কিনা।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* 🩸 1. BLOOD COMPATIBILITY CHECKER */}
          <div className="bg-amber-50/60 border border-amber-200/70 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 text-white p-3 rounded-xl shadow-sm">
                <FaHandHoldingHeart className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Blood Group Match Chart</h3>
                <p className="text-xs text-gray-500">আপনার রক্তের গ্রুপ সিলেক্ট করে কমপ্যাটিবিলিটি দেখুন</p>
              </div>
            </div>

            {/* Blood Group Selectors */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                Select Your Blood Group:
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {Object.keys(bloodData).map((group) => (
                  <button
                    key={group}
                    onClick={() => setSelectedGroup(group)}
                    className={`py-2 text-sm font-bold rounded-xl transition-all ${
                      selectedGroup === group
                        ? 'bg-red-600 text-white shadow-md scale-105'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-red-400'
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Can Give To */}
              <div className="bg-white p-4 rounded-xl border border-amber-200/60 space-y-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  You Can Give Blood To
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {bloodData[selectedGroup].give.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-red-50 text-red-700 text-xs font-bold px-2.5 py-1 rounded-md border border-red-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Can Receive From */}
              <div className="bg-white p-4 rounded-xl border border-amber-200/60 space-y-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  You Can Receive From
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {bloodData[selectedGroup].receive.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-md border border-green-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 📋 2. QUICK ELIGIBILITY CHECKER */}
          <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Quick Eligibility Check</h3>
              <p className="text-xs text-gray-500">নিচের প্রশ্নগুলোর উত্তর দিয়ে রক্তদানের যোগ্যতা পরীক্ষা করুন</p>
            </div>

            <div className="space-y-3">
              {/* Question 1 */}
              <label className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  আপনার বয়স কি ১৮ থেকে ৬৫ বছরের মধ্যে?
                </span>
                <input
                  type="checkbox"
                  checked={eligibility.age}
                  onChange={() => handleCheckbox('age')}
                  className="w-4 h-4 accent-red-600 rounded cursor-pointer"
                />
              </label>

              {/* Question 2 */}
              <label className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  আপনার শারীরিক ওজন কি অন্তত ৫০ কেজির বেশি?
                </span>
                <input
                  type="checkbox"
                  checked={eligibility.weight}
                  onChange={() => handleCheckbox('weight')}
                  className="w-4 h-4 accent-red-600 rounded cursor-pointer"
                />
              </label>

              {/* Question 3 */}
              <label className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  সর্বশেষ রক্তদানের পর ৩ মাস বা ১২ সপ্তাহ সময় পার হয়েছে?
                </span>
                <input
                  type="checkbox"
                  checked={eligibility.interval}
                  onChange={() => handleCheckbox('interval')}
                  className="w-4 h-4 accent-red-600 rounded cursor-pointer"
                />
              </label>

              {/* Question 4 */}
              <label className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  আপনি কি কোনো দীর্ঘমেয়াদী সংক্রামক বা বড় রোগে মুক্ত?
                </span>
                <input
                  type="checkbox"
                  checked={eligibility.health}
                  onChange={() => handleCheckbox('health')}
                  className="w-4 h-4 accent-red-600 rounded cursor-pointer"
                />
              </label>
            </div>

            {/* Result Display Box */}
            <div
              className={`p-4 rounded-xl flex items-center gap-3 transition-all ${
                isEligible
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-amber-50 border border-amber-200 text-amber-800'
              }`}
            >
              {isEligible ? (
                <>
                  <FaCircleCheck className="text-2xl text-green-600 shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold">অভিনন্দন! আপনি রক্তদানের জন্য সম্পূর্ণ যোগ্য।</h4>
                    <p className="text-[11px] text-green-700">আজই একজন মুমূর্ষু রোগীর জীবন বাঁচাতে রক্তদান করতে এগিয়ে আসুন।</p>
                  </div>
                </>
              ) : (
                <>
                  <FaCircleXmark className="text-2xl text-amber-600 shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold">সবগুলো ঘর টিক দিন</h4>
                    <p className="text-[11px] text-amber-700">রক্তদানের জন্য সবগুলো প্রাথমিক শর্ত পূরণ হওয়া আবশ্যক।</p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BloodCompatibilityEligibility;