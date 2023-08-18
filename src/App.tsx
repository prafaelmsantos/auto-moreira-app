import "../src/dist/styles.css";
import Navbar from "./components/shared/navbar/Navbar";

import AutoMoreiraRouter from "./routes/AutoMoreiraRouter";

export default function App() {
  return (
    <>
      <Navbar />
      <AutoMoreiraRouter />
    </>
  );
}
