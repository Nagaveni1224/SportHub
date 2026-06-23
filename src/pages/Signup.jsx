import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name,setName] =
    useState("");

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h1 className="text-3xl font-bold mb-5 text-center">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-3 mb-4"
          onChange={(e)=>
            setName(e.target.value)
          }
        />

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
          bg-blue-600
          text-white
          w-full
          p-3
          rounded
          "
        >
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;