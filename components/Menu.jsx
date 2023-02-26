import React from "react";

const Menu = () => {
  return (
    <div className="bg-primary-black text-primary-red flex flex-col items-center justify-center h-screen w-full">
      <div className="mb-20">
        <h1 className="text-4xl">YourPizza</h1>
        <h1>Since 1999</h1>
      </div>
      <div className="bg-about5 flex justify-around items-center flex-col bg-fixed bg-cover w-[70%] h-[40%]">
        <button className="p-3 bg-primary-black text-2xl">Menu</button>
      </div>
    </div>
  );
};

export default Menu;
