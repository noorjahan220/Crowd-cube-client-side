import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserCampaigns = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
           ` https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignByEmail/${user.email}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch campaigns.');
        }
        const data = await response.json();
        setCampaigns(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchUserCampaigns();
  }, [user.email]);

  const handleUpdate = (id) => {
    // Update campaign logic here
    console.log(`Update campaign with id: ${id}`);
  };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(
//         https://your-backend-url/deleteCampaign/${id},
//         {
//           method: 'DELETE',
//         }
//       );
//       if (!response.ok) {
//         throw new Error('Failed to delete the campaign.');
//       }
//       setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Your Campaigns</h3>

      {isLoading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!isLoading && !error && campaigns.length === 0 && (
        <p className="text-center">No campaigns found.</p>
      )}

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Min Donation</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{campaign.campaignTitle}</td>
              <td className="border px-4 py-2">{campaign.campaignType}</td>
              <td className="border px-4 py-2">{campaign.description}</td>
              <td className="border px-4 py-2">{campaign.minDonation}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdate(campaign._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(campaign._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;