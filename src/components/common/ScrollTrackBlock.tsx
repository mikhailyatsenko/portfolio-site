'use client';

import { useRef, useEffect } from 'react';
import throttle from 'lodash/throttle';

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
  const progressRef = useRef(0); // Для хранения текущего прогресса

  useEffect(() => {
    if (!blockRef.current) return;

    const updateProgress = throttle((progress: number) => {
      // Троттлим обновления стиля
      if (progressRef.current !== progress) {
        progressRef.current = progress;
        document.documentElement.style.setProperty(
          `--scroll-progress-${id}`,
          `${progress}`,
        );
      }
    }, 100); // Частота обновления 100 мс

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!blockRef.current) return;

        const { top, height } = blockRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 0;

        if (entry.isIntersecting) {
          const visibleHeight = Math.min(height, windowHeight - top);
          progress = Math.min(1, Math.max(0, visibleHeight / height));
        } else if (entry.boundingClientRect.top < 0) {
          // Если блок уже проскроллен
          progress = 1;
        }

        updateProgress(progress);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Отслеживаем видимость с шагом 1%
      },
    );

    observer.observe(blockRef.current);

    // Устанавливаем прогресс в 0 при загрузке
    document.documentElement.style.setProperty(`--scroll-progress-${id}`, `0`);

    return () => {
      observer.disconnect();
      updateProgress.cancel(); // Отменяем троттлинг при размонтировании
    };
  }, [id]);

  return (
    <div ref={blockRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};
