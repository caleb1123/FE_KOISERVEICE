import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const authToken = useSelector((state) => state.auth.token);
  return authToken ? children : <Navigate to="/auth/login" />;
};
export default PrivateRoutes;
