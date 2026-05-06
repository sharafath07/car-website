import React, { useState, useContext, useEffect } from "react";
import {
    Navigate
} from "react-router-dom";
import { CarContext } from "../Context/CarContext";

function ProtectedRoute({ children }) {

    const { token } = useContext(CarContext);

    useEffect(() => {
        if (!token) {
            return <Navigate to="/admin/login" replace />;
        }
    }, [token]);

    return children;
}

export default ProtectedRoute;