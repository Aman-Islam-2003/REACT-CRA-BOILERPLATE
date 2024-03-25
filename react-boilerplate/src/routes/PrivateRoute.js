import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state.userReducer.isAuthenticated
  );
  const location = useLocation();

  if (isAuthenticated === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
