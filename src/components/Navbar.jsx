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
      className={`
        ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-blue-900 text-white"
        }
        shadow-xl
        sticky
        top-0
        z-50
      `}
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-5
        flex
        justify-between
        items-center
        "
      >
        {/* Logo */}
        <h1
          className="
          flex
          items-center
          gap-3
          text-4xl
          font-extrabold
          cursor-pointer
          "
        >
          <img
            src={favicon}
            alt="SportsHub Logo"
            className="w-12 h-12"
          />

          <span>
            SportsHub 
          </span>
        </h1>

        {/* Navigation Links */}
        <div
          className="
          flex
          items-center
          gap-8
          text-xl
          font-semibold
          "
        >
          <NavLink
            to="/"
            className="hover:text-yellow-300 duration-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/sports"
            className="hover:text-yellow-300 duration-300"
          >
            Sports
          </NavLink>

          <NavLink
            to="/players"
            className="hover:text-yellow-300 duration-300"
          >
            Players
          </NavLink>

          <NavLink
            to="/leagues"
            className="hover:text-yellow-300 duration-300"
          >
            Leagues
          </NavLink>

          <NavLink
            to="/scores"
            className="hover:text-yellow-300 duration-300"
          >
            Scores
          </NavLink>

          <NavLink
            to="/venues"
            className="hover:text-yellow-300 duration-300"
          >
            Venues
          </NavLink>

          {user ? (
            <>
              <span className="text-lg">
                👋 Hi, {user.name}
              </span>

              <button
                onClick={logout}
                className="
                bg-red-500
                hover:bg-red-600
                px-4
                py-2
                rounded-lg
                duration-300
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="hover:text-yellow-300 duration-300"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="
                bg-white
                text-blue-900
                px-4
                py-2
                rounded-lg
                hover:scale-105
                duration-300
                "
              >
                Signup
              </NavLink>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
            text-2xl
            hover:scale-110
            duration-300
            "
          >
            {darkMode ? (
              <FaSun />
            ) : (
              <FaMoon />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;