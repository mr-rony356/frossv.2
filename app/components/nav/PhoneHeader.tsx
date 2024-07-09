import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";

const PhoneHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (item: string) => {
    setDropdownOpen((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'
  }`;

  return (
    <div className={`${headerClass} max-h-content flex flex-col items-center justify-center px-2 py-4 rounded-lg`}>
      <div className="flex justify-between items-center w-full px-6">
        <Image
          src="/forssdigital-logga.svg"
          alt="Logo"
          width={150}
          height={150}
        />
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <LiaTimesSolid /> : <HiBars3 size={25} />}
        </button>
      </div>
      {isOpen && (
        <div className="space-y-4 w-full mt-8 bg-black rounded-lg p-2 pr-4 pb-12">
          <ul className="space-y-4">
            {["Product", "Solutions", "Pricing", "Resources", "Company"].map(
              (item) => (
                <li key={item} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleDropdown(item)}
                      className="text-left w-full px-4 py-2 rounded-md hover:bg-gray-800 flex justify-between items-center"
                    >
                      {item}
                      {item !== "Pricing" && (
                        <span className="text-gray-400">
                          {dropdownOpen[item] ? (
                            <MdKeyboardArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </span>
                      )}
                    </button>
                  </div>
                  {dropdownOpen[item] && item === "Solutions" && (
                    <div className="pl-8 pr-4 py-2 space-y-4">
                    <div>
                      <p className="text-gray-400 uppercase text-sm">Business Solutions</p>
                      <ul className="space-y-2">
                        <li className="text-gray-300">Convert</li>
                        <li className="text-gray-300">Engage</li>
                        <li className="text-gray-300">Retain</li>
                        <li className="text-gray-300">Product Adoption</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 uppercase text-sm">Industry Solutions</p>
                      <ul className="space-y-2">
                        <li className="text-gray-300">eCommerce</li>
                        <li className="text-gray-300">SaaS</li>
                        <li className="text-gray-300">SaaS</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-400 uppercase text-sm">Insight</p>
                      <ul className="space-y-2">
                        <li className="text-gray-300">Debugging with product analytics</li>
                        <li className="text-gray-300">Why it’s never too early to add product analytics to your app</li>
                        <li className="text-gray-300">Data implementation, starting with the ‘why’</li>
                      </ul>
                    </div>
                  </div>
                )}
                  {dropdownOpen[item] && item !== "Solutions" && item !== "Pricing" && (
                    <div className="pl-8 pr-4 py-2">
                      <p className="text-gray-300">
                        Dropdown content for {item}
                      </p>
                    </div>
                  )}
                </li>
              )
            )}
          </ul>
          <div className="space-y-4 flex justify-center items-center flex-col">
            <button className="bg-[#A54C3D] text-white px-4 py-2 rounded-[100px] w-[90%] hover:bg-red-700">
              Request a Demo
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-[100px] w-[90%] hover:bg-gray-200">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneHeader;