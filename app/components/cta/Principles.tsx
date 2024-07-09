import Image from "next/image";
import React from "react";

const Principles = () => {
  return (
    <div className=" text-white my-16  grid-container min-h-fit mb-52">
      <h2 className="text-center text-sm py-2 ">Benefits / 02</h2>
      <h1 className="text-center text-4xl font-sembold mb-16">
        OUR PRINCIPLES FOR <br />
        LASTING BRAND RESONANCE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 h-fit  ">
        <div className="text-left md:border-x border-gray-700  px-4 py-8 md:py-0 border-t md:border-t-0">
          <div className="flex justify-left mb-4">
            <Image
              src="/assets/crown.svg"
              alt="Excellence"
              width={40}
              height={40}
              className="mb-14"
            />
          </div>
          <h3 className="text-xl font-medium mb-4">Excellence</h3>
          <p className="text-gray-300 text-sm">
            We pursue excellence in every aspect, ensuring unparalleled quality
            and innovation in our branding solutions.
          </p>
        </div>
        <div className="text-left md:border-x border-gray-700  px-4 py-8 md:py-0 border-y md:border-y-0">
          <div className="flex justify-left mb-4">
                        <Image
              src="/assets/handshake.svg"
              alt="Excellence"
              width={40}
              height={40}
              className="mb-14"
            />{" "}

          </div>
          <h3 className="text-xl font-normal mb-4">Partnership</h3>
          <p className="text-gray-300 text-sm">
            Through collaboration, we harness diverse perspectives to create
            cohesive and impactful brand experiences.
          </p>
        </div>
        <div className="text-left  border-gray-700  px-4 py-8 md:py-0">
          <div className="flex justify-left mb-4">
          </div>
          <Image
              src="/assets/collab.svg"
              alt="Excellence"
              width={40}
              height={40}
              className="mb-14"
            />{" "}

          <h3 className="text-xl  mb-4">Collaboration</h3>
          <p className="text-gray-300 text-sm">
            Building enduring partnerships, we invest in understanding your
            vision, working together to achieve remarkable results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Principles;
