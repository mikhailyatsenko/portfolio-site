'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface StackCardsProps {
  cardsArray: React.ReactNode[];
}

const StackCards: React.FC<StackCardsProps> = ({ cardsArray }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (scrolling) return;
    setScrolling(true);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.getElementsByClassName(
        'card',
      ) as HTMLCollectionOf<HTMLDivElement>;
      const containerTop = container.getBoundingClientRect().top;
      const offsetTop = 100; // отступ от верха
      const marginY = 8; // промежуток между карточками

      let accumulatedHeight = 0;

      Array.from(items).forEach((item, index) => {
        if (index !== 0) {
          accumulatedHeight += items[index - 1].clientHeight + marginY;
        }

        const scrollingOffset = offsetTop - containerTop - accumulatedHeight;
        if (scrollingOffset > 0) {
          const scale = Math.min(Math.max(1 - scrollingOffset / 1000, 0.95), 1);
          const rotateDirection = index % 2 === 0 ? -1 : 1;
          const rotateCard =
            rotateDirection * Math.min(Math.max(scrollingOffset / 50, 0), 0.6);
          const opacity = Math.max(
            0,
            1.2 - scrollingOffset / item.clientHeight,
          );
          const translateY = marginY * index;

          item.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotateCard}deg)`;
          item.style.opacity = opacity.toString();
        } else {
          item.style.transform = `translateY(${marginY * index}px) scale(1)`;
        }
      });

      setScrolling(false);
    }, 15);
  }, [scrolling]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const debouncedScroll = () => handleScroll();

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        document.getElementById('projects')?.classList.add('new-bg');
        window.addEventListener('scroll', debouncedScroll);
      } else {
        document.getElementById('projects')?.classList.remove('new-bg');
        window.removeEventListener('scroll', debouncedScroll);
      }
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef}>
      {cardsArray.map((child, index) => (
        <div
          key={index}
          className="card sticky top-20 mx-auto max-w-[1024px] transform overflow-hidden rounded-lg transition-[transform,_opacity] duration-300"
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export { StackCards };
