import React from 'react';

const AddNewCamp = () => {
    const handleAddCamp = event => {
        event.preventDefault();
       
        const form = event.target;

        // Get values from the form
        const image = form.image.value;
        const campaignTitle = form.name.value;
        const campaignType = form.campaignType.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;

        const newCamp  = {image, campaignTitle, campaignType ,description, minDonation, deadline  }


      
        // Log the values (for now, for debugging purposes)
        console.log(newCamp);


        // sed the data to the server

        fetch('http://localhost:5000/addCampaign',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCamp)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div className="p-6 bg-base-200 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Campaign</h2>

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
                    />
                </div>

                {/* Campaign Type */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Campaign Type</span>
                    </label>
                    <select name="campaignType" className="select select-bordered w-full">
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
                    />
                </div>

                {/* User Email (Read-Only) */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input
                        type="email"
                        value="user@example.com"
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
                        value="John Doe"
                        readOnly
                        className="input input-bordered w-full bg-gray-200"
                    />
                </div>

                {/* Add Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">Add Campaign</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewCamp;
