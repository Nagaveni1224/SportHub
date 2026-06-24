import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: form.email.split("@")[0]
    });

    navigate("/");
  };

  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gradient-to-br
      from-blue-900
      via-purple-900
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
          🔐 Login
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Welcome back to SportsHub
        </p>

        <form onSubmit={handleSubmit}>

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
            bg-blue-600
            text-white
            p-4
            rounded-xl
            font-bold
            hover:bg-blue-700
            duration-300
            "
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 font-bold ml-2"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;