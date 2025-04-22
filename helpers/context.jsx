"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Exit early if there's no token
    if (!token) {
      setIsAuthenticated(false);
      setUser(null);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      console.log("token", token);

      // Check if token is expired
      if (decoded.exp * 1000 < Date.now()) {
        console.log("Token expired");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
        return;
      }

      setUser(decoded); // Set user details from token
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [isAuthenticated]); // ✅ use empty dependency array to avoid infinite loop

  return (
    <GlobalContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the auth context
export const UseGlobalContext = () => useContext(GlobalContext);
