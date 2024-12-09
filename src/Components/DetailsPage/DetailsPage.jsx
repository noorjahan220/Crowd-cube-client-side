import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const DetailsPage = () => {
  const { user } = useContext(AuthContext);
  const campaign = useLoaderData();
  const { _id, campaignTitle, campaignType, description, minDonation, deadline } = campaign;
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = async () => {
    if (!user.email || !minDonation) {
      alert('Missing required fields. Please ensure all fields are filled out.');
      return;
    }

    const currentDate = new Date();
    const campaignDeadline = new Date(deadline);

    if (currentDate > campaignDeadline) {
      toast.error('The campaign deadline has passed. You cannot donate to this campaign.');
      return;
    }

    setIsLoading(true);

    const donationData = {
      campaignId: _id,
      email: user.email,
      username: user.displayName || 'Anonymous',
      donationAmount: minDonation,
    };

    try {
      const response = await fetch('https://b10-a10-server-side-noorjahan220.vercel.app/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        toast.success('Donation successful! Thank you for your support.');
      } else {
        toast.error('Donation failed. Please try again.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {campaignTitle}
          </span>
        </h2>
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">Type: {campaignType}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Deadline: {new Date(deadline).toLocaleDateString()}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">Description</h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">Minimum Donation</h3>
          <p className="text-gray-700 dark:text-gray-300">${minDonation}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleDonate}
            disabled={isLoading}
            className="btn w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? 'Processing...' : 'Donate'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
