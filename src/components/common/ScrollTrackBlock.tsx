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

  useEffect(() => {
    const handleScroll = () => {
      if (!blockRef.current) return;

      const { top, height } = blockRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Рассчитываем прогресс (0 до 1)
      let progress = 0;
      if (top < windowHeight && top + height > 0) {
        const visibleHeight = Math.min(height, windowHeight - top);
        progress = Math.min(1, Math.max(0, visibleHeight / height));
      }

      document.documentElement.style.setProperty(
        `--scroll-progress-${id}`,
        `${progress}`,
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Убедимся, что переменная установлена при загрузке
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return (
    <div ref={blockRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};
