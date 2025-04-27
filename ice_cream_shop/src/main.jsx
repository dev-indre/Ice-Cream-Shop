import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage.jsx";
import SingleProductPage from "./Single-product-components/Single-Product-Page.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/products/:id",
    element: <SingleProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
