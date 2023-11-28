import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from "./App.tsx";
import User from "./pages/User.tsx";
import Post from "./pages/Post.tsx";
import Register from "./pages/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
