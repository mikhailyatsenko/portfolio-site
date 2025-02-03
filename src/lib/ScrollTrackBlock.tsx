'use client';

import { useRef, useEffect } from 'react';

interface ScrollBlockProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export const ScrollTrackBlock: React.FC<ScrollBlockProps> = ({
  children,
  className = '',
  id,
}) => {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!blockRef.current) return;

      const { top, height } = blockRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollDistance = height + windowHeight;
      const scrolled = windowHeight - top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));

      if (progressRef.current !== progress) {
        progressRef.current = progress;
        document.documentElement.style.setProperty(
          `--scroll-progress-${id}`,
          `${progress}`,
        );
      }
    };

    let animationFrameId: number;

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    handleScroll();

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId); // Отменяем анимацию при размонтировании
    };
  }, [id]);

  return (
    <div ref={blockRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};
