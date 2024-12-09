import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('https://b10-a10-server-side-noorjahan220.vercel.app/addCampaign');
        const data = await response.json();

        const currentDate = new Date();
        const runningCampaigns = data.filter(campaign => new Date(campaign.deadline) >= currentDate);
        const limitedCampaigns = runningCampaigns.slice(0, 6);

        setCampaigns(limitedCampaigns);
        setLoading(false);
      } catch (error) {
       
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-4 mb-4">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center">
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Running Campaigns
        </span>
      </h2>
      {campaigns.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map(campaign => (
            <div
              key={campaign._id}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden flex flex-col transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img src={campaign.image} alt={campaign.campaignTitle} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{campaign.campaignTitle}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{campaign.description}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
                </div>
                <button
                  onClick={() => navigate(`/campaign/${campaign._id}`)}
                  className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition w-full"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700 dark:text-gray-300">No running campaigns found.</p>
      )}
    </div>
  );
};

export default RunningCampaign;
