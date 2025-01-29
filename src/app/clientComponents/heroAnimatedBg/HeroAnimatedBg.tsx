'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import CanvasAnimation from '@/lib/CanvasAnimation';
import './style.css';
import { useTheme } from '@/context/ThemeContext';

export const HeroAnimatedBg: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <section className="bg relative h-dvh w-full overflow-hidden">
      <div className="animCircles"></div>
      <CanvasAnimation
        theme={theme}
        width={dimensions.width}
        height={dimensions.height}
      />
      {children}
    </section>
  );
};
