import { useEffect } from "react";
import "../src/dist/styles.css";
import Navbar from "./components/shared/navbar/Navbar";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/userSlice";
import fetchIntercept from "fetch-intercept";

import AutoMoreiraRouter from "./routes/AutoMoreiraRouter";
import { InterceptorRequest } from "./models/Interceptor";
import { getCurrentUser } from "./components/local/LocalStorage";

export default function App() {
  const dispatch = useAppDispatch();

  const user = getCurrentUser();

  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
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
          return [address, config];
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
  }, [user]);

  return (
    <>
      <Navbar />
      <AutoMoreiraRouter />
    </>
  );
}
