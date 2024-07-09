import React from "react";
import Image from "next/image";
import ServicesText from "./ServicesText"; // Correctly import ServicesText
import ClientLogos from "../Clientslogo/Logo";

const Services = () => {
  return (
    <div className="grid-container relative px-6">
      <picture className="w-full">
        <source
          srcSet="/folder-services-phone.webp.png"
          media="(max-width: 540px)"
        />
        <source
          srcSet="/folder-services-tablet.webp"
          media="(max-width: 1200px)"
        />
        <Image
          src="/folder-services.webp.png"
          alt="Background Image"
          layout="responsive"
          width={1000}
          height={100}
          objectFit="cover"
          quality={100}
        />
      </picture>

      <div className="absolute inset-0 flex pl-4 pt-6">
        <ServicesText />
      </div>
    </div>
  );
};

export default Services;
