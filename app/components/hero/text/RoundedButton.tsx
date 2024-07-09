import React from "react";
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";

const DURATION = 0.25;
const STAGGER = 0.025;

const ButtonWrapper = () => {
  return <AnimatedButton />;
};

const AnimatedButton = () => {
  const text = "Let's_talk";

  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-full border-[2px] 
        border-white px-4 py-2 font-medium
        uppercase text-white transition-all duration-500 text-[15px]

        before:absolute before:top-0 before:left-0 before:w-full before:h-full
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-full before:bg-white
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-[#171717] hover:border-transparent
        hover:before:translate-x-0
        hover:before:translate-y-0
        active:scale-95
      `}
    >
      <div className="relative block overflow-hidden whitespace-nowrap text-[18px] xl:text-[25px]  font-medium uppercase">
        <div>
          {text.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l === "_" ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {text.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l === "_" ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

export default ButtonWrapper;
