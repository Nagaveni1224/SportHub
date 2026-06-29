import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-white"
        >
          🏆 SportHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/sports"
            className="text-lg font-semibold text-white hover:text-yellow-300 transition"
          >
            Sports
          </Link>

          {user ? (
            <>
              <span
  className="
    inline-flex
    items-center
    justify-center
    min-w-[110px]
    px-8
    py-2.5
    bg-white
    text-purple-700
    rounded-xl
    font-bold
    text-lg
    shadow-md
  "
>
  👋 Hi, {user.name}
</span>

<button
  onClick={logout}
  className="
    inline-flex
    items-center
    justify-center
    min-w-[80px]
    px-8
    py-2.5
    bg-red-500
    text-white
    rounded-xl
    font-bold
    text-lg
    shadow-md
    hover:bg-red-600
    transition
  "
>
  Logout
</button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg font-semibold text-white hover:text-yellow-300 transition"
              >
                Login
              </Link>

              <Link
  to="/signup"
  className="
    inline-flex
    items-center
    justify-center
    min-w-[80px]
    px-8
    py-2.5
    bg-white
    text-purple-700
    rounded-xl
    font-bold
    text-lg
    shadow-md
    hover:bg-yellow-300
    hover:text-black
    transition
  "
>
  Signup
</Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-5 gap-4">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/sports" onClick={() => setOpen(false)}>
              Sports
            </Link>

            {user ? (
              <>
                <p className="font-bold text-purple-700">
                  👋 Hi, {user.name}
                </p>

                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="bg-red-500 text-white py-3 rounded-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="bg-blue-600 text-white text-center py-3 rounded-xl"
                >
                  Signup
                </Link>
              </>
            )}

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;