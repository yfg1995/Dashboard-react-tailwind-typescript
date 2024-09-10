import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import { Settings } from "./pages/Settings";
import { Overview } from "./pages/Overview";
import { Chat } from "./pages/Chat";
import { Team } from "./pages/Team";
import { Tasks } from "./pages/Tasks";
import { Reports } from "./pages/Reports";
import { useRoutes } from "react-router-dom";
import { Layout } from "./Layout";

const pages = {
  dashboard: {
    path: "/",
    children: <Dashboard />,
  },
  overview: {
    path: "/overview",
    children: <Overview />,
  },
  chat: {
    path: "/chat",
    children: <Chat />,
  },
  team: {
    path: "/team",
    children: <Team />,
  },
  tasks: {
    path: "/tasks",
    children: <Tasks />,
  },
  reports: {
    path: "/reports",
    children: <Reports />,
  },
  settings: {
    path: "/settings",
    children: <Settings />,
  },
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: Object.values(pages).map(({ path, children }) => {
      return {
        path,
        element: children,
        errorElement: <ErrorPage />,
      };
    }),
  },
];

export const App = () => {
  const element = useRoutes(routes);

  return element;
};
