import React from "react";
import "./style.css";

function Card({ allimg, item }) {
  return (
    <div className="p-5  w-72 flex flex-col items-center gap-1 bg-gray-900 border-gradient">
      <img className="w-full h-56" src={allimg.value} alt={allimg.text} />
      <h3 className="text-blue-700 font-bold text-2xl">Card{item + 1}</h3>
      <p className="text-blue-700 font-bold">{allimg.text}</p>
    </div>
  );
}

export default Card;
