/** @format */

import "./App.css";
import {useEffect} from "react";
import {useAppDispatch} from "./redux/hooks";
import AutoMoreiraRouter from "./routes/AutoMoreiraRouter";
import MobileNavbar from "./components/shared/navbar/MobileNavbar";
import Header from "./components/shared/navbar/Header";
import ToTop from "./components/shared/ToTop";
import GetTouch from "./components/shared/GetTouch";
import Footer from "./components/shared/Footer";
import AutoMoreiraLoader from "./components/shared/AutoMoreiraLoader";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";
import AutoMoreiraModal from "./components/shared/AutoMoreiraModal";
import {closeModal} from "./redux/modalSlice";
import AutoMoreiraSnackbar from "./components/shared/AutoMoreiraSnackbar";
import {closeSnackBar} from "./redux/snackBarSlice";
import {setLoader, setToInitialLoader} from "./redux/loaderSlice";
import {createVisitor} from "./services/VisitorService";
import {createTheme, ThemeProvider} from "@mui/material";
import {COLORS} from "./utils/Colors";

export default function App() {
  const dispatch = useAppDispatch();

  const currentLoader = useSelector(
    (state: RootState) => state.loaderSlice.loader
  );

  const currentModal = useSelector((state: RootState) => state.modalSlice);
  const currentSnackBar = useSelector(
    (state: RootState) => state.snackBarSlice
  );

  useEffect(() => {
    dispatch(setLoader(true));
    createVisitor()
      .then(() => dispatch(setToInitialLoader()))
      .catch((e) => {
        console.error(e);
        dispatch(setToInitialLoader());
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: COLORS.AUTO_MOREIRA_ORANGE,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AutoMoreiraLoader open={currentLoader} />
      <AutoMoreiraModal
        title={currentModal.modal.title}
        message={currentModal.modal.message}
        isOpen={currentModal.modal.open}
        onOk={() => dispatch(closeModal())}
        type={currentModal.modal.type}
      />
      <AutoMoreiraSnackbar
        type={currentSnackBar.snackBar.type}
        message={currentSnackBar.snackBar.message}
        open={currentSnackBar.snackBar.open}
        onClose={() => dispatch(closeSnackBar())}
      />
      <Header />
      <MobileNavbar />
      <ToTop />
      <AutoMoreiraRouter />
      <GetTouch />
      <Footer />
    </ThemeProvider>
  );
}
