import React, { createContext, useState } from "react";
import data from "../Components/data.jsx";
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};
