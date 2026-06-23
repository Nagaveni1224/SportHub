import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const savedUser =
      JSON.parse(
        localStorage.getItem(
          "registeredUser"
        )
      );

    if (
      savedUser?.email === email &&
      savedUser?.password === password
    ) {

      login(savedUser);

      alert("Login Success");

      navigate("/");
    }
    else {

      alert(
        "Invalid Credentials"
      );

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h1 className="text-3xl font-bold mb-5 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-3 mb-4"
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 mb-4"
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button
          className="
          bg-green-600
          text-white
          w-full
          p-3
          rounded
          "
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;