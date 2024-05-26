import React from "react";
import { Home } from "./home";
import { useContext } from "react";
import { counterContext } from "../context/create";
export const Navbar = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      Navbar {counter}
      <Home />
    </div>
  );
};
