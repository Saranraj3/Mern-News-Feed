import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ authenticated, component }) => {
  return authenticated ? component : <Navigate to="/login" />;
};

export default ProtectedRoute;
