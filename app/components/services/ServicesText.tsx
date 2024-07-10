import React from "react";
import ServicesList from "./ServicesList";

const ServicesText = () => {
  return (
    <div className="grid-container  flex justify-between relative w-full  mx-0 md:mx-6 mr-8 text-white">
      <h1 className=" text-[40px] md:text-[60px] xl:text-[110px] leading-[100%]  uppercase  pl-6 ">OUR <br /> SERVICES </h1>
      <p className=" absolute right-0 md:right-8 top-8 md:top-12 xl:top-20 text-sm">Services 0/3</p>
      <div className="w-full absolute left-0">
        <ServicesList />
      </div>

    </div>
  );
};

export default ServicesText;
