import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  FaHeartPulse, 
  FaUsers, 
  FaHandHoldingHeart, 
  FaShieldHalved, 
  FaClock, 
  FaLocationDot, 
  FaChevronDown, 
  FaChevronUp 
} from 'react-icons/fa6';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // এখানে সরাসরি স্ল্যাশ (/) দিয়ে পাবলিক ফোল্ডারের পাথ দেওয়া হয়েছে
  const teamMembers = [
    {
      name: "Sheikh Tanvir Ahammed Rahi",
      role: "Management Team",
      img: "/person1.jpg", 
      blood: "A+"
    },
    {
      name: "Nayeem Hossen",
      role: "Management Team",
      img: "/person2.jpg", 
      blood: "B+"
    },
    {
      name: "Shariyar Khan",
      role: "Management Team",
      img: "/person3.jpg", 
      blood: "O+"
    }
  ];

  const faqData = [
    {
      question: "LifeLine থেকে কি রক্ত পেতে কোনো টাকা দিতে হয়?",
      answer: "না! LifeLine সম্পূর্ণ ফ্রি এবং স্বেচ্ছাসেবী প্ল্যাটফর্ম। রক্তদাতা বা গ্রহীতার কাছ থেকে কোনো ধরনের ফি নেওয়া হয় না।"
    },
    {
      question: "আমি কীভাবে একজন রক্তদাতা হিসেবে নিবন্ধিত হতে পারি?",
      answer: "আপনি নেভবার বা ফুটারের 'Become a Donor' অপশনে গিয়ে আপনার নাম, ব্লাড গ্রুপ এবং লোকেশন দিয়ে খুব সহজেই রেজিস্ট্রেশন করতে পারেন।"
    },
    {
      question: "কত দিন পর পর রক্তদান করা নিরাপদ?",
      answer: "সাধারণত একজন সুস্থ মানুষ প্রতি ১২ সপ্তাহ বা ৩ মাস পর পর নিয়মিত রক্তদান করতে পারেন।"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* 1. Hero / Header Section */}
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
            <FaHeartPulse /> About LifeLine Blood Network
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800">
            Connecting Hearts, <span className="text-red-600">Saving Lives</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            জরুরি মুহূর্তে রক্তদাতা ও গ্রহীতার মধ্যে দ্রুততম উপায়ে সংযোগ তৈরি করাই আমাদের মূল লক্ষ্য। আমাদের প্রতিটি পদক্ষেপ মানুষের জীবন রক্ষার অঙ্গীকার নিয়ে পরিচালিত।
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
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs text-center space-y-2 hover:border-red-200 transition-colors">
              <div className="text-red-600 text-2xl flex justify-center mb-3">
                <FaClock />
              </div>
              <h4 className="font-semibold text-gray-800">দ্রুত অনুসন্ধান</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                লোকেশন এবং ব্লাড গ্রুপ দিয়ে কয়েক সেকেন্ডের মধ্যে ডোনার খুঁজুন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs text-center space-y-2 hover:border-red-200 transition-colors">
              <div className="text-red-600 text-2xl flex justify-center mb-3">
                <FaShieldHalved />
              </div>
              <h4 className="font-semibold text-gray-800">নিরাপদ তথ্য</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                রক্তদাতাদের ব্যক্তিগত তথ্যের সুরক্ষা এবং সর্বোচ্চ গোপনীয়তা রক্ষা।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs text-center space-y-2 hover:border-red-200 transition-colors">
              <div className="text-red-600 text-2xl flex justify-center mb-3">
                <FaHandHoldingHeart />
              </div>
              <h4 className="font-semibold text-gray-800">১০০% ফ্রী সার্ভিস</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                আমাদের সার্ভিস সম্পূর্ণ বিনামূল্যে মানবসেবায় নিবেদিত।
              </p>
            </div>
          </div>
        </div>

        {/* 5. Dynamic Core Team Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">আমাদের মূল টিম</h2>
            <p className="text-gray-500 text-xs sm:text-sm">যারা পর্দার আড়ালে থেকে সিস্টেমটি সচল রেখেছেন</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs text-center space-y-3 hover:shadow-md transition-all">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-red-500 p-0.5" 
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{member.name}</h4>
                  <p className="text-xs text-red-600 font-medium">{member.role}</p>
                </div>
                <div className="inline-block bg-red-50 text-red-700 text-xs px-3 py-1 rounded-full font-semibold">
                  Blood Group: {member.blood}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Dynamic FAQ */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            সাধারণ কিছু <span className="text-red-600">প্রশ্ন ও উত্তর</span>
          </h2>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <span className="text-red-600">
                    {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 7. Google Map Integration Section */}
        <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:test-2xl font-bold text-gray-800">আমাদের অবস্থান</h2>
            <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1">
              <FaLocationDot className="text-red-600" /> খুলসি, চট্টগ্রাম ৪১০০, বাংলাদেশ
            </p>
          </div>
          <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-gray-200 shadow-xs">
            <iframe
              title="LifeLine Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.163456388439!2d91.8153!3d22.3569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8822e11d01b%3A0x673a55e10b1a03d0!2sKhulshi%2C%26nbsp%3BChittagong!5e0!3m2!1sen!2sbd!4v1650000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;