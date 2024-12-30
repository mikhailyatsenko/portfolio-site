'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StackCardsProps {
  children: React.ReactNode[];
}

const StackCards: React.FC<StackCardsProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.getElementsByClassName(
      'card',
    ) as HTMLCollectionOf<HTMLDivElement>;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    });

    observer.observe(container);

    const handleScroll = () => {
      if (scrolling) return;
      setScrolling(true);

      window.requestAnimationFrame(() => {
        const top = container.getBoundingClientRect().top;
        const offsetTop = 100; // отступ от верха
        const marginY = 15; // промежуток между карточками

        // Обработка каждой карточки

        let acucumulateHeihgt = 0;
        Array.from(items).forEach((item, index) => {
          const cardHeight = item.getBoundingClientRect().height;
          if (index !== 0) {
            acucumulateHeihgt += cardHeight + marginY;
          }
          const scrolling = offsetTop - top - acucumulateHeihgt;
          if (index === 1) console.log(index, scrolling);
          // Если карточка уже вышла за пределы области видимости — фиксируем её
          if (scrolling > 0) {
            const scale = Math.min(Math.max(1 - scrolling / 2000, 0.95), 1);
            if (index === 1) console.log('scale', scale);
            const translateY = marginY * index;

            item.style.transform = `translateY(${translateY}px) scale(${scale})`;
          } else {
            item.style.transform = `translateY(${marginY * index}px) scale(1)`;
          }
        });

        setScrolling(false);
      });
    };

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

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
