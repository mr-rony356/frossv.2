"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  first: {
    y: 0,
    opacity: 1,
  },
  enter: {
    y: 0,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

interface TextAnimationProps {
  texts: string[];
}

export const TextAnimation: React.FC<TextAnimationProps> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2900);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-[#A54C3D] min-w-[250px] md:min-w-1/2 lg:min-w-full flex items-center justify-center z-50">
      <div className="w-full h-full z-10 relative overflow-hidden flex flex-col md:flex-row">
        <motion.span
          className="z-50 w-auto whitespace-nowrap top-0"
          variants={variants}
          key={currentTextIndex}
          initial={isFirstLoad ? "first" : "enter"}
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 400, damping: 20 },
            opacity: { duration: 0.3 },
            staggerChildren: 0.2,
          }}
        >
          {texts[currentTextIndex].split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: `${isFirstLoad ? "0%" : "-100%"}` }}
              animate={{
                y: "0%",
                transition: { delay: i * 0.27 },
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
        <motion.div
          layoutId="thing"
          transition={{ duration: 0.5 }}
          className={`ms-[20px] hidden md:block text-white transition-opacity ${
            isFirstLoad ? "opacity-0" : "opacity-1"
          }`}
        >
          digitalt
        </motion.div>
      </div>
    </div>
  );
};
