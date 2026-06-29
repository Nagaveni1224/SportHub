import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Signup Successful 🎉");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920')",
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
          🚀 Signup
        </h1>

        <p className="text-center text-gray-500 text-lg mb-10">
          Create your account and start exploring.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
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
              focus:ring-purple-300
              "
            />
          </div>

          <div className="mb-5">
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
              focus:ring-purple-300
              "
            />
          </div>

          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
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
              focus:ring-purple-300
              "
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              required
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
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
              focus:ring-purple-300
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
            from-purple-600
            to-blue-600
            hover:scale-105
            transition-all
            duration-300
            shadow-xl
            "
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-8 text-lg">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-purple-600 font-bold hover:text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;