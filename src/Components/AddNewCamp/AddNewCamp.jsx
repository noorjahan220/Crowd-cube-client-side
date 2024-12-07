import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddNewCamp = () => {
    const [isLoading, setIsLoading] = useState(false); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors
    const [successMessage, setSuccessMessage] = useState(null); // Success message state
    const { user } = useContext(AuthContext);
    console.log(user)
    const handleAddCamp = async (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading
        setError(null); // Reset error
        setSuccessMessage(null); // Reset success message

        const form = event.target;

        // Get form values
        const image = form.image.value;
        const campaignTitle = form.name.value;
        const campaignType = form.campaignType.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;

        const newCamp = { image, campaignTitle, campaignType, description, minDonation, deadline };

        console.log("New Campaign Data:", newCamp); // Debugging

        try {
            const response = await fetch("https://b10-a10-server-side-noorjahan220.vercel.app/addCampaign", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCamp),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Server Response:", data);
            setSuccessMessage("Campaign added successfully!"); // Display success message
        } catch (err) {
            console.error("Error adding campaign:", err);
            setError("Failed to add the campaign. Please try again later.");
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="p-6 bg-base-200 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Campaign</h2>

            {isLoading && <p className="text-center text-blue-600">Loading...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}
            {successMessage && <p className="text-center text-green-600">{successMessage}</p>}

            <form onSubmit={handleAddCamp}>
                {/* Campaign Thumbnail URL */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Campaign Thumbnail URL</span>
                    </label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Enter image URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Campaign Title */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Campaign Title</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter campaign title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Campaign Type */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Campaign Type</span>
                    </label>
                    <select name="campaignType" className="select select-bordered w-full" required>
                        <option value="personal_issue">Personal Issue</option>
                        <option value="startup">Startup</option>
                        <option value="business">Business</option>
                        <option value="creative_ideas">Creative Ideas</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Describe your campaign"
                        className="textarea textarea-bordered w-full"
                        required
                    />
                </div>

                {/* Minimum Donation Amount */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Minimum Donation Amount</span>
                    </label>
                    <input
                        type="number"
                        name="minDonation"
                        placeholder="Enter minimum donation amount"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Deadline */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input
                        type="date"
                        name="deadline"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* User Email (Read-Only) */}
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

                {/* User Name (Read-Only) */}
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

                {/* Add Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                        {isLoading ? "Adding..." : "Add Campaign"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewCamp;