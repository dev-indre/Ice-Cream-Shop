import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import SingleProductPage from "./pages/Single-Product-Page.jsx";
import ProductsMenu from "./pages/ProductsMenu.jsx";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductsCreation from "./pages/ProductsCreation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/menu",
        element: <ProductsMenu />,
      },
      {
        path: "/products-registration",
        element: <ProductsCreation />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
