import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
          `https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignByEmail/${user.email}`
        );
        if (response.status === 404) {
          setCampaigns([]);
        } else {
          const data = await response.json();
          setCampaigns(data);
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchUserCampaigns();
  }, [user.email]);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/deleteCampaign/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setCampaigns(campaigns.filter(campaign => campaign._id !== id));
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:p-6 p-2 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Your Campaigns</h3>

        {isLoading && <p className="text-center text-blue-600 dark:text-blue-400">Loading...</p>}
        {error && <p className="text-center text-red-600 dark:text-red-400">{error}</p>}
        {!isLoading && !error && campaigns.length === 0 && (
          <p className="text-center text-gray-700 dark:text-gray-300">No campaigns found.</p>
        )}

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Min Donation</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {campaigns.map((campaign) => (
                <tr key={campaign._id} className="hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
                  <td className="border px-4 py-2">{campaign.campaignTitle}</td>
                  <td className="border px-4 py-2">{campaign.campaignType}</td>
                  <td className="border px-4 py-2">{campaign.description}</td>
                  <td className="border px-4 py-2">${campaign.minDonation}</td>
                  <td className="border px-4 py-2 text-center">
                    <Link to={`/update/${campaign._id}`}>
                      <button className="w-24 py-2 rounded-lg mb-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
                        Update
                      </button>
                    </Link>
                    <button
                      className="w-24 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
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
      </div>
    </div>
  );
};

export default MyCampaign;
