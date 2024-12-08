import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleLogOut = () => {
        signOutUser()
            .then(() => console.log("User signed out successfully"))
            .catch((error) => console.log("ERROR", error.message));
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className="hover:text-green-500">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/campaigns" className="hover:text-green-500">
                    All Campaign
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to="/addCampaign" className="hover:text-green-500">
                            Add New Campaign
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myCampaign" className="hover:text-green-500">
                            My Campaign
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myDonations" className="hover:text-green-500">
                            My Donations
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-white shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
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
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                    >
                        {links}
                    </ul>
                </div>
                {/* Brand Name/Logo */}
                <NavLink to="/" className="text-2xl font-bold text-green-600">
                    Crowdcube
                </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div
                        className="dropdown dropdown-hover"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar flex items-center space-x-2"
                        >
                            <div className="w-8 rounded-full">
                                <img src={user.photoURL || "https://via.placeholder.com/150"} alt="User Avatar" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                        >
                            <li>
                                <span className="font-medium">{user.displayName || "User"}</span>
                            </li>
                            <li>
                                <button
                                    className="btn btn-error btn-sm text-white"
                                    onClick={handleLogOut}
                                >
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <NavLink
                            to="/register"
                            className="btn btn-outline btn-sm mx-1 hover:text-green-500"
                        >
                            Register
                        </NavLink>
                        <NavLink
                            to="/signin"
                            className="btn btn-primary btn-sm text-white"
                        >
                            Sign In
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;