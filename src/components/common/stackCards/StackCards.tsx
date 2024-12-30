'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface StackCardsProps {
  children: React.ReactNode[];
}

const StackCards: React.FC<StackCardsProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  // Дебаунсинг функции скролла
  const debounce = (
    func: (...args: unknown[]) => void,
    delay: number,
  ): ((...args: unknown[]) => void) => {
    let timer: NodeJS.Timeout;
    return (...args: unknown[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleScroll = useCallback(() => {
    if (scrolling) return;
    setScrolling(true);

    window.requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.getElementsByClassName(
        'card',
      ) as HTMLCollectionOf<HTMLDivElement>;

      const top = container.getBoundingClientRect().top;
      const offsetTop = 100; // отступ от верха
      const marginY = 15; // промежуток между карточками

      let accumulatedHeight = 0;

      Array.from(items).forEach((item, index) => {
        const cardHeight = item.getBoundingClientRect().height;

        if (index !== 0) {
          accumulatedHeight += cardHeight + marginY;
        }

        const scrolling = offsetTop - top - accumulatedHeight;

        // Анимация только с transform для оптимизации производительности
        if (scrolling > 0) {
          const scale = Math.min(Math.max(1 - scrolling / 2000, 0.95), 1);
          const translateY = marginY * index;
          item.style.transform = `translateY(${translateY}px) scale(${scale})`;
        } else {
          item.style.transform = `translateY(${marginY * index}px) scale(1)`;
        }
      });

      setScrolling(false);
    });
  }, [scrolling]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', debouncedScroll);
      } else {
        window.removeEventListener('scroll', debouncedScroll);
      }
    });

    observer.observe(container);

    const debouncedScroll = debounce(handleScroll, 10); // Дебаунсинг вызова

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="card-deck-js space-y-4">
      {children.map((child, index) => (
        <div
          key={index}
          className="card sticky top-20 transform rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-100"
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export { StackCards };
