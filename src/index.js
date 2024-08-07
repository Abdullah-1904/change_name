import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Error from "./pages/error/error";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

// in the homepage, this will be child of dashboard in the outlet in home.jsx
const Dashboard = () => <div>Dashboard Content</div>;

const router = createBrowserRouter([
  {
    // element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          // i have not written /dashboard as this will link to another page, dashboard means that inside
          // /home there is another / that could be dashboard or other
          { path: "dashboard", element: <Dashboard /> },
          // { path: "dashboard", element: <Dashboard /> }
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
