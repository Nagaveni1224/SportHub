import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: form.name,
      email: form.email,
    });

    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div
        className="
          relative
          w-full
          max-w-2xl
          bg-white/95
          backdrop-blur-xl
          rounded-3xl
          shadow-2xl
          p-10
          md:p-14
        "
      >
        <h1 className="text-6xl font-extrabold text-center mb-4">
          🔐 Login
        </h1>

        <p className="text-center text-gray-500 text-lg mb-10">
          Welcome back! Sign in to continue.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="
                w-full
                p-5
                text-lg
                rounded-2xl
                border
                border-gray-300
                focus:outline-none
                focus:ring-4
                focus:ring-blue-300
              "
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="
                w-full
                p-5
                text-lg
                rounded-2xl
                border
                border-gray-300
                focus:outline-none
                focus:ring-4
                focus:ring-blue-300
              "
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="
                w-full
                p-5
                text-lg
                rounded-2xl
                border
                border-gray-300
                focus:outline-none
                focus:ring-4
                focus:ring-blue-300
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              py-5
              text-xl
              font-bold
              text-white
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
          >
            Login
          </button>
        </form>

        <p className="text-center mt-8 text-lg">
          Don't have an account?

          <Link
            to="/signup"
            className="ml-2 text-blue-600 font-bold hover:text-purple-600"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;