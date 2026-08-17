import React, { useState } from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaTint, 
  FaHistory, 
  FaEdit, 
  FaCheckCircle, 
  FaClock, 
  FaHeart,
  FaShieldAlt
} from 'react-icons/fa';

const Profile = () => {
  // Demo User / Donor Data
  const [userData, setUserData] = useState({
    name: 'মেহেদী হাসান',
    email: 'mehedi@example.com',
    phone: '+8801711000000',
    bloodGroup: 'A+',
    location: 'ঢাকা, ধানমন্ডি',
    isAvailable: true,
    lastDonated: '১৫ এপ্রিল, ২০২৪',
    totalDonations: 6,
    joinDate: 'জানুয়ারি, ২০২৩',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  // History Data
  const donationHistory = [
    { id: 1, hospital: 'ঢাকা মেডিকেল কলেজ হাসপাতাল', date: '১৫ এপ্রিল, ২০২৪', recipient: 'জরুরি সার্জারি' },
    { id: 2, hospital: 'স্কয়ার হাসপাতাল, পান্থপথ', date: '১০ নভেম্বর, ২০২৩', recipient: 'ডেঙ্গু রোগী (প্লাটিলেট)' },
    { id: 3, hospital: 'ল্যাবএইড স্পেশালাইজড হাসপাতাল', date: '০৫ জুন, ২০২৩', recipient: 'অ্যানিমিয়া রোগী' },
  ];

  const handleToggleAvailability = () => {
    setUserData((prev) => ({ ...prev, isAvailable: !prev.isAvailable }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUserData({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-0 opacity-70"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar & Blood Group Badge */}
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-red-100 border-4 border-white shadow-md flex items-center justify-center text-red-600 font-bold text-3xl">
                {userData.name.charAt(0)}
              </div>
              <span className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-xl shadow-md flex items-center gap-1 border-2 border-white">
                <FaTint /> {userData.bloodGroup}
              </span>
            </div>

            {/* Info & Status */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">
                    {userData.name}
                    <FaCheckCircle className="text-blue-500 text-base" title="Verified Donor" />
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">মেম্বার হিসেবে আছেন: {userData.joinDate}</p>
                </div>

                {/* Status Toggle Button */}
                <button
                  onClick={handleToggleAvailability}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
                    userData.isAvailable
                      ? 'bg-green-100 text-green-700 border border-green-300 hover:bg-green-200'
                      : 'bg-amber-100 text-amber-700 border border-amber-300 hover:bg-amber-200'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${userData.isAvailable ? 'bg-green-600 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span>{userData.isAvailable ? 'রক্তদানে প্রস্তুত (Available)' : 'বিশ্রামে আছেন (Unavailable)'}</span>
                </button>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center md:text-left">
                  <span className="text-[11px] text-gray-500 block">মোট রক্তদান</span>
                  <span className="text-lg font-extrabold text-red-600">{userData.totalDonations} বার</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center md:text-left">
                  <span className="text-[11px] text-gray-500 block">সর্বশেষ দান</span>
                  <span className="text-sm font-bold text-gray-700">{userData.lastDonated}</span>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-gray-50 p-3 rounded-xl border border-gray-100 text-center md:text-left">
                  <span className="text-[11px] text-gray-500 block">অবস্থান</span>
                  <span className="text-sm font-bold text-gray-700 truncate block">{userData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Info Edit & History */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Personal Info / Form Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <FaUser className="text-red-600" /> ব্যক্তিগত তথ্য
              </h3>
              <button
                onClick={() => {
                  setFormData({ ...userData });
                  setIsEditing(!isEditing);
                }}
                className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1.5 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 transition-all"
              >
                <FaEdit /> {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="editName" className="block text-xs font-semibold text-gray-600 mb-1">পূর্ণ নাম</label>
                    <input
                      id="editName"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="editPhone" className="block text-xs font-semibold text-gray-600 mb-1">ফোন নম্বর</label>
                    <input
                      id="editPhone"
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="editEmail" className="block text-xs font-semibold text-gray-600 mb-1">ইমেইল</label>
                    <input
                      id="editEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="editLocation" className="block text-xs font-semibold text-gray-600 mb-1">বর্তমান ঠিকানা</label>
                    <input
                      id="editLocation"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-95"
                  >
                    সেভ করুন
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <FaUser className="text-gray-400 text-base" />
                  <div>
                    <span className="text-[11px] text-gray-400 block">নাম</span>
                    <span className="font-semibold text-gray-700">{userData.name}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <FaEnvelope className="text-gray-400 text-base" />
                  <div>
                    <span className="text-[11px] text-gray-400 block">ইমেইল</span>
                    <span className="font-semibold text-gray-700">{userData.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <FaPhone className="text-gray-400 text-base" />
                  <div>
                    <span className="text-[11px] text-gray-400 block">ফোন নম্বর</span>
                    <span className="font-semibold text-gray-700">{userData.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <FaMapMarkerAlt className="text-gray-400 text-base" />
                  <div>
                    <span className="text-[11px] text-gray-400 block">ঠিকানা</span>
                    <span className="font-semibold text-gray-700">{userData.location}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Donation History Section */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b pb-4">
              <FaHistory className="text-red-600" /> রক্তদানের ইতিহাস
            </h3>

            <div className="space-y-3">
              {donationHistory.map((item) => (
                <div key={item.id} className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 space-y-1">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1 font-medium">
                      <FaClock className="text-amber-500" /> {item.date}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">
                      দান সম্পন্ন
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-gray-800">{item.hospital}</h4>
                  <p className="text-[11px] text-gray-500">রোগীর বিবরণ: {item.recipient}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                <FaShieldAlt className="text-green-500" /> আপনার প্রতি রক্তদান একটি জীবন বাঁচায়
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;