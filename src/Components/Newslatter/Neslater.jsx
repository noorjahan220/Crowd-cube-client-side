import React from 'react';

const Newsletter = () => {
  return (
    <section className=" bg-gray-100 dark:bg-gray-800 p-12 mb-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Stay Updated
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Subscribe to our newsletter for the latest news and updates.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
