/** @format */

import {useRoutes} from "react-router-dom";
import AdminClient from "../pages/admin/client/AdminClient";
import AdminHome from "../pages/admin/home/AdminHome";
import AdminMark from "../pages/admin/mark";
import AdminModel from "../pages/admin/model/AdminModel";
import AdminProfile from "../pages/admin/profile/AdminProfile";
import AdminUser from "../pages/admin/user/AdminUser";
import AdminVehicle from "../pages/admin/vehicles/AdminVehicle";
import Vehicle from "../components/vehicles/vehicle/Vehicle";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home/Home";
import Team from "../pages/team";
import Testimonials from "../pages/testimonials";
import Login from "../pages/user/login";
import Registration from "../pages/user/registration";
import Vehicles from "../pages/vehicles";

import {useAppSelector} from "../redux/hooks";

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
        {path: ":id", element: <Vehicle />},
      ],
    },
    {
      path: "/testimonials",
      element: <Testimonials />,
      id: "testimonials",
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

  const user = useAppSelector((state) => state.userSlice.user);

  if (user) {
    routes.push({
      path: "/admin",
      id: "admin",
      children: [
        {index: true, element: <AdminHome />},
        {path: "profile", element: <AdminProfile />},
        {path: "users", element: <AdminUser />},
        {path: "marks", element: <AdminMark />},
        {path: "models", element: <AdminModel />},
        {path: "vehicles", element: <AdminVehicle />},
        {path: "clients", element: <AdminClient />},
      ],
    });
  } else {
    routes.push({
      path: "/user",
      id: "user",
      children: [
        {index: true, element: <Login />},
        {path: "login", element: <Login />},
        {path: "registration", element: <Registration />},
      ],
    });
  }

  return useRoutes(routes);
}
