'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import CanvasAnimation from '@/lib/CanvasAnimation';
import cls from './HeroAnimatedBg.module.css';

export const HeroAnimatedBg: React.FC<PropsWithChildren> = ({ children }) => {
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
    <section className="relative h-dvh w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,_#221b35_0%,_#0b090f_100%)]">
      <div className={cls.stars}></div>
      <CanvasAnimation width={dimensions.width} height={dimensions.height} />
      {children}
    </section>
  );
};
