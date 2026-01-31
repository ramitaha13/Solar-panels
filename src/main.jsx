import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/home.jsx";
import QuoteCalculator from "./components/quoteCalculator.jsx";
import Login from "./components/login.jsx";
import Dashbord from "./components/dashboard.jsx";
import Projectspage from "./components/projectspage.jsx";
import Quotespage from "./components/quotespage.jsx";
import Clients from "./components/clientspage.jsx";
import SettingsPage from "./components/settingsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/quoteCalculator",
    element: <QuoteCalculator />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashbord />,
  },
  {
    path: "/projects",
    element: <Projectspage />,
  },
  {
    path: "/quotes",
    element: <Quotespage />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
