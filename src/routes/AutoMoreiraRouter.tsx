import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import Testimonials from "../pages/Testimonials";
import Vehicles from "../pages/Vehicles";
import Home from "../pages/Home";
import VehiclePage from "../components/vehicle/VehiclePage";
import Login from "../pages/user/Login";
import Registration from "../pages/user/Registration";
import AdminHome from "../pages/admin/AdminHome";
import AdminVehicle from "../pages/admin/AdminVehicle";
import AdminUser from "../pages/admin/AdminUser";
import AdminMark from "../pages/admin/AdminMark";
import AdminModel from "../pages/admin/AdminModel";
import AdminInfo from "../pages/admin/AdminInfo";

export default function AutoMoreiraRouter() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
      id: "name",
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
      element: <Testimonials />,
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
      path: "/user",
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "registration", element: <Registration /> },
      ],
    },
    {
      path: "/admin",
      children: [
        { index: true, element: <AdminHome /> },
        { path: "mark", element: <AdminMark /> },
        { path: "model", element: <AdminModel /> },
        { path: "user", element: <AdminUser /> },
        { path: "vehicle", element: <AdminVehicle /> },
        { path: "info", element: <AdminInfo /> },
      ],
    },
    {
      path: "/*",
      element: <Home />,
    },
  ]);

  return element;
}
