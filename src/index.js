import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CusineProvider from "./Context/CusineProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CusineProvider>
        <App />
      </CusineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
