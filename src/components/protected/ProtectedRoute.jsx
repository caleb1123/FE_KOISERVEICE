import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated, role }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role && role !== "admin" && role !== "veterinarian") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
