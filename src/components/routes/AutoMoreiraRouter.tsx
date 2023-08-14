import { useRoutes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Team from "../../pages/Team";
import TestimonialsPage from "../../pages/TestimonialsPage";
import Vehicles from "../../pages/Vehicles";
import VehicleDetails from "../vehicle/VehicleDetails";
import Home from "../../pages/Home";

export default function AutoMoreiraRouter() {
  /*  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vehicles">
        <Route index element={<Vehicles />} />
        <Route path=":id" element={<VehicleDetails />} />
      </Route>
      <Route path="testimonials" element={<TestimonialsPage />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  ); */
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
        { path: ":id", element: <VehicleDetails /> },
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
