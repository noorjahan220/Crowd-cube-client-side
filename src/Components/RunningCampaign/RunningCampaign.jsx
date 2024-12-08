import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        console.error("Error fetching campaigns:", error);
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Running Campaigns</h2>
      {campaigns.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map(campaign => (
            <div key={campaign._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={campaign.image} alt={campaign.campaignTitle} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{campaign.campaignTitle}</h3>
                <p className="text-gray-700 mb-2">{campaign.description}</p>
                <p className="text-sm text-gray-600">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
                <button
                  onClick={() => navigate(`/campaign/${campaign._id}`)}
                  className="mt-4 btn btn-primary bg-gray-800 text-white hover:bg-gray-700 transition w-full"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">No running campaigns found.</p>
      )}
    </div>
  );
};

export default RunningCampaign;
