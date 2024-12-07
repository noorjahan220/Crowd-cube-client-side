import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

 
  
  useEffect(() => {
    // Fetch the campaigns from the backend
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('https://b10-a10-server-side-noorjahan220.vercel.app/addCampaign');
        const data = await response.json();

        // Get the current date and filter campaigns that are still running
        const currentDate = new Date();
        const runningCampaigns = data.filter(campaign => new Date(campaign.deadline) >= currentDate);

        const limitedCampaigns = runningCampaigns.slice(0, 6);

        setCampaigns(limitedCampaigns); // Store only running campaigns in state
        setLoading(false); // Stop the loading indicator
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchCampaigns();
  }, []); // Runs once when the component mounts

  // Loading Spinner
  if (loading) {
    return <div className="loading">Loading...</div>;
  }


  
  return (
    <div>
      <h2>Running Campaigns</h2>
      {campaigns.length > 0 ? (
        <div className="campaign-list">
          {campaigns.map(campaign => (
            <div key={campaign._id} className="campaign-item">
              <img src={campaign.image} alt={campaign.campaignTitle} className="campaign-image" />
              <h3>{campaign.campaignTitle}</h3>
              <p>{campaign.description}</p>
              <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
              <button
                onClick={() => navigate(`/campaign/${campaign._id}`)}
                className="btn btn-primary"
              >see more</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No running campaigns found.</p>
      )}
    </div>
  );
};

export default RunningCampaign;
