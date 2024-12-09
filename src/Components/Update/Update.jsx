import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Update = () => {
  const update = useLoaderData();
  const { _id, campaignTitle, campaignType, image, description, minDonation, deadline } = update;
  const { user } = useContext(AuthContext);

  const handleUpdate = event => {
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
    };

    fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignById/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCamp)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success("Campaign updated successfully!");
        } else {
          toast.error("Campaign didn't update.");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Update Campaign: {campaignTitle}
          </span>
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">Campaign Thumbnail URL</span>
            </label>
            <input
              type="url"
              name="image"
              defaultValue={image}
              placeholder="Enter image URL"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black text-xs font-medium"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">Campaign Title</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={campaignTitle}
              placeholder="Enter campaign title"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black text-xs font-medium"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">Campaign Type</span>
            </label>
            <select
              name="campaignType"
              className="select select-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black text-xs font-medium"
              defaultValue={campaignType}
              required
            >
              <option value="personal_issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative_ideas">Creative Ideas</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Describe your campaign"
              className="textarea textarea-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black text-xs font-medium"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="minDonation"
              defaultValue={minDonation}
              placeholder="Enter minimum donation amount"
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black text-xs font-medium"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black text-xs font-medium"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">User Email</span>
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full bg-gray-200 dark:bg-gray-600 text-black dark:text-black text-xs font-medium"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black dark:text-black text-[1rem] font-semibold">User Name</span>
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full bg-gray-200 dark:bg-gray-600 text-black dark:text-black text-xs font-medium"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
