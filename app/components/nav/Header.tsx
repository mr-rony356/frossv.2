"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PhoneHeader from "./PhoneHeader";
import DesktopHeader from "./DesktopHeader";
import { useLocomotiveScroll } from "@/app/contexts/LocomotiveScroll";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isScrolled, setIsScrolled] = useState(false);
  const { locomotiveScroll } = useLocomotiveScroll();

  useEffect(() => {
    if (locomotiveScroll) {
      locomotiveScroll.on("scroll", (obj: { scroll: { y: number } }) => {
        setIsScrolled(obj.scroll.y > 0);
      });
    }
  }, [locomotiveScroll]);

  const headerClass = `fixed top-0  left-0 right-0 z-20   transition-colors duration-300 ${
    isScrolled ? "bg-black " : "bg-transparent  text-white"
  }`;

  return (
    <header className={headerClass}>
      {isMobile ? <PhoneHeader /> : <DesktopHeader />}
    </header>
  );
};

export default Header;
