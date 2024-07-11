import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Services {
  [key: string]: string[];
}

const ShowAllServices: React.FC = () => {
  const [showServices, setShowServices] = useState(false);

  const services: Services = {
    Design: [
      "Web Design",
      "SaaS Website Design",
      "UI/UX Design",
      "Responsive Web Design",
      "Mobile App Design",
      "Healthcare Web Design",
      "Branding for Startups",
      "E-Commerce Web Design",
      "Landing Website Design",
    ],
    Development: [
      "Back-end Development",
      "CMS Development",
      "Web Development",
      "Webflow Development",
      "Front-end Development",
      "Node JS Development",
      "Software Product Development",
      "React JS Development",
      "Prismic CMS Development",
      "Gatsby Development",
      "Next JS Development",
      "Sanity Development",
      "Vue JS Development",
    ],
    Marketing: [
      "Search Engine Optimisation",
      "Social Media Design",
      "SEO Audit",
      "Pitch Deck Design",
      "Technical SEO",
      "Conversion Rate Optimization",
      "Technical Audit",
      "Content Marketing",
      "Local SEO",
    ],
  };

  return (
      <motion.section
        initial={{ marginTop: showServices ? '80px' : '288px' }}
        animate={{ marginTop: showServices ? '80px' : '288px' }}
        transition={{ duration: 1 }}
        className={`transition-transform relative flex flex-col justify-center py-5 ${showServices ? 'min-h-screen' : ''} w-full text-xl text-white border-t border-b border-solid border-white border-opacity-80 max-md:mt-10 max-md:max-w-full`}
      >
        <div className="flex gap-5 justify-center px-5 w-full max-md:flex-wrap max-md:max-w-full">        <button
          className="flex-auto text-left"
          onClick={() => setShowServices(!showServices)}
        >
         Show all services
        </button>
        <button
          onClick={() => setShowServices(!showServices)}
          className="text-3xl bg-white p-4 h-10 w-10 text-black rounded-full flex items-center justify-center"
        >
          {showServices ? "−" : "+"}
        </button>
      </div>

      <AnimatePresence>
        {showServices && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden"
          >
            <div className="p-6 w-full">
              <div>
                {Object.keys(services).map((category) => (
                  <div key={category} className="mb-6 md:mb-12">
                    <h3 className="text-[18px] xl:text-xl my-4 md:my-8 uppercase text-gray-300">
                      {category}
                    </h3>
                    <div className="list-disc grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {services[category].map((service, index) => (
                        <p key={index} className="mb-2 text-gray-500 text-sm md:text-base">
                          {service}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>

  );
};

export default ShowAllServices;
