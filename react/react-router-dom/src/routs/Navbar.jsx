import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between h-10 items-center px-14 pt-8 bg-[#FFFFFF] ">
      <div className="text-center">
        <Link to={"/mafia"}>
        <img
          className=" text-zinc-900 p-2"
          src="https://www.upskillmafia.com/static/media/logo.c505439dd4baac10ee21f14806536d66.svg"
          alt=""
        />
        </Link>
        <h1 className="-mt-7 font-bold">mafia colleg</h1>
      </div>
      <Link to={"/"} className="font-mono text-2xl">
        Home
      </Link>
      <div className="flex gap-3">
        <button className="bg-[#4CAF4E] px-7 py-1 rounded-md">
          <Link to={"/login"}>Login</Link>
        </button>
        <button className="bg-[#4CAF4E] px-7 py-1 rounded-md">
          <Link to={"/signup"}>Sign Up</Link>
        </button>
      </div>
    </div>
  );
};
