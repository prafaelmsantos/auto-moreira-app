/** @format */

"use client";

import React, {useContext, useState} from "react";

type TogglersContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  goUp: boolean;
  setGoUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglersContext = React.createContext<TogglersContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
  goUp: false,
  setGoUp: () => {},
});

export const useTogglersContext = () => useContext(TogglersContext);

export const TogglersProvider = ({children}: {children: React.ReactNode}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [goUp, setGoUp] = useState(false);

  return (
    <TogglersContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
        goUp,
        setGoUp,
      }}
    >
      {children}
    </TogglersContext.Provider>
  );
};
