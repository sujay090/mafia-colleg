import React from 'react'

export const Cart = () => {
  
  return (
    <div className="shadow-xl mt-2 rounded-md overflow-hidden px-3 flex gap-8 bg-blue-100 items-center p-2  justify-between">
      <div className="flex items-center gap-8 ">
        <img
          className="w-[100px]"
          src="https://img.freepik.com/premium-photo/fashion-running-sneaker-shoes-isolated-white-background_47469-430.jpg?size=626&ext=jpg&ga=GA1.1.80200881.1709201864&semt=ais_user"
          alt=""
        />
        <div>
          <p>White casual sneker</p>
          <p>Price: $100</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-red-500 px-4 rounded-md py-2 text-white font-bold text-2xl">-</button>
        <p className="text-xl font-semibold">{8}</p>
        <button className="bg-green-500 px-4 rounded-md py-2 text-white font-bold text-2xl">+</button>
      </div>
    </div>
  )
}
