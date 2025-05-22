'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface GradientContextType {
  isAtBottom: boolean;
  setIsAtBottom: (value: boolean) => void;
}

const GradientContext = createContext<GradientContextType | undefined>(
  undefined,
);

export function GradientProvider({ children }: { children: ReactNode }) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  return (
    <GradientContext.Provider value={{ isAtBottom, setIsAtBottom }}>
      {children}
    </GradientContext.Provider>
  );
}

export function useGradient() {
  const context = useContext(GradientContext);
  if (context === undefined) {
    throw new Error('useGradient must be used within a GradientProvider');
  }
  return context;
}
