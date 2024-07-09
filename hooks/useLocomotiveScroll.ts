"use client";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeScroll = async () => {
      if (typeof window !== "undefined" && scrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        
        // Ensure the scroll container covers the full height
        const setScrollContainerHeight = () => {
          if (scrollRef.current) {
            scrollRef.current.style.height = '100%';
            document.body.style.height = '100%';
            document.documentElement.style.height = '100%';
          }
        };
        
        setScrollContainerHeight();
        window.addEventListener('resize', setScrollContainerHeight);

        const scroll = new LocomotiveScroll({
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

        return () => {
          if (scroll) scroll.destroy();
          window.removeEventListener('resize', setScrollContainerHeight);
        };
      }
    };

    initializeScroll();
  }, []);

  return scrollRef;
};

export default useLocomotiveScroll;