"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TextAnimation } from "./LoopText";

const defaultAnimation = {
  enter: {
    y: 0,
    opacity: 0,
    scale: 0.7,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

const AnimatedText: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Inspirera", "Skala", "Synas", "Dominera", "Växa"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2900);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className="text-white min-w-[250px] md:min-w-1/2 lg:min-w-[510px] pt-10 z-10 relative 
    text-[50px] xs:text-[63px] sm:text-[65px] md:text-[42px] lg:text-[58px] xl:text-[78px] 2xl:text-[96px] 3xl:text-[103px]
    flex flex-col justify-center font-medium uppercase"
    >
      <div className="leading-none tracking-wider z-50">
        Vi hjälper <br />
        företag att
        <TextAnimation texts={texts} />
      </div>
      <motion.div
        className="absolute right-[-20px] top-[65px] -z-20 w-[130px] md:w-[4.5rem] lg:w-[500px]"
        variants={defaultAnimation}
        initial="enter"
        animate="center"
        exit="exit"
        key={currentTextIndex}
        transition={{
          y: { type: "spring", stiffness: 400, damping: 20 },
          opacity: { duration: 0.3 },
          staggerChildren: 0.2,
        }}
      >
        {/* Content can be added here if needed */}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
