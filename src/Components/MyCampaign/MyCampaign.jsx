import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';


const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const id = campaigns.length > 0 ? campaigns[0]._id:null;
const navigate = useNavigate();

 useEffect(() => {
  const fetchUserCampaigns = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
       ` https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignByEmail/${user.email}`
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
}, [user.email]);

 
const handleDelete =  id => {
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
         

        fetch (` https://b10-a10-server-side-noorjahan220.vercel.app/deleteCampaign/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deleteCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })
        }
      });
}
 

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
                <Link to= {`/update/${id}`}>
                <button
                  className="btn btn-primary mr-2"
                >
                  Update
                </button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(id)}
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