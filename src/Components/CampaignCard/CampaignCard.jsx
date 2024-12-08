import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const { campaignTitle, campaignType, description, minDonation, deadline } = campaign;
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto lg:p-10 p-4">
      <div className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2">Campaign Title</th>
              <th className="px-4 py-2">Campaign Type</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Minimum Donation</th>
              <th className="px-4 py-2">Deadline</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="border px-4 py-2">{campaignTitle}</td>
              <td className="border px-4 py-2">{campaignType}</td>
              <td className="border px-4 py-2">{description}</td>
              <td className="border px-4 py-2">${minDonation}</td>
              <td className="border px-4 py-2">{new Date(deadline).toLocaleDateString()}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => navigate(`/campaign/${campaign._id}`)}
                  className="btn btn-primary bg-gray-800 text-white hover:bg-gray-700 transition w-full"
                >
                  See More
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignCard;
