import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {

    const loadedUser = useLoaderData();
    console.log(loadedUser)
    return (
        <div>
            <h3>Details about {loadedUser.campaignTitle}</h3>
        </div>
    );
};

export default DetailsPage;