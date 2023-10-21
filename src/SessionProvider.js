import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    setIsLogged(true);
    sessionStorage.setItem("isLogged", "true");
  };

  const logout = () => {
    setIsLogged(false);
    sessionStorage.removeItem("isLogged");
  };

  const isUserLogged = () => {
    return sessionStorage.getItem("isLogged") === "true" || isLogged;
  };

  return (
    <SessionContext.Provider value={{ isUserLogged, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}
