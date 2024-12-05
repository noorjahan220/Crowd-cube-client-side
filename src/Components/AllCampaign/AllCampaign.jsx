import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../CampaignCard/CampaignCard';

const AllCampaign = () => {


    const campaigns = useLoaderData
    ();
    return (
        <div>
           <h2>
            {
                campaigns.map(campaign =><CampaignCard key={campaign._id} 
                campaign = {campaign}
                />)
            }
           </h2>
        </div>
    );
};

export default AllCampaign;