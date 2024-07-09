// contexts/LocomotiveScrollContext.tsx
"use client";
import React, { createContext, useContext, ReactNode } from 'react';

interface LocomotiveScrollContextType {
  locomotiveScroll: any | null;
  setLocomotiveScroll: React.Dispatch<React.SetStateAction<any | null>>;
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextType | undefined>(undefined);

export const LocomotiveScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locomotiveScroll, setLocomotiveScroll] = React.useState<any | null>(null);

  return (
    <LocomotiveScrollContext.Provider value={{ locomotiveScroll, setLocomotiveScroll }}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};

export const useLocomotiveScroll = () => {
  const context = useContext(LocomotiveScrollContext);
  if (context === undefined) {
    throw new Error('useLocomotiveScroll must be used within a LocomotiveScrollProvider');
  }
  return context;
};