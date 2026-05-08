import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CarContextProvider from "./Context/CarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CarContextProvider>
      <App />
    </CarContextProvider>
  </BrowserRouter>
);