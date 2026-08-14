import React from 'react';
import { FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-2 pt-2">
          <span className="bg-red-100 text-red-600 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Contact <span className="text-red-600">LifeLine</span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto px-2">
            আপনার কোনো প্রশ্ন, পরামর্শ বা জরুরি সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="bg-red-600 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <p className="text-red-100 text-xs sm:text-sm leading-relaxed">
              জরুরি রক্তদান সেবা বা যেকোনো সহায়তার জন্য সরাসরি আমাদের সাথে কল বা ইমেইলে যোগাযোগ করতে পারেন।
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full text-lg shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs text-red-200">Phone</p>
                  <p className="text-sm font-semibold break-all">+880 1800-000000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full text-lg shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-red-200">Email</p>
                  <p className="text-sm font-semibold break-all">support@lifeline.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full text-lg shrink-0">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-xs text-red-200">Location</p>
                  <p className="text-sm font-semibold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-2 bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:border-red-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;