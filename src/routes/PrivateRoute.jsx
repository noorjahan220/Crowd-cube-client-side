import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // Handle the loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-md"></span>
            </div>
        );
    }

    // If user exists, render the child components
    if (user) {
        return children;
    }

    // Otherwise, redirect to the sign-in page
    return <Navigate to="/signin" />;
};

export default PrivateRoute;
