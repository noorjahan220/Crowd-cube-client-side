import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const AddNewCamp = () => {
  const { user } = useContext(AuthContext);

  const handleAddCamp = async (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const campaignTitle = form.name.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;

    const newCamp = {
      image,
      campaignTitle,
      campaignType,
      description,
      minDonation,
      deadline,
      email: user.email,
      displayName: user.displayName,
    };

    try {
      const response = await fetch("https://b10-a10-server-side-noorjahan220.vercel.app/addCampaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCamp),
      });
      const data = await response.json();
      console.log("Response data:", data);
      toast.success("Campaign added successfully!");
      form.reset();
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to add the campaign. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div><Toaster /></div>
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Create Campaign
          </span>
        </h2>
        <form onSubmit={handleAddCamp} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">Campaign Thumbnail URL</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">Campaign Title</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter campaign title"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">Campaign Type</span>
            </label>
            <select name="campaignType" className="select select-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black" required>
              <option value="personal_issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative_ideas">Creative Ideas</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Describe your campaign"
              className="textarea textarea-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="minDonation"
              placeholder="Enter minimum donation amount"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">User Email</span>
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full bg-gray-200 dark:bg-gray-600 text-black dark:text-black"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black">User Name</span>
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full bg-gray-200 dark:bg-gray-600 text-black dark:text-black"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
              Add New Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCamp;
