import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';



const Navbar = () => {
    // Destructure `user` from `AuthContext`
    const { user , signOutUser } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                console.log('user sign out successfully')
            })
            .catch(error => console.log('ERROR', error.message))
    };
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/campaigns">All Campaign</NavLink></li>
            {
                user && <>
                <li><NavLink to="/addCampaign">Add new Campaign</NavLink></li>
            <li><NavLink to="/myCampaign">My Campaign</NavLink></li>
            <li><NavLink to="/myDonations">My Donations</NavLink></li>
                
                
                </>
            }

        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div
                        className="user-profile"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ position: 'relative' }}
                    >
                        <a className="btn">{user.email}</a> {/* Display user's email */}

                        {/* Hover Effect: Show Display Name and Log Out Button */}
                        {isHovered && (
                            <div
                                className="user-info"
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '0',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 1,
                                }}
                            >
                                <p>{user.displayName}</p> {/* Display user's display name */}
                                <button
                                    className="btn btn-primary"
                                    onClick={handleLogOut} // Handle log out
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Show Register and SignIn links if the user is not logged in
                    <>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/signin">Sign In</NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
