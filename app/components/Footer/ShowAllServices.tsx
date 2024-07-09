import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShowAllServices: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const servicesList = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Services",
    "Consulting",
    "E-commerce Solutions",
    "AI and Machine Learning",
    "Blockchain Development",
    "DevOps Services",
    "Cybersecurity",
  ];

  return (
    <section className="relative flex flex-col justify-center py-5 mt-72 w-full text-xl text-white border-t border-b border-solid border-white border-opacity-80 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-center px-5 w-full max-md:flex-wrap max-md:max-w-full">
        
        <button
          className="flex-auto my-auto"
          onClick={() => setShowOverlay(true)}
        >
          Show all services
        </button>
        <button
          onClick={() => setShowOverlay(true)}
          className="text-3xl bg-white p-4 h-10 w-10 text-black rounded-full flex items-center justify-center"
        >
          +
        </button>
      </div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-950 text-white p-6 z-[9999999999] overflow-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <button
                onClick={() => setShowOverlay(false)}
                className="text-3xl bg-white p-4 h-10 w-10 text-black rounded-full flex items-center justify-center"
              >
                −
              </button>
            </div>
            <ul className="list-disc pl-5">
              {servicesList.map((service, index) => (
                <li key={index} className="mb-2">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShowAllServices;
