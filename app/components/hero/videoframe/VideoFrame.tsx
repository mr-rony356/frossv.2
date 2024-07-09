import React, { useState, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

declare global {
  interface Window {
    videoask: any;
  }
}

const VideoFrame: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const openModal = () => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://www.videoask.com/embed/embed.js";
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
        loadVideoaskModal();
      };
      document.body.appendChild(script);
    } else {
      loadVideoaskModal();
    }
  };

  const loadVideoaskModal = () => {
    if (window.videoask?.loadModal) {
      window.videoask.loadModal({
        url: "https://www.videoask.com/f94ptdhkz",
      });
    } else {
      console.error("Videoask is not loaded yet.");
    }
  };

  return (
    <div className="flex flex-row">
      <Image
        src="/linkedin.JPG"
        alt=""
        width={65}
        height={65}
        className="relative mr-[-15px] h-[65px] w-[65px] rounded-full object-cover xl:h-[90px] xl:w-[90px]"
      />
      <MagnetButton onClick={openModal} />
    </div>
  );
};

interface MagnetButtonProps {
  onClick: () => void;
}

const MagnetButton: React.FC<MagnetButtonProps> = ({ onClick }) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { mass: 3, stiffness: 400, damping: 50 });
  const ySpring = useSpring(y, { mass: 3, stiffness: 400, damping: 50 });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transform }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative grid h-[65px] w-[65px] place-content-center rounded-full bg-[#171717] transition-colors duration-700 ease-out xl:h-[90px] xl:w-[90px]"
    >
      <FaPlay className="pointer-events-none relative z-10 text-xl text-white transition-all duration-700 ease-out" />
      <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-[#373636] transition-transform duration-700 ease-out group-hover:scale-100" />
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        width="200"
        height="200"
        className="pointer-events-none absolute z-10"
      >
        <path
          id="circlePath"
          d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
          fill="none"
        />
        <text>
          <textPath
            href="#circlePath"
            className="fill-black text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          />
        </text>
      </motion.svg>
    </motion.button>
  );
};

export default VideoFrame;
