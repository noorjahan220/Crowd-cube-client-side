import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const DetailsPage = () => {
  const { user } = useContext(AuthContext); // Get logged-in user data
  const campaign = useLoaderData(); // Get campaign data from loader
  const { _id, campaignTitle, campaignType, description, minDonation, deadline } = campaign;
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = async () => {
    if (!user.email || !minDonation) {
      alert('Missing required fields. Please ensure all fields are filled out.');
      return;
    }
  
    setIsLoading(true); // Start loading
  
    const donationData = {
      campaignId: _id,
      email: user.email,
      username: user.displayName || 'Anonymous', // Use displayName if available
      donationAmount: minDonation, // Donation amount can be adjusted as needed
    };
  
    try {
      const response = await fetch('https://b10-a10-server-side-noorjahan220.vercel.app/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Donation successful! Thank you for your support.');
      } else {
        console.log("Error with donation:", response.statusText);
        alert('Donation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error making donation:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  
  
  return (
    <div>
      <p>{user.email}</p>
      <h3>Details about {campaignTitle}</h3>
      <p>Type: {campaignType}</p>
      <p>Description: {description}</p>
      <p>Minimum Donation: {minDonation}</p>
      <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
      <button onClick={handleDonate} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Donate'}
      </button>
    </div>
  );
};

export default DetailsPage;
