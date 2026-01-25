import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16 bg-linear-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-blue-100 mb-8">
          Get the latest deals and exclusive offers delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full flex-1 outline-none border"
          />
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
