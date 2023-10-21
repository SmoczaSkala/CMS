import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);

  return (
    <AppContext.Provider value={{ logged, setLogged, slider, setSlider }}>
      {children}
    </AppContext.Provider>
  );
};
