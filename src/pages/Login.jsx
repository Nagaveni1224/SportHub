import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920')",
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
          🔐 Login
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "22px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Welcome back! Sign in to continue.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "92%",
            margin: "0 auto",
          }}
        >
          {/* Username */}
          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Username
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
                placeholder="Enter your username"
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          
          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "18px",
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
                  background: "transparent",
                }}
              />
            </div>
          </div>

        
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "18px",
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
                placeholder="Enter your password"
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  background: "transparent",
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              height: "58px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(to right,#2563eb,#9333ea)",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "18px",
          }}
        >
          Don't have an account?

          <Link
            to="/signup"
            style={{
              marginLeft: "8px",
              color: "#2563eb",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;