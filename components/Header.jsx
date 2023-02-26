import React from "react";

const Header = () => {
  return (
    <div className="flex z-40 p-10 text-primary-red  justify-between items-center h-[80px] w-full fixed bg-primary-black">
      <h1 className="text-3xl">YourPizza</h1>
      <ul className="md:flex items-center hidden">
        <li className="mx-3">
          <a>Home</a>
        </li>
        <li className="mx-3">
          <a>Menu</a>
        </li>
        <li className="mx-3">
          <a>Order Online</a>
        </li>
        <li className="mx-3">
          <a>Contact</a>
        </li>
        <li className="mx-3">
          <a>Account</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
