import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    console.log('User Object:', user); // Log the user object for debugging

    const profilePic = user?.photoURL || 'default-profile-pic.jpg'; // Fallback to default picture
    const userName = user?.displayName || 'Anonymous User'; // Fallback for missing displayName

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch(error => console.error('ERROR:', error.message));
    };

    const links = (
        <>
            <li><NavLink to="/" className="text-gray-700 hover:text-gray-900">Home</NavLink></li>
            <li><NavLink to="/campaigns" className="text-gray-700 hover:text-gray-900">Campaigns</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/addCampaign" className="text-gray-700 hover:text-gray-900">Add Campaign</NavLink></li>
                    <li><NavLink to="/myCampaign" className="text-gray-700 hover:text-gray-900">My Campaign</NavLink></li>
                    <li><NavLink to="/myDonations" className="text-gray-700 hover:text-gray-900">My Donations</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <NavLink to="/" className="text-2xl font-bold text-gray-900">Crowdcube</NavLink>
                </div>
                <div className="hidden lg:flex space-x-4">
                    <ul className="flex space-x-4 text-xs">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700">
                                <img className="w-10 rounded-full" src={profilePic} alt="User profile" />
                            </button>
                            {isHovered && (
                                <div className="absolute top-full right-1 bg-white p-4 rounded shadow-lg z-10">
                                    <p className="text-gray-700 mb-2 text-xs">{userName}</p>
                                    <button
                                        className="btn btn-outline btn-danger"
                                        onClick={handleLogOut}
                                    >
                                        Log out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <NavLink to="/register" className="text-gray-700 hover:text-gray-900">SignUp</NavLink>
                            <NavLink to="/signin" className="text-gray-700 hover:text-gray-900">SignIn</NavLink>
                        </div>
                    )}
                </div>
                <div className="lg:hidden">
                    <div className="dropdown relative">
                        <button tabIndex={0} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="dropdown-menu absolute right-0 mt-3 p-2 shadow bg-white rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
