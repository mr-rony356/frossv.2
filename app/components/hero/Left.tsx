"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Left: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources = React.useMemo(
    () => ["/hero.mp4", "/hero2.mp4", "/hero3.mp4"],
    []
  );

  const handleLeftClick = useCallback(() => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
    );
    setProgress(0);
  }, [videoSources.length]);

  const handleRightClick = useCallback(() => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  }, [videoSources.length]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      setProgress((currentTime / duration) * 100);
    }
  }, []);

  const handleVideoEnded = useCallback(() => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  }, [videoSources.length]);

  const handleProgressBarClick = useCallback((index: number) => {
    setCurrentVideoIndex(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [currentVideoIndex]);

  return (
    <div className="relative w-full md:w-1/3 flex-grow z-10 bg-[#262C38] rounded-3xl overflow-hidden flex flex-col min-h-[70vh] sm:min-h-screen md:min-h-full">
      <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "left" }}
          src={videoSources[currentVideoIndex]}
          autoPlay
          loop={false}
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
        />
      </div>
      <div className="relative z-20 flex flex-col justify-between h-full">
        <div className="p-4 text-white box-border flex-grow">
          <div className="flex space-x-2 mb-2">
            {videoSources.map((_, index) => (
              <div
                key={index}
                className="w-1/3 h-1 bg-gray-700 rounded cursor-pointer"
                onClick={() => handleProgressBarClick(index)}
              >
                {index === currentVideoIndex && (
                  <motion.div
                    className="h-full bg-white rounded"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="pt-2 flex justify-between items-center">
            <Image
              src="/forssdigital.svg"
              alt="Forss Digital Logo"
              width={180}
              height={50}
              layout="fixed"
              priority
            />
            <Image
              src="/buttons.svg"
              alt="Buttons Icon"
              width={25}
              height={50}
              layout="fixed"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full flex pointer-events-auto z-30">
        <div
          onClick={handleLeftClick}
          className="w-1/2 h-full cursor-pointer"
        />
        <div
          onClick={handleRightClick}
          className="w-1/2 h-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Left;
