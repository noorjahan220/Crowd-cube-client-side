import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import ThemeToggleButton from '../../Theme/ThemeToggleButton';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const profilePic = user?.photoURL || 'default-profile-pic.jpg';
  const userName = user?.displayName || 'Anonymous User';

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Successfully signed out!');
        console.log('User signed out successfully');
      })
      .catch(() => toast.error("Didn't sign out. Please try again."));
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/campaigns"
          className={({ isActive }) =>
            isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
          }
        >
          Campaigns
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addCampaign"
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }
            >
              Add Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myCampaign"
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }
            >
              My Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myDonations"
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }
            >
              My Donations
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 mb-8 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Crowdcube
          </NavLink>
        </div>
        <div className="hidden lg:flex space-x-4 items-center">
          <ul className="flex space-x-4 text-xs">
            {links}
          </ul>
          <ThemeToggleButton />
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 dark:text-gray-300">
                <img className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-500" src={profilePic} alt="User profile" />
              </button>
              {isHovered && (
                <div className="absolute top-full right-1 w-70  bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg z-10">
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-xs font-medium">{userName}</p>
                  <button
                    className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <NavLink to="/register" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-xs font-medium">
                SignUp
              </NavLink>
              <NavLink to="/signin" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-xs font-medium">
                SignIn
              </NavLink>
            </div>
          )}
          <div className="lg:hidden">
            <ThemeToggleButton />
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleDropdown} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
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
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-3 p-2 shadow bg-white dark:bg-gray-700 rounded-box w-52">
              {links}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
