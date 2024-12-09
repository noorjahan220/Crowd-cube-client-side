import React from 'react';
import { FaBullhorn, FaShareAlt, FaHandsHelping } from 'react-icons/fa';

const HowWeWork = () => {
  return (
    <section className="py-12 mt-9 mb-9">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            How We Work
          </span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <FaBullhorn className="text-2xl text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Step 1</h3>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Create a Campaign</h4>
              <p className="text-gray-700 dark:text-gray-300 text-xs">
                Start by creating a campaign with your project's details, goals, and timeline.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <FaShareAlt className="text-2xl text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Step 2</h3>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Share Your Campaign</h4>
              <p className="text-gray-700 dark:text-gray-300 text-xs">
                Promote your campaign across social media and other platforms to reach more people.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <FaHandsHelping className="text-2xl text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Step 3</h3>
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Receive Donations</h4>
              <p className="text-gray-700 dark:text-gray-300 text-xs">
                Collect donations from your supporters and keep them updated on your progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
