import React, { useState,createContext } from "react";
export const MyContext = createContext();
export const Card = ({ data }) => {
  const [state, setstate] = useState([]);
  const updateItem = (data) => {
    console.log(data);
    setstate([...state, data]);
    console.log(state); 
    <MyContext.Provider value={state}></MyContext.Provider>;
  };
  return (
    <div className="w-[230px] flex flex-col  items-center rounded-lg p-5 gap-2 shadow-xl ">
      <img src={data.imageURL} alt="" />
      <p>{data.name}</p>
      <p>Price: ${data.price}</p>
      <button
        onClick={() => updateItem(data)}
        className="px-6 py-2 bg-[#fff12345] rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};
