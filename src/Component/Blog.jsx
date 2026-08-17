import React from 'react';
import { FaBookOpen, FaHeart } from 'react-icons/fa6';

const Blog = () => {
  const blogs = [
    {
      title: "নিয়মিত রক্তদানের অবিশ্বাস্য স্বাস্থ্য উপকারিতা",
      date: "August 15, 2026",
      desc: "রক্তদান কেবল অন্যের জীবন বাঁচায় না, বরং এটি রক্তদাতার নিজের শরীর ও হৃদপিণ্ডের স্বাস্থ্য সুরক্ষায়ও দারুণ ভূমিকা রাখে। জেনে নিন নিয়মিত রক্তদানের বিজ্ঞানসম্মত উপকারিতাগুলো।",
      category: "Health Tips"
    },
    {
      title: "জরুরি মুহূর্তে রক্ত সংগ্রহের সঠিক নিয়ম ও সতর্কতা",
      date: "August 10, 2026",
      desc: "রোগীর জরুরি প্রয়োজনে কীভাবে সঠিক ডোনার খুঁজে পাবেন এবং রক্ত নেওয়ার সময় কী কী মেডিকেল টেস্ট ও সতর্কতা অবলম্বন করা জরুরি, তা নিয়ে বিস্তারিত গাইড।",
      category: "Emergency Guide"
    },
    {
      title: "এক ব্যাগ রক্ত কীভাবে তিনটি জীবন বাঁচাতে পারে?",
      date: "August 05, 2026",
      desc: "ডোনেট করা রক্ত ল্যাবরেটরিতে কীভাবে বিভিন্ন উপাদান (যেমন: প্লাজমা, অণুচক্রিকা, লোহিত রক্তকণিকা) এ আলাদা করে একাধিক রোগীর কল্যাণে ব্যবহার করা হয়।",
      category: "Awareness"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            <FaBookOpen /> LifeLine Blog & Stories
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            রক্তদান ও জনসচেতনতামূলক <span className="text-red-600">ব্লগ</span>
          </h1>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            আপনার ছোট একটি রক্তদান কীভাবে সমাজে পরিবর্তন আনছে এবং স্বাস্থ্য সম্পর্কিত বিভিন্ন প্রয়োজনীয় তথ্য জানতে আমাদের ব্লগ পড়ুন।
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <span className="text-xs bg-red-50 text-red-600 font-semibold px-2.5 py-1 rounded-md">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800 leading-snug">{blog.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{blog.desc}</p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>{blog.date}</span>
                <span className="text-red-600 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                  <FaHeart /> Read More
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;