import React from 'react';


const CampaignCard = ({ campaign }) => {
 
  const { campaignTitle, campaignType, description, minDonation, deadline } = campaign;

  console.log(campaign)


  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* Table Row for each campaign */}
        <thead>
          <tr>
            <th>Campaign Title</th>
            <th>Campaign Type</th>
            <th>Description</th>
            <th>Minimum Donation</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{campaignTitle}</td>
            <td>{campaignType}</td>
            <td>{description}</td>
            <td>${minDonation}</td>
            <td>{new Date(deadline).toLocaleDateString()}</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CampaignCard;
