import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Gray from "../../../public/gray.png";
import GrayRound from "../../../public/gray-round.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const DesktopHeader: React.FC = () => {
  const [showProjectsSection, setShowProjectsSection] =
    useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = `p-6 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-black text-white" : "bg-transparent text-white"
  }`;

  const linkVariants = {
    hover: {
      y: -5,
      color: "#FFD700", // Yellow color
      transition: { duration: 0.3 },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <header
      className={`${headerClass} mb-4 grid-container flex justify-between items-center relative px-6`}
    >
      <div className="flex items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Image
            src="/forssdigital-logga.svg"
            alt=""
            width={250}
            height={250}
          />
        </div>
      </div>
      <nav className="flex space-x-8">
        <motion.a
          href="#"
          className="hover:text-gray-300"
          onMouseEnter={() => setShowProjectsSection(false)}
          variants={linkVariants}
          whileHover="hover"
        >
          Home
        </motion.a>
        <motion.div
          ref={projectsRef}
          className="relative"
          onMouseEnter={() => setShowProjectsSection(true)}
          onMouseLeave={() => setShowProjectsSection(false)}
        >
          <motion.a
            href="#"
            className="hover:text-gray-300 relative"
            variants={linkVariants}
            whileHover="hover"
          >
            Projects
          </motion.a>
          <AnimatePresence>
            {showProjectsSection && (
              <motion.div
                className="absolute top-8 -right-80 transform -translate-x-1/2 mt-2 w-[700px] bg-white text-black p-6 rounded-lg shadow-lg z-50"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                <div className="text-gray-500 text-xs mb-4">
                  POWERFULL AND SIMPLE ANALYTICS
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">Interactive Reports</h3>
                        <p className="text-gray-600 text-sm">
                          Learn about your users
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">
                          Team Dashboard & Alerts
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Monitor your metrics
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">Group Analytics</h3>
                        <p className="text-gray-600 text-sm">
                          Measure B2B account health
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">Behavioral Analytics</h3>
                        <p className="text-gray-600 text-sm">
                          Real-time analytics user trends
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">Audience Segmentation</h3>
                        <p className="text-gray-600 text-sm">
                          Segments with perfect target
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">
                          Limitless Segmentation
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Surface hidden trends
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-gray-500 text-xs mb-4">
                      TOOLS FOR TRUSTED DATA
                    </div>

                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">Data Integrations</h3>
                        <p className="text-gray-600 text-sm">
                          Connect to your warehouse
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">Data Management</h3>
                        <p className="text-gray-600 text-sm">
                          Keep data clean & usable
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <Image src={Gray} alt="gray" />
                      <div>
                        <h3 className="font-semibold">Security & Privacy</h3>
                        <p className="text-gray-600 text-sm">
                          Protect customer data
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-2">
                      ALWAYS IMPROVING
                    </div>
                    <div>
                      <Image src={GrayRound} alt="gray" width={200} />
                    </div>
                    <div className="p-3 px-0 rounded">
                      <span className="flex items-center gap-2">
                        <IoIosCheckmarkCircle />{" "}
                        <p className="text-gray-600 text-sm mb-1">
                          Update analytics bug
                        </p>
                      </span>
                      <span className="flex items-center gap-2">
                        <IoIosCheckmarkCircle />
                        <p className="text-gray-600 text-sm">
                          Remap data with Cloud
                        </p>
                      </span>
                    </div>
                    <a href="#" className="mt-2 inline-block font-bold">
                      See all →
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.a
          href="#"
          className="hover:text-gray-300"
          onMouseEnter={() => setShowProjectsSection(false)}
          variants={linkVariants}
          whileHover="hover"
        >
          About
        </motion.a>
      </nav>
      <motion.button
        className={`flex items-center gap-10 font-normal py-2 pl-8 pr-4 rounded-[15px] border-2 ${
          isScrolled
            ? "border-white hover:bg-white hover:text-black"
            : "border-white hover:bg-white hover:text-black"
        } text-[14px] transition-colors duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        GET STARTED <FaArrowRight />
      </motion.button>
    </header>
  );
};

export default DesktopHeader;
