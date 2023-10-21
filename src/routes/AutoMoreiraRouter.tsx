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
import AdminClients from "../pages/admin/AdminClients";
import { useAppSelector } from "../redux/hooks";

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
        { index: true, element: <Vehicles /> },
        { path: ":id", element: <VehiclePage /> },
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
      path: "/user",
      id: "user",
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "registration", element: <Registration /> },
      ],
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
        { index: true, element: <AdminHome /> },
        { path: "mark", element: <AdminMark /> },
        { path: "model", element: <AdminModel /> },
        { path: "user", element: <AdminUser /> },
        { path: "vehicle", element: <AdminVehicle /> },
        { path: "info", element: <AdminClients /> },
      ],
    });
  }

  const element = useRoutes(routes);

  return element;
}
