import React from "react";
import Left from "./Left";
import Right from "./Right";

const Hero: React.FC = () => {
  return (
    <div className="grid-container m-auto relative w-full min-h-screen flex items-center ">
      <div className="relative w-full flex flex-col-reverse md:flex-row h-full gap-4">
        <Left /> {/* Left section */}
        <Right /> {/* Right section */}
      </div>
    </div>
  );
};

export default Hero;
