'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      
      // Check if token is expired
      if (decoded.exp * 1000 < Date.now()) {
        console.log("Token expired");
        localStorage.removeItem("token");
        return;
      }

      setUser(decoded); // Set user details from token

    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the auth context
export const UseGlobalContext = () => useContext(GlobalContext);
