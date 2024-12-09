import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const { campaignTitle, campaignType, description, minDonation, deadline } = campaign;
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto px-4 py-2">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow-lg rounded-lg transition duration-300 hover:shadow-2xl">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2 whitespace-nowrap">Campaign Title</th>
                <th className="px-4 py-2 whitespace-nowrap">Campaign Type</th>
                <th className="px-4 py-2 whitespace-nowrap">Description</th>
                <th className="px-4 py-2 whitespace-nowrap">Minimum Donation</th>
                <th className="px-4 py-2 whitespace-nowrap">Deadline</th>
                <th className="px-4 py-2 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="border px-4 py-2 text-black dark:text-black">{campaignTitle}</td>
                <td className="border px-4 py-2 text-black dark:text-black">{campaignType}</td>
                <td className="border px-4 py-2 text-black dark:text-black">{description}</td>
                <td className="border px-4 py-2 text-black dark:text-black">${minDonation}</td>
                <td className="border px-4 py-2 text-black dark:text-black">{new Date(deadline).toLocaleDateString()}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => navigate(`/campaign/${campaign._id}`)}
                    className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    See More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
