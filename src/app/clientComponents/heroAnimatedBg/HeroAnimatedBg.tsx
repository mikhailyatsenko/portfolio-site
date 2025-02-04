'use client';

import { PropsWithChildren } from 'react';
import CanvasAnimation from '@/lib/CanvasAnimation';
import cls from './HeroAnimatedBg.module.css';
import { useTheme } from '@/context/ThemeContext';

export const HeroAnimatedBg: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <section
      className={`bg-gradient dark:bg-gradient-dark relative h-dvh w-full overflow-hidden`}
    >
      <div className={`${cls.animCircles} duration-300`}></div>
      <CanvasAnimation theme={theme} />
      {children}
    </section>
  );
};
