import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Signup Successful 🎉");

    navigate("/login");
  };

  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gradient-to-br
      from-purple-900
      via-blue-900
      to-indigo-700
      p-6
      "
    >
      <div
        className="
        bg-white
        p-10
        rounded-3xl
        shadow-2xl
        w-full
        max-w-md
        "
      >
        <h1
          className="
          text-4xl
          font-bold
          text-center
          mb-3
          "
        >
          🚀 Signup
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Create your SportsHub account
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
            className="
            w-full
            border
            p-4
            rounded-xl
            mb-4
            "
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
            className="
            w-full
            border
            p-4
            rounded-xl
            mb-4
            "
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
            className="
            w-full
            border
            p-4
            rounded-xl
            mb-6
            "
          />

          <button
            type="submit"
            className="
            w-full
            bg-purple-600
            text-white
            p-4
            rounded-xl
            font-bold
            hover:bg-purple-700
            duration-300
            "
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-purple-600 font-bold ml-2"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;