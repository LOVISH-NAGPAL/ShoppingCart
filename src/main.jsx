// main.jsx (or index.jsx)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { MyProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyProvider>
      <App />
    </MyProvider>
  </BrowserRouter>
);
