import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-700 mb-6">Subscribe to our newsletter for the latest news and updates.</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-200"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
