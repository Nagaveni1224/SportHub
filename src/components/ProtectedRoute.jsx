import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  console.log("ProtectedRoute rendered");
  console.log("User:", user);

  if (!user) {
    console.log("Redirecting to login...");
    return <Navigate to="/login" replace />;
  }

  console.log("Access granted");

  return children;
}

export default ProtectedRoute;