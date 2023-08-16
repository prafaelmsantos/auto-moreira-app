import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import TestimonialsPage from "../pages/TestimonialsPage";
import Vehicles from "../pages/Vehicles";
import Home from "../pages/Home";
import VehiclePage from "../components/vehicle/VehiclePage";

export default function AutoMoreiraRouter() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/vehicles",
      children: [
        { index: true, element: <Vehicles /> },
        { path: ":id", element: <VehiclePage /> },
      ],
    },
    {
      path: "/testimonials",
      element: <TestimonialsPage />,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/*",
      element: <Home />,
    },
  ]);

  return element;
}