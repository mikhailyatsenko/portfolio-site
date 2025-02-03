'use client';

import { PropsWithChildren } from 'react';
import CanvasAnimation from '@/lib/CanvasAnimation';
import './style.css';
import { useTheme } from '@/context/ThemeContext';

export const HeroAnimatedBg: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <section className="bg relative h-dvh w-full overflow-hidden">
      <div className="animCircles duration-300"></div>
      <CanvasAnimation theme={theme} />
      {children}
    </section>
  );
};
