import React, { useContext } from "react";

import {
    Navigate
} from "react-router-dom";

import {
    CarContext
} from "../Context/CarContext";

function ProtectedRoute({ children }) {

    const { token } =
        useContext(CarContext);



    // NO TOKEN
    if (token === '') {

        return (
            <Navigate
                to="/admin/login"
                replace
            />
        );
    }



    // ALLOW ACCESS
    return children;
}

export default ProtectedRoute;