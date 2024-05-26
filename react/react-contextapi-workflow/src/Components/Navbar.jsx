import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[100px] shadow-xl px-14 items-center gap-24 mb-16 ">
      <img
        className="w-[80px] "
        src="https://as1.ftcdn.net/v2/jpg/02/42/20/54/1000_F_242205435_JjqfvUZzgX5Rx5TnDwqb7zBhe38js6L2.jpg"
      />
      <ul className="flex gap-8 font-semibold text-2xl">
        <li>Home</li>
        <li>Categoris</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
