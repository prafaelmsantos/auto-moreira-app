import "../src/dist/styles.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import TestimonialsPage from "./pages/TestimonialsPage";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
