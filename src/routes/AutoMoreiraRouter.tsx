/** @format */

import {useRoutes} from "react-router-dom";
import Vehicle from "../components/vehicles/vehicle/Vehicle";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home/Home";
import Team from "../pages/team";
import Vehicles from "../pages/vehicles";

export default function AutoMoreiraRouter() {
  const routes = [
    {
      path: "/",
      element: <Home />,
      id: "home",
    },
    {
      path: "/about",
      element: <About />,
      id: "about",
    },
    {
      path: "/vehicles",
      id: "vehicles",
      children: [
        {index: true, element: <Vehicles />},
        {path: "?markId=:id", element: <Vehicle />},
        {path: ":id", element: <Vehicle />},
      ],
    },
    {
      path: "/team",
      element: <Team />,
      id: "team",
    },
    {
      path: "/contact",
      element: <Contact />,
      id: "contact",
    },
    {
      path: "/*",
      element: <Home />,
      id: "home",
    },
  ];

  return useRoutes(routes);
}
