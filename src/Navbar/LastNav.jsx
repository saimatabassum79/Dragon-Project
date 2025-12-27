import React, { useContext } from 'react';
import icon from '../../src/assets/user.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const LastNav = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-6 lg:px-20 ">
      
      {/* Left side placeholder for logo / future items */}
      <div className="mb-2 sm:mb-0"></div>

      {/* Nav Links */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <NavLink
          to="/category/01"
          end
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b-2 border-black pb-1"
              : "text-gray-500 hover:text-black transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b-2 border-black pb-1"
              : "text-gray-500 hover:text-black transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b-2 border-black pb-1"
              : "text-gray-500 hover:text-black transition"
          }
        >
          Career
        </NavLink>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        {user?.email ? (
          <div className="flex items-center gap-2">
            <p className="text-sm">{user.displayName}</p>
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user.photoURL}
              alt="user"
            />
          </div>
        ) : (
          <img className="w-10 h-10 rounded-full object-cover" src={icon} alt="user" />
        )}

        {user?.email ? (
          <button
            onClick={logOut}
            className="bg-gray-900 text-white w-20 px-4 py-1 rounded text-sm sm:text-base hover:bg-gray-800 transition"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-gray-900 text-white w-20 px-4 py-1 rounded text-sm sm:text-base hover:bg-gray-800 transition"
          >
            Login
          </Link>
        )}
      </div>

    </nav>
  );
};

export default LastNav;
