import React, { useState } from 'react';
import { FaHospital, FaClock, FaPlus, FaNotesMedical, FaTimes, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const BloodRequests = () => {
  const [requests, setRequests] = useState([
    { 
      id: 1, 
      patientName: "Md. Karim", 
      bloodGroup: "O+", 
      hospital: "CMH Hospital, Dhaka", 
      bags: 2, 
      phone: "+8801811223344",
      time: "2 hours ago", 
      urgency: "High" 
    },
    { 
      id: 2, 
      patientName: "Sara Ahmed", 
      bloodGroup: "B-", 
      hospital: "City Medical, Chattogram", 
      bags: 1, 
      phone: "+8801922334455",
      time: "5 hours ago", 
      urgency: "Medium" 
    },
    { 
      id: 3, 
      patientName: "Jashim Uddin", 
      bloodGroup: "AB+", 
      hospital: "General Hospital, Sylhet", 
      bags: 3, 
      phone: "+8801733445566",
      time: "1 day ago", 
      urgency: "High" 
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // নতুন রিকোয়েস্ট ফর্ম স্টেট
  const [newRequest, setNewRequest] = useState({
    patientName: "",
    bloodGroup: "A+",
    hospital: "",
    bags: 1,
    phone: "",
    urgency: "High"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqObj = {
      id: Date.now(),
      ...newRequest,
      time: "Just now"
    };
    setRequests([reqObj, ...requests]);
    setIsModalOpen(false);
    setNewRequest({ patientName: "", bloodGroup: "A+", hospital: "", bags: 1, phone: "", urgency: "High" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* পেজ হেডার */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Urgent Blood <span className="text-red-600">Requests</span>
          </h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Check current emergency requests and step forward to save a life.
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-red-200 cursor-pointer"
        >
          <FaPlus /> Request Blood
        </button>
      </div>

      {/* রিকোয়েস্ট গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((req) => (
          <div key={req.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col justify-between">
            <div>
              {/* কার্ড হেডার: আইকন + নাম + আর্জেন্টিন্যাস ব্যাজ */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg shadow-inner">
                    <FaUser />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{req.patientName}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <FaClock className="text-gray-400" /> {req.time}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-xl text-xs font-extrabold ${req.urgency === 'High' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                  {req.urgency}
                </span>
              </div>

              {/* ব্লাড গ্রুপ হাইলাইট বক্স */}
              <div className="flex justify-between items-center bg-red-50/50 px-4 py-3 rounded-xl border border-red-100 my-4">
                <span className="text-sm font-semibold text-gray-600">Required Blood Group</span>
                <span className="font-extrabold text-red-600 text-2xl">{req.bloodGroup}</span>
              </div>

              {/* ডিটেইলস ইনফো */}
              <div className="space-y-2.5 text-gray-600 text-sm mb-6">
                <p className="flex items-center gap-2.5">
                  <FaHospital className="text-red-500 text-base flex-shrink-0" /> 
                  <span className="font-medium text-gray-700">{req.hospital}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <FaNotesMedical className="text-red-500 text-base flex-shrink-0" /> 
                  <span>Quantity: <strong className="text-gray-800">{req.bags} Bags</strong></span>
                </p>
              </div>
            </div>

            {/* ডোনেট বাটন */}
            <a 
              href={`tel:${req.phone}`}
              className="w-full bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all border border-red-200 hover:border-transparent"
            >
              <FaPhone /> Call For Donation
            </a>
          </div>
        ))}
      </div>

      {/* উন্নত ও সুন্দর মোডাল */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-lg relative shadow-2xl animate-scaleIn">
            
            {/* ক্লোজ বাটন */}
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 flex items-center justify-center transition-all cursor-pointer"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Create Blood Request</h2>
            <p className="text-sm text-gray-500 mb-6">Fill up the details so donors can reach out quickly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Patient Name</label>
                <input 
                  required 
                  type="text" 
                  value={newRequest.patientName}
                  onChange={(e) => setNewRequest({...newRequest, patientName: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-800" 
                  placeholder="e.g. Md. Rahim" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Blood Group</label>
                  <select 
                    value={newRequest.bloodGroup}
                    onChange={(e) => setNewRequest({...newRequest, bloodGroup: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-800 cursor-pointer"
                  >
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Required Bags</label>
                  <input 
                    required 
                    type="number" 
                    min="1"
                    value={newRequest.bags}
                    onChange={(e) => setNewRequest({...newRequest, bags: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-800" 
                    placeholder="2" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Hospital Name & Location</label>
                <input 
                  required 
                  type="text" 
                  value={newRequest.hospital}
                  onChange={(e) => setNewRequest({...newRequest, hospital: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-800" 
                  placeholder="e.g. CMH Hospital, Dhaka" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Contact Number</label>
                  <input 
                    required 
                    type="text" 
                    value={newRequest.phone}
                    onChange={(e) => setNewRequest({...newRequest, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-800" 
                    placeholder="+8801XXXXXXXXX" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Urgency Level</label>
                  <select 
                    value={newRequest.urgency}
                    onChange={(e) => setNewRequest({...newRequest, urgency: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all font-medium text-gray-800 cursor-pointer"
                  >
                    <option value="High">High Urgency</option>
                    <option value="Medium">Medium Urgency</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-red-200 cursor-pointer"
              >
                Submit Emergency Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BloodRequests;