import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const { title, type, description, minDonation, deadline, _id } = campaign;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/campaign/${_id}`);
  };

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
            <td>{title}</td>
            <td>{type}</td>
            <td>{description}</td>
            <td>${minDonation}</td>
            <td>{new Date(deadline).toLocaleDateString()}</td>
            <td>
              {/* Details Button */}
              <button
                className="btn btn-primary btn-sm"
                onClick={handleDetails}
              >
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CampaignCard;
