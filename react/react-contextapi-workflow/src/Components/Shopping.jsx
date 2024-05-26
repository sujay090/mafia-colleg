import React from "react";

export const Shopping = () => {
  return (
    <div className=" w-[60%] p-7 flex flex-col items-center gap-10">
      <div className="flex justify-center gap-2">
        <input type="checkbox" name="" id="" />
        <label className="text-xl font-bold" htmlFor="Cashondelevery">
          Cash on Delivery
        </label>
        <input type="checkbox" name="" id="" />
        <label className="text-xl font-bold" htmlFor="Cradit Card">
          Credit Card
        </label>
      </div>
      <div className="border flex flex-col w-[60%] gap-8 p-6 rounded-xl shadow-xl">
        <input
          className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
          type="number"
          placeholder="Card number"
        />
        <input
          className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
          type="number"
          placeholder="Expiry date"
        />
        <input
          className="px-3 bg-orange-100 w-[100%] h-12 rounded-lg border-none outline-none text-black"
          type="number"
          placeholder="Enter cvv number"
        />
      </div>
      <button className="bg-green-300 px-7 py-2 rounded-md shadow-lg text-white font-semibold ">
        Confirm Payment
      </button>
    </div>
  );
};
