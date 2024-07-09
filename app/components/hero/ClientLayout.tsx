// components/ScrollProvider.tsx
"use client";
import React, { ReactNode, useRef, useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useLocomotiveScroll } from "@/app/contexts/LocomotiveScroll";

interface ScrollProviderProps {
  children: ReactNode;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setLocomotiveScroll } = useLocomotiveScroll();

  useEffect(() => {
    let locomotiveScroll: any;

    const initializeScroll = async () => {
      if (typeof window !== "undefined" && scrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        setLocomotiveScroll(locomotiveScroll);
      }
    };

    initializeScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
        setLocomotiveScroll(null);
      }
    };
  }, [setLocomotiveScroll]);

  return <div data-scroll-container ref={scrollRef}>{children}</div>;
};

export default ScrollProvider;
