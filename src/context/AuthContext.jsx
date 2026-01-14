import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storeData = localStorage.getItem("userData");
      return storeData ? JSON.parse(storeData) : null ;
    } catch (error) {
      return error.message;
    }
  });

  const logIn = (loginData) => {
    // setUser({
    //   name:  "umakant",
    //   email: "umakantkatare99@gmail.com",
    // });
    setUser(loginData)
    localStorage.setItem("userData", JSON.stringify(loginData));
  };

  const newUser = (newData) => {
    setUser(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
  };

  const logOut = () => {
    localStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ logOut, logIn, user, newUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
