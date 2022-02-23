import React from "react";
import { Navigate } from "react-router";

export const PrivateRoute = ({ isLoggedIn, children }) => {
    return isLoggedIn ? children : <Navigate to="/loginpage" />;
};


