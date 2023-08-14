import "../src/dist/styles.css";
import Navbar from "../src/components/Navbar";

import AutoMoreiraRouter from "./components/routes/AutoMoreiraRouter";

export default function App() {
  return (
    <>
      <Navbar />
      <AutoMoreiraRouter />
    </>
  );
}
