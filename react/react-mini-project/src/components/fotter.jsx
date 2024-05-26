import React, { useContext } from "react";
import { counterContext } from "../context/create";
export const Fotter = () => {
  const counter = useContext(counterContext);
  return (
    <div>
      Fotter
      {counter}
    </div>
  );
};
