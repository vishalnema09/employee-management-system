import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const localData = getLocalStorage();
    return localData ? localData : { employees: [] };
  });

  useEffect(() => {
    // Update localStorage whenever userData changes
    if (userData) {
      setLocalStorage(userData);
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
