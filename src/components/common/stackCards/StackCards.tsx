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

  useEffect(() => {
    const normalizwItemsHeight = () => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.getElementsByClassName(
        'card',
      ) as HTMLCollectionOf<HTMLDivElement>;

      Array.from(items).forEach((item, index) => {
        if (index !== 0 && items[index - 1].clientHeight > item.clientHeight) {
          item.style.height = `${items[index - 1].clientHeight}px`;
        }
      });
    };

    normalizwItemsHeight();
    window.addEventListener('resize', normalizwItemsHeight);
    return () => {
      window.removeEventListener('resize', normalizwItemsHeight);
    };
  }, []);

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
        // const cardHeight = item.getBoundingClientRect().height;

        if (index !== 0) {
          accumulatedHeight +=
            items[index - 1].getBoundingClientRect().height + marginY;
        }

        const scrolling = offsetTop - top - accumulatedHeight;
        // Анимация только с transform для оптимизации производительности
        if (scrolling > 0) {
          const scale = Math.min(Math.max(1 - scrolling / 1000, 0.95), 1);
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
    <div ref={containerRef}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`card sticky top-20 mx-auto max-w-[1024px] transform overflow-hidden rounded-xl shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.1)] transition-transform duration-100 ${
            index % 2 === 0
              ? 'bg-gradient-to-br from-[#e3fdf5] to-[#ffe6fa] dark:from-[#1f1636] dark:to-[#090610]'
              : 'bg-gradient-to-br from-[#ffe6fa] to-[#e3fdf5] dark:from-[#090610] dark:to-[#1f1636]'
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export { StackCards };
