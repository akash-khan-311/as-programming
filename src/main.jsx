import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserContext from "./Context/UserContext.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/PublicRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={Router} />
    </UserContext>
  </React.StrictMode>
);
