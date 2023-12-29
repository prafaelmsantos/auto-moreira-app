/** @format */

import {useEffect} from "react";
import "./App.css";

import {useAppDispatch} from "./redux/hooks";
import {setUser} from "./redux/userSlice";
import fetchIntercept from "fetch-intercept";

import AutoMoreiraRouter from "./routes/AutoMoreiraRouter";
import {InterceptorRequest} from "./models/Interceptor";
import {getCurrentFilters, getCurrentUser} from "./config/localStorage";

import {setFilters} from "./redux/filtersSlice";

import MobileNavbar from "./components/shared/navbar/MobileNavbar";
import Header from "./components/shared/navbar/Header";
import ToTop from "./components/shared/ToTop";
import GetTouch from "./components/shared/GetTouch";
import Footer from "./components/shared/Footer";
import AutoMoreiraLoader from "./components/shared/AutoMoreiraLoader";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";
import AlertModal from "./components/shared/AlertModal";
import {closeModal} from "./redux/modalSlice";
import AutoMoreiraSnackbar from "./components/shared/AutoMoreiraSnackbar";
import {closeSnackBar, setSnackBar} from "./redux/snackBarSlice";

export default function App() {
  const dispatch = useAppDispatch();

  const user = getCurrentUser();

  const filters = getCurrentFilters();

  useEffect(() => {
    user && dispatch(setUser(user));
  }, [user]);

  useEffect(() => {
    filters && dispatch(setFilters(filters));
  }, [filters]);

  /*   useEffect(() => {
    fetchIntercept.register({
      request: function (url: Request | string, config: InterceptorRequest) {
        let address: string;

        if (url instanceof Request) address = url.url;
        else address = url;

        if (user) {
          if (config.body instanceof FormData) {
            return [url, config];
          }

          if (user && config) {
            config.headers.Authorization = `Bearer ${user.token}`;
            return [address, config];
          } else {
            config.headers.Authorization = "";
            return Promise.reject();
          }
        } else {
          config.headers.Authorization = "";
          return Promise.reject();
        }
      },

      requestError: function (error) {
        return Promise.reject(error);
      },

      response: function (response) {
        return response;
      },

      responseError: function (error) {
        return Promise.reject(error);
      },
    });
  }, [user]); */

  const currentLoader = useSelector(
    (state: RootState) => state.loaderSlice.loader
  );

  const currentModal = useSelector((state: RootState) => state.modalSlice);
  const currentSnackBar = useSelector(
    (state: RootState) => state.snackBarSlice
  );

  return (
    <>
      <AutoMoreiraLoader open={currentLoader} />
      <AlertModal
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
    </>
  );
}
