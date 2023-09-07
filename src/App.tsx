import { useEffect } from "react";
import "../src/dist/styles.css";
import Navbar from "./components/shared/navbar/Navbar";
import { IUser } from "./models/identity/User";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/userSlice";

import AutoMoreiraRouter from "./routes/AutoMoreiraRouter";

export default function App() {
  const dispatch = useAppDispatch();

  const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user ? (JSON.parse(user) as IUser) : null;
  };

  const user = getCurrentUser();

  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Navbar />
      <AutoMoreiraRouter />
    </>
  );
}
