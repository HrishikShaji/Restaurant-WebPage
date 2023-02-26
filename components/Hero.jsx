import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero bg-fixed h-screen w-full opacity-90 bg-cover flex flex-col justify-center items-center">
      <h1 className=" text-6xl text-secondary-red">YourPizza</h1>
      <p className=" text-2xl md:text-primary-white text-primary-black text-center mt-10 md:w-[50%] w-[90%] ">
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
      </p>
      <button className=" p-3 bg-primary-black mt-10">
        <a href="/order" className="text-primary-red text-2xl">
          Order Online
        </a>
      </button>
    </div>
  );
};

export default Hero;
