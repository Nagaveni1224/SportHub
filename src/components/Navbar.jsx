import { NavLink } from "react-router-dom";
import { useContext } from "react";

import favicon from "../assets/favicon.png";

import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <nav
      className={`${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-blue-900 text-white"
      } px-6 py-3 flex justify-between items-center shadow-md`}
    >
      <NavLink
        to="/"
        className="flex items-center gap-3"
      >
        <img
        src={favicon}
        alt="SportsHub Logo"
        className="w-10 h-10"
        />

        <h1 className="text-3xl font-bold">
          SportsHub
        </h1>
      </NavLink>

      <div className="flex items-center gap-8 text-lg font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300"
              : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/sports"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300"
              : "hover:text-yellow-300"
          }
        >
          Sports
        </NavLink>

        {!user ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Signup
            </NavLink>
          </>
        ) : (
          <>
            <span>
              👋 Hi, {user?.name || "User"}
            </span>

            <button
              onClick={logout}
              className="
                bg-red-500
                hover:bg-red-600
                px-4
                py-2
                rounded
                transition
              "
            >
              Logout
            </button>
          </>
        )}

        <button
          onClick={toggleTheme}
          className="text-2xl hover:text-yellow-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;