"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const serviceItems = [
    "Our Services",
    "Projects",
    "Our Process",
    "Open Source",
    "Referral Program",
    "Blog",
  ];

  const servicesList = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Services",
    "Consulting",
  ];

  return (
    <nav className="flex flex-col justify-start items-start grow text-xl text-neutral-100">
      {serviceItems.map((item, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <p
            className={`justify-start px-5 cursor-pointer${
              index > 0 ? "pt-5 mt-5" : "pt-0 "
            } flex items-start text-neutral-100`}
            onClick={() => index === 0 && setShowOverlay(!showOverlay)}
          >
            {item}
            {index === 0 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setShowOverlay(!showOverlay)}
                animate={{ rotate: showOverlay ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showOverlay ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                )}
              </motion.svg>
            )}
          </p>
          <AnimatePresence>
            {index === 0 && showOverlay && (
              <motion.div
                className=" ml-4 pt-4 text-white rounded shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  {servicesList.map((service, serviceIndex) => (
                    <motion.li
                      key={serviceIndex}
                      className="mb-2 text-base text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </nav>
  );
};

export default Services;