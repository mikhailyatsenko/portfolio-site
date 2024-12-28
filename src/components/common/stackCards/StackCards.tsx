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
        // const cardHeight = 700;
        const marginY = 15; // промежуток между карточками

        // Обработка каждой карточки

        let acucumulateHeihgt = 0;
        Array.from(items).forEach((item, index) => {
          const cardHeight = item.getBoundingClientRect().height;
          if (index !== 0) {
            acucumulateHeihgt += cardHeight + marginY;
          }
          const scrolling = offsetTop - top - acucumulateHeihgt;

          // Если карточка уже вышла за пределы области видимости — фиксируем её
          if (scrolling > cardHeight / 2) {
            const scale = Math.max(
              0.8,
              (cardHeight - scrolling * 0.05) / cardHeight,
            ); // не уменьшаем меньше 80%
            const translateY = marginY * index;

            item.style.transform = `translateY(${translateY}px) rotate(${index % 2 === 0 ? -scale : scale}deg)`;
          } else {
            item.style.transform = `translateY(${marginY * index}px) rotate(0deg)`;
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
          className="card sticky top-20 transform rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-200"
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export { StackCards };
