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
        const result = await response.json();
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{campaignTitle}</h2>
          <p className="text-sm text-gray-600">Type: {campaignType}</p>
          <p className="text-sm text-gray-600">Deadline: {new Date(deadline).toLocaleDateString()}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Description</h3>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Minimum Donation</h3>
          <p className="text-gray-700">${minDonation}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleDonate}
            disabled={isLoading}
            className="btn btn-primary bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            {isLoading ? 'Processing...' : 'Donate'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
