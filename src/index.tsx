import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Overview } from "./pages/Overview";
import { Chat } from "./pages/Chat";
import { Team } from "./pages/Team";
import { Tasks } from "./pages/Tasks";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
