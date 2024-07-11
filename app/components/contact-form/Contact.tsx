import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ContactForm() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Auto play interval in milliseconds
  };

  // State to manage input field values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  return (
    <div className="bg-white lg:bg-transparent lg:bg-[url('/assets/vector.png')] bg-no-repeat bg-contain xl:bg-cover px-20 py-10 pl-10  rounded-lg shadow-lg contact ">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-3  space-y-6">
          <h2 className="text-2xl md:text-4xl text-black mb-6 text-center md:text-left leading-6">
            Ready to discuss <br className="hidden md:inline-block" /> your
            project with us?
          </h2>
          <form className="space-y-4">
            {/* Full Name field */}
            <div className="flex gap-6">
              <div className="input-field relative w-1/2">
                <input
                  type="text"
                  placeholder=" "
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border-b border-gray-300 p-3 outline-none focus:border-blue-500"
                />
                <label className="input-label">Full Name</label>
              </div>

              {/* Email field */}
              <div className="input-field relative w-1/2">
                <input
                  type="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 p-3 outline-none focus:border-blue-500"
                />
                <label className="input-label">Email</label>
              </div>
            </div>

            {/* Project Details textarea */}
            <div className="input-field">
              <textarea
                placeholder=" "
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                className="w-full border-b border-gray-300 p-3 outline-none focus:border-blue-500 h-16 resize-none"
              />
              <label className="input-label">About Project</label>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-center justify-between md:flex-row flex-col gap-4 pt-10 xl:pt-20">
              <p className="text-gray-500 text-sm md:w-1/2">
                By sending this form I confirm that I have read and accept the{" "}
                <a href="#" className="text-[#A54C3D]">
                  Privacy Policy
                </a>
                .
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#A54C3D] text-white px-6 py-3 rounded-full flex items-center gap-2"
              >
                SEND A MESSAGE{" "}
                <span className="p-2 bg-white rounded-full">
                  <Image
                    src="/assets/send.png"
                    alt="Send Icon"
                    width={10}
                    height={10}
                  />
                </span>
              </motion.button>
            </div>
          </form>
        </div>
        <div className="col-span-3 md:col-span-2  pl-4 md:ml-0  bg-[url(/assets/client-bg.png)]  bg-no-repeat  bg-cover md:bg-contain  p-0 py-4 xl:pr-0 md:p-6 xl:p-10 pb-5  ">
          <div className="flex items-center mb-4 ">
            <Image
              src="/assets/client.png" // Replace with the actual path to the client's image
              alt="Client"
              width={30}
              height={30}
              className="rounded-full mr-2"
            />
            <h3 className="text-xl font-semibold text-black">
              Our clients say
            </h3>
          </div>
          <hr className="text-gray-600 w-[80%] my-4" />

          {/* Client feedback slider */}
          <Slider {...settings}>
            {/* Example client feedback slide */}
            <div className="text-gray-600 mb-6 max-w-64  text-[16px] md:text-[18px] xl:text-[20px]">
              The site developed by Forss Digital projected a very premium
              experience, successfully delivering the client's messaging to
              customers. Despite external challenges, the team’s performance was
              exceptional.
              <div className="flex items-center mt-4">
                <Image
                  src="/assets/arom.webp.png" // Replace with the actual path to the client's image
                  alt="Client"
                  width={30}
                  height={30}
                  className="rounded-full mr-4"
                />
                <div className="text-black">
                  <p className="font-semibold">Aaron Nwabuoku</p>
                  <p className="text-gray-500 text-sm">Founder, ChatKitty</p>
                </div>
              </div>
            </div>{" "}
            <div className="text-gray-600 mb-6 max-w-64  text-[16px] md:text-[18px] xl:text-[20px]">
              The site developed by Forss Digital projected a very premium
              experience, successfully delivering the client's messaging to
              customers. Despite external challenges, the team’s performance was
              exceptional.
              <div className="flex items-center mt-4">
                <Image
                  src="/assets/arom.webp.png" // Replace with the actual path to the client's image
                  alt="Client"
                  width={30}
                  height={30}
                  className="rounded-full mr-4"
                />
                <div className="text-black">
                  <p className="font-semibold">Aaron Nwabuoku</p>
                  <p className="text-gray-500 text-sm">Founder, ChatKitty</p>
                </div>
              </div>
            </div>{" "}
            <div className="text-gray-600 mb-6 max-w-64  text-[16px] md:text-[18px] xl:text-[20px]">
              The site developed by Forss Digital projected a very premium
              experience, successfully delivering the client's messaging to
              customers. Despite external challenges, the team’s performance was
              exceptional.
              <div className="flex items-center mt-4">
                <Image
                  src="/assets/arom.webp.png" // Replace with the actual path to the client's image
                  alt="Client"
                  width={30}
                  height={30}
                  className="rounded-full mr-4"
                />
                <div className="text-black">
                  <p className="font-semibold">Aaron Nwabuoku</p>
                  <p className="text-gray-500 text-sm">Founder, ChatKitty</p>
                </div>
              </div>
            </div>
            {/* Add more slides here */}
          </Slider>
        </div>
      </div>
    </div>
  );
}
