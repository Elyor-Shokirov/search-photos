import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <ToastContainer />
  </GlobalContextProvider>
);
