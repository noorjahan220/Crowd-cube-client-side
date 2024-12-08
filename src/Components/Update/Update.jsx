import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";



const Update = () => {
  const update = useLoaderData();
  const { campaignTitle, campaignType,image, description, minDonation, deadline } = update
  const { user } = useContext(AuthContext);

  console.log(update._id)
const handleUpdate = event =>{
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

  fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/addCampaignById/${update._id}`,{
    method:'PUT',
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify(newCamp)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.insertedId){
      Swal.fire({
        title : "success!",
        text : 'User Added Successfully',
        icon:'success',
        confirmButtonText:'Cool'

      })
    }
  })





}

return(
    <div className="p-6 bg-base-200 rounded-lg shadow-lg max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-center">UpdateCamp{campaignTitle}</h2>

   <form onSubmit={handleUpdate}>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Campaign Thumbnail URL</span>
        </label>
        <input
          type="url"
          name="image"
          defaultValue={image}
          placeholder="Enter image URL"
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
          name="name"
          defaultValue={campaignTitle}
          placeholder="Enter campaign title"
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control mb-4">
        <label className="label"  defaultValue={campaignType}>
          <span className="label-text">Campaign Type</span>
        </label>
        <select name="campaignType" className="select select-bordered w-full" required>
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
          defaultValue={description}
          placeholder="Describe your campaign"
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
          defaultValue={minDonation}
          placeholder="Enter minimum donation amount"
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
          defaultValue={deadline}
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
        <button type="submit" className="btn btn-primary w-full" >
         Update        </button>
      </div>
    </form>
  </div>

  )
}
  
export default Update;
