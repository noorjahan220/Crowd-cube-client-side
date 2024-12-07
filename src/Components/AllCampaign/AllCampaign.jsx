import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../CampaignCard/CampaignCard';

const AllCampaign = () => {

    // Correct usage of useLoaderData
    const campaigns = useLoaderData();

    return (
        <div>
           <h2>
            {campaigns && campaigns.length > 0 ? (
                campaigns.map(campaign => (
                    <CampaignCard key={campaign._id} campaign={campaign} />
                ))
            ) : (
                <p>No campaigns available.</p>
            )}
           </h2>
        </div>
    );
};

export default AllCampaign;
