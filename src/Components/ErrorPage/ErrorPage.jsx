import React from 'react';
import Lottie from 'lottie-react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import lottie404Animation from '../../assets/Animation - 1733754136478.json'; 

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
            <Fade>
                <Lottie animationData={lottie404Animation} className="max-w-full h-auto mb-8" />
            </Fade>
            <Fade cascade>
                <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        404
                    </span>
                </h1>
                <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">Oops! Page not found.</p>
                <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                    Go to Home
                </Link>
            </Fade>
        </div>
    );
};

export default ErrorPage;
