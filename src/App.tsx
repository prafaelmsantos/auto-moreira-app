/** @format */

import {useEffect} from "react";
import "../src/dist/styles.css";

import {useAppDispatch} from "./redux/hooks";
import {setUser} from "./redux/userSlice";
import fetchIntercept from "fetch-intercept";

import AutoMoreiraRouter from "./routes/AutoMoreiraRouter";
import {InterceptorRequest} from "./models/Interceptor";
import {getCurrentFilters, getCurrentUser} from "./config/LocalStorage";
import Navbar from "./components/shared/navbar/Navbar";
import {setFilters} from "./redux/filtersSlice";

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

  return (
    <>
      <Navbar />
      <AutoMoreiraRouter />
    </>
  );
}
