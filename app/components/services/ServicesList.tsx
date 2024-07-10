import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <div
      className="flex items-center justify-between py-10 xl:py-12 px-2 md:px-8
     border-b border-gray-700 w-full last:border-0 "
    >
      <div className="flex items-center md:space-x-4 space-x-2">
        <HiOutlineHome className="text-2xl" />
        <h3 className="text-sm md:text-xl">{title}</h3>
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-400 mx-2 text-left  max-w-[500px] md:max-w-[450px]">{description}</p>
      </div>
      <HiArrowRight className="md:text-2xl text-4xl " />
    </div>
  );
};

const ServicesList: React.FC = () => {
  const services = [
    {
      title: "BRANDING",
      description:
        "We pursue excellence in every aspect, ensuring unparalleled quality and innovation in our branding solutions.",
    },
    {
      title: "BRANDING",
      description:
        "We pursue excellence in every aspect, ensuring unparalleled quality and innovation in our branding solutions.",
    },
    {
      title: "BRANDING",
      description:
        "We pursue excellence in every aspect, ensuring unparalleled quality and innovation in our branding solutions.",
    },
    {
      title: "BRANDING",
      description:
        "We pursue excellence in every aspect, ensuring unparalleled quality and innovation in our branding solutions.",
    },
  ];

  return (
    <div className=" bg-transparent text-white  px-2 md:px-6 absolute  top-32 md:top-30 xl:top-[280px]  w-full">
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesList;
