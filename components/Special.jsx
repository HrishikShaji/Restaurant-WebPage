import React from "react";
import Image from "next/image";
import img1 from "../public/assets/5.jpg";

const Special = () => {
  return (
    <div className="bg-secondary-red p-10 h-screen w-full flex flex-col md:flex-row justify-around items-center">
      <div className="bg-primary-black w-[80%] h-[40%] md:w-[40%] md:h-[70%]">
        <h1>hello</h1>
      </div>
      <Image
        src={img1}
        height={1000}
        width={1000}
        alt="image"
        className="md:w-[40%] md:h-[70%] w-[80%] h-[40%] object-cover"
      />
    </div>
  );
};

export default Special;
