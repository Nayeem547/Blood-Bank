import React, { useState } from 'react';
import { FaTint, FaExclamationTriangle, FaCheckCircle, FaSearch, FaThLarge, FaTable } from 'react-icons/fa';

const BloodStock = () => {
  // ডেমো স্টক ডাটা
  const [bloodStock] = useState([
    { id: 1, group: 'A+', bags: 14, status: 'Available' },
    { id: 2, group: 'A-', bags: 3, status: 'Low Stock' },
    { id: 3, group: 'B+', bags: 18, status: 'Available' },
    { id: 4, group: 'B-', bags: 2, status: 'Critical' },
    { id: 5, group: 'AB+', bags: 8, status: 'Available' },
    { id: 6, group: 'AB-', bags: 1, status: 'Critical' },
    { id: 7, group: 'O+', bags: 22, status: 'Available' },
    { id: 8, group: 'O-', bags: 4, status: 'Low Stock' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' অথবা 'table' ভিউ টগল করার জন্য

  // সার্চ ফিল্টার লজিক
  const filteredStock = bloodStock.filter(item =>
    item.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* পেজ হেডার */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-2 shadow-inner">
            <FaTint className="text-xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Blood Stock Status
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Check real-time availability of blood bags in our bank
          </p>
        </div>

        {/* সার্চ ও ভিউ টগল বার */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
          <div className="relative w-full sm:max-w-sm">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search blood group (e.g. A+, O-)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <div className="text-xs sm:text-sm text-gray-500 font-medium">
              Total Groups: <span className="text-red-600 font-bold">{bloodStock.length}</span>
            </div>

            {/* গ্রিড এবং টেবিল ভিউ টগল বাটন */}
            <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
                title="Grid View"
              >
                <FaThLarge /> Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                  viewMode === 'table' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
                title="Table View"
              >
                <FaTable /> Table
              </button>
            </div>
          </div>
        </div>

        {/* যদি কোনো ডেটা না থাকে */}
        {filteredStock.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
            <p className="text-gray-500 text-sm">No blood group found matching your search.</p>
          </div>
        )}

        {/* ১. স্টক গ্রিড কার্ড ভিউ */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredStock.map((item) => {
              const isLow = item.bags < 5;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-5 shadow-sm border transition-all hover:shadow-md flex flex-col justify-between ${
                    isLow ? 'border-red-300 bg-red-50/25' : 'border-gray-200'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-2xl sm:text-3xl font-extrabold text-red-600 bg-red-50 px-3 py-1 rounded-xl">
                        {item.group}
                      </span>
                      
                      {/* স্টক স্ট্যাটাস ব্যাজ ও ওয়ার্নিং */}
                      {isLow ? (
                        <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full animate-pulse">
                          <FaExclamationTriangle className="text-xs" /> Low Stock
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                          <FaCheckCircle className="text-xs" /> Available
                        </span>
                      )}
                    </div>

                    <div className="mt-4">
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                        Available Quantity
                      </p>
                      <p className="text-2xl font-bold text-gray-800 mt-0.5">
                        {item.bags} <span className="text-sm font-normal text-gray-500">Bags</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span>Status:</span>
                    <span className={`font-semibold ${isLow ? 'text-red-600' : 'text-green-600'}`}>
                      {item.bags === 0 ? 'Out of Stock' : isLow ? 'Urgent Needed' : 'Good Condition'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ২. স্টক টেবিল ভিউ */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                    <th className="py-3 px-4 sm:px-6">Blood Group</th>
                    <th className="py-3 px-4 sm:px-6">Available Bags</th>
                    <th className="py-3 px-4 sm:px-6">Indicator / Status</th>
                    <th className="py-3 px-4 sm:px-6">Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {filteredStock.map((item) => {
                    const isLow = item.bags < 5;

                    return (
                      <tr key={item.id} className={`hover:bg-gray-50/50 ${isLow ? 'bg-red-50/20' : ''}`}>
                        <td className="py-3 px-4 sm:px-6">
                          <span className="font-extrabold text-red-600 bg-red-50 px-2.5 py-1 rounded-lg">
                            {item.group}
                          </span>
                        </td>
                        <td className="py-3 px-4 sm:px-6 font-bold text-gray-800">
                          {item.bags} <span className="text-xs font-normal text-gray-500">Bags</span>
                        </td>
                        <td className="py-3 px-4 sm:px-6">
                          {isLow ? (
                            <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                              <FaExclamationTriangle className="text-xs" /> Low Stock Warning
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                              <FaCheckCircle className="text-xs" /> Sufficient
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 sm:px-6">
                          <span className={`font-semibold text-xs ${isLow ? 'text-red-600' : 'text-green-600'}`}>
                            {item.bags === 0 ? 'Out of Stock' : isLow ? 'Urgent Needed' : 'Good Condition'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BloodStock;