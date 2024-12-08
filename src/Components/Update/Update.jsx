import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";

const Update = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const update = useLoaderData();
  const { campaignTitle, campaignType, description, minDonation, deadline, email, image } = update;

  const [formData, setFormData] = useState({
    campaignTitle: '',
    campaignType: '',
    description: '',
    minDonation: '',
    deadline: '',
    email: user.email,
    image: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    setFormData({
      campaignTitle,
      campaignType,
      description,
      minDonation,
      deadline,
      email,
      image
    });
  }, [campaignTitle, campaignType, description, minDonation, deadline, email, image]);

  const handleUpdateCampaign = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignById/${update._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage("Campaign updated successfully!");
      navigate(`/campaign/${update._id}`);
    } catch (err) {
      setError("Failed to update the campaign. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Campaign</h2>

      {isLoading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {successMessage && <p className="text-center text-green-600">{successMessage}</p>}

      <form onSubmit={handleUpdateCampaign}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Campaign Thumbnail URL</span>
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Campaign Title</span>
          </label>
          <input
            type="text"
            name="campaignTitle"
            value={formData.campaignTitle}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Campaign Type</span>
          </label>
          <select
            name="campaignType"
            value={formData.campaignType}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="personal_issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative_ideas">Creative Ideas</option>
          </select>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Minimum Donation Amount</span>
          </label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Campaign"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
