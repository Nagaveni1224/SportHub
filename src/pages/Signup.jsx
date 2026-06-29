import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Signup Successful 🎉");
    navigate("/login");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/70"></div>

      
      <div
        className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl"
        style={{
          width: "700px",
          padding: "45px 55px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "54px",
            fontWeight: "800",
            color: "#1f2937",
          }}
        >
          🚀 Signup
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "22px",
            marginTop: "5px",
            marginBottom: "20px",
          }}
        >
          Create your account and start exploring.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "92%",
            margin: "0 auto",
          }}
        >
          
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "17px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Full Name
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "50px",
                border: "1px solid #d1d5db",
                borderRadius: "14px",
                padding: "0 18px",
              }}
            >
              <FaUser
                style={{
                  color: "#9ca3af",
                  fontSize: "18px",
                  marginRight: "12px",
                }}
              />

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  color: "#374151",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "17px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Email Address
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "50px",
                border: "1px solid #d1d5db",
                borderRadius: "14px",
                padding: "0 18px",
              }}
            >
              <FaEnvelope
                style={{
                  color: "#9ca3af",
                  fontSize: "18px",
                  marginRight: "12px",
                }}
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  color: "#374151",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "17px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Password
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "50px",
                border: "1px solid #d1d5db",
                borderRadius: "14px",
                padding: "0 18px",
              }}
            >
              <FaLock
                style={{
                  color: "#9ca3af",
                  fontSize: "18px",
                  marginRight: "12px",
                }}
              />

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  color: "#374151",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "17px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Confirm Password
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "50px",
                border: "1px solid #d1d5db",
                borderRadius: "14px",
                padding: "0 18px",
              }}
            >
              <FaLock
                style={{
                  color: "#9ca3af",
                  fontSize: "18px",
                  marginRight: "12px",
                }}
              />

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  color: "#374151",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          
          <button
            type="submit"
            style={{
              width: "100%",
              height: "55px",
              border: "none",
              borderRadius: "14px",
              background: "linear-gradient(to right,#9333ea,#2563eb)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "28px",
            fontSize: "17px",
          }}
        >
          Already have an account?
          <Link
            to="/login"
            style={{
              marginLeft: "8px",
              color: "#2563eb",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;