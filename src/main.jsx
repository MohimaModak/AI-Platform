import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import ImageGeneration from "./assets/Component/ImageGeneration/ImageGeneration";
import Features from "./assets/Component/Features/Features";
import Benefits from "./assets/Component/Benefits/Benefits";
import Testimonials from "./assets/Component/Testimonials/Testimonials";
import Pricing from "./assets/Component/Pricing/Pricing";
import Contact from "./assets/Component/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ImageGeneration",
        element: <ImageGeneration></ImageGeneration>,
      },
      {
        path: "/Features",
        element: <Features></Features>,
      },
      {
        path: "/Benefits",
        element: <Benefits></Benefits>,
      },
      {
        path: "/Testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/Pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
