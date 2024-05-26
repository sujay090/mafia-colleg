import React, { useContext } from "react";
import { Card } from "./Card";
import { MyContext } from "../contexts/datacontext.jsx"; 
export const ProductContainer = () => {
  const [data, setData] = useContext(MyContext);
  // console.log();
  let arr = [];
  arr = Object.values(data);

  return (
    <div className="flex flex-wrap gap-5 justify-center w-[60%]">
      {arr.slice(0, 14).map((item, i) => {
        return <Card key={i} data={item} />;
      })}
    </div>
  );
};
