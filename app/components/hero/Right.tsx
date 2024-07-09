"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./text/AnimatedText";
import MagnetButtonExample from "./text/MagnetButton";
import ButtonWrapper from "./text/RoundedButton";
import VideoFrame from "./videoframe/VideoFrame";

const Right: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full md:w-2/3 z-10">
      <div className="relative w-full h-full">
        <picture className="w-full">
          <source srcSet="/folder-phone.webp" media="(max-width: 540px)" />
          <source srcSet="/folder-tablet.webp" media="(max-width: 1200px)" />
          <Image
            src="/folder.webp"
            alt="Background Image"
            layout="responsive"
            width={1000}
            height={500}
            objectFit="cover"
            quality={100}
            priority
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-[#171717] z-[-20]">
            Vi hjälper företag att lyckas i det digitala
          </h1>
        </picture>
      </div>
      <div className="absolute top-0 px-4 md:px-8 w-full flex flex-col justify-center h-full">
        <AnimatedText />
        <div className="mt-6 pt-6 border-t-2">
          <h2 className="text-[22px] sm:text-[25px] xl:text-[30px] text-white font-medium">
            Ligg i framkant när det gäller att lyckas digitalt
          </h2>
        </div>
        <div className="flex flex-row pt-4 xl:pt-6 justify-between items-center">
          <ButtonWrapper />
          <VideoFrame />
        </div>
      </div>
    </div>
  );
};

export default Right;
