import React from "react";
import img1 from "../public/assets/10.jpg";
import img2 from "../public/assets/11.jpg";
import img3 from "../public/assets/12.jpg";
import img4 from "../public/assets/13.jpg";
import Image from "next/image";

const Follow = () => {
  return (
    <div className="md:h-[500px] h-full  w-full flex flex-col justify-around p-20 items-center bg-secondary-red">
      <h1 className="text-4xl mb-10">Follow @YourCoffee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex">
        <Image
          src={img1}
          height={1000}
          width={1000}
          alt="image"
          className="h-[250px] w-[250px] object-cover"
        />
        <Image
          src={img2}
          height={1000}
          width={1000}
          alt="image"
          className="h-[250px] w-[250px] object-cover"
        />
        <Image
          src={img3}
          height={1000}
          width={1000}
          alt="image"
          className="h-[250px] w-[250px] object-cover"
        />
        <Image
          src={img4}
          height={1000}
          width={1000}
          alt="image"
          className="h-[250px] w-[250px] object-cover"
        />
      </div>
    </div>
  );
};

export default Follow;
