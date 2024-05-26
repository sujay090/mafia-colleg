import React from "react";
import Navbar from "./Navbar";
import { CartContainer } from "./CartContainer";
import { Shopping } from "./Shopping";

export const Payment = () => {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Shopping/>
        <CartContainer/>
      </div>
    </div>
  );
};
