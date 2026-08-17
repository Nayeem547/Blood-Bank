import React, { useState } from 'react';
import { FaSearch, FaTint, FaMapMarkerAlt, FaPhone, FaCalendarAlt, FaUser } from 'react-icons/fa';

const Donors = () => {
  // ১. ডামি ডোনার ডেটা (পরে এটি API বা ডেটাবেস থেকে ফেচ করা যাবে)
  const allDonors = [
    { id: 1, name: "Md. Rahim Uddin", bloodGroup: "A+", location: "Chattogram", phone: "+8801811223344", lastDonation: "3 months ago" },
    { id: 2, name: "Fatema Akter", bloodGroup: "B+", location: "Dhaka", phone: "+8801922334455", lastDonation: "2 months ago" },
    { id: 3, name: "Tanvir Ahmed", bloodGroup: "O-", location: "Sylhet", phone: "+8801733445566", lastDonation: "5 months ago" },
    { id: 4, name: "Nusrat Jahan", bloodGroup: "AB+", location: "Chattogram", phone: "+8801644556677", lastDonation: "1 month ago" },
    { id: 5, name: "Imran Khan", bloodGroup: "O+", location: "Rajshahi", phone: "+8801556677889", lastDonation: "4 months ago" },
    { id: 6, name: "Sabrina Sultana", bloodGroup: "B-", location: "Dhaka", phone: "+8801867788990", lastDonation: "6 months ago" },
  ];

  // ২. স্টেট ম্যানেজমেন্ট
  const [selectedGroup, setSelectedGroup] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  // ৩. ফিল্টারিং লজিক
  const filteredDonors = allDonors.filter((donor) => {
    const matchesGroup = selectedGroup ? donor.bloodGroup === selectedGroup : true;
    const matchesLocation = searchLocation 
      ? donor.location.toLowerCase().includes(searchLocation.toLowerCase()) 
      : true;
    return matchesGroup && matchesLocation;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* পেজ হেডিং */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Find Blood <span className="text-red-600">Donors</span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Search for available blood donors by blood group and location.
        </p>
      </div>

      {/* সার্চ ও ফিল্টার সেকশন */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* রক্তের গ্রুপ ড্রপডাউন */}
        <div className="w-full md:w-1/2 flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
          <FaTint className="text-red-600 text-lg" />
          <select 
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 font-medium cursor-pointer"
          >
            <option value="">All Blood Groups</option>
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

        {/* লোকেশন সার্চ বার */}
        <div className="w-full md:w-1/2 flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
          <FaMapMarkerAlt className="text-red-600 text-lg" />
          <input 
            type="text"
            placeholder="Search by location (e.g., Chattogram, Dhaka)"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 font-medium"
          />
        </div>
      </div>

      {/* ডোনার কার্ড গ্রিড */}
      {filteredDonors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <div 
              key={donor.id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-6 flex flex-col justify-between"
            >
              <div>
                {/* কার্ডের ওপরের অংশ: নাম ও রক্তের গ্রুপ */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg shadow-inner">
                      <FaUser />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{donor.name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <FaMapMarkerAlt className="text-red-500" /> {donor.location}
                      </p>
                    </div>
                  </div>
             
                  <span className="bg-red-600 text-white font-extrabold px-3 py-1.5 rounded-xl text-sm shadow-sm">
                    {donor.bloodGroup}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4 my-4">
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400" /> Last Donation: <span className="font-semibold text-gray-700">{donor.lastDonation}</span>
                  </p>
                </div>
              </div>

              {/* কল বাটন */}
              <a 
                href={`tel:${donor.phone}`}
                className="w-full mt-2 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all border border-red-200 hover:border-transparent"
              >
                <FaPhone /> Call Donor
              </a>
            </div>
          ))}
        </div>
      ) : (
        /* যদি কোনো ডোনার না পাওয়া যায় */
        <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-500 font-medium">No donors found matching your criteria.</p>
          <button 
            onClick={() => { setSelectedGroup(""); setSearchLocation(""); }}
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-red-700 transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Donors;