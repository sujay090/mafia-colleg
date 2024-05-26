import React from "react";
import { ProductContainer } from "./ProductContainer";
import { CartContainer } from "./CartContainer";
import Navbar from "./Navbar";

export const Body = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-6 px-6">
        <ProductContainer />
        <CartContainer />
      </div>
    </>
  );
};
