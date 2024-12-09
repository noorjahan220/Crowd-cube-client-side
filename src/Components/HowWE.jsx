import React from 'react';

const HowWeWork = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How We Work</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 1: Create a Campaign</h3>
              <p className="text-gray-700">Start by creating a campaign with your project's details, goals, and timeline.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 2: Share Your Campaign</h3>
              <p className="text-gray-700">Promote your campaign across social media and other platforms to reach more people.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Step 3: Receive Donations</h3>
              <p className="text-gray-700">Collect donations from your supporters and keep them updated on your progress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
