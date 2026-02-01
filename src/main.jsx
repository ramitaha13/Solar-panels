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
import ProductsPage from "./components/productsPage.jsx";
import Savingscalculator from "./components/savingscalculator.jsx";
import Newprojectpage from "./components/newprojectpage.jsx";

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
    path: "/quote-calculator",
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
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/savings-calculator",
    element: <Savingscalculator />,
  },
  {
    path: "/newprojectpage",
    element: <Newprojectpage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
