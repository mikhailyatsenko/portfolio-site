'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface StackCardsProps {
  cardsArray: React.ReactNode[];
}

interface CardStyle {
  transform: string;
  opacity: number;
}

const StackCards: React.FC<StackCardsProps> = ({ cardsArray }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const [cardStyles, setCardStyles] = useState<CardStyle[]>([]);
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

      const containerTop = container.getBoundingClientRect().top;
      const offsetTop = 100;
      const marginY = 8;

      const newStyles: CardStyle[] = cardsArray.map((_, index) => {
        let accumulatedHeight = 0;
        if (index !== 0) {
          // Calculate accumulated height based on previous cards
          for (let i = 0; i < index; i++) {
            const cardElement = container.children[i] as HTMLElement;
            accumulatedHeight += cardElement.clientHeight + marginY;
          }
        }

        const scrollingOffset = offsetTop - containerTop - accumulatedHeight;
        if (scrollingOffset > 0) {
          const scale = Math.min(Math.max(1 - scrollingOffset / 1000, 0.95), 1);
          const rotateDirection = index % 2 === 0 ? -1 : 1;
          const rotateCard =
            rotateDirection * Math.min(Math.max(scrollingOffset / 50, 0), 0.6);
          const opacity = Math.max(
            0,
            1.2 -
              scrollingOffset /
                (container.children[index] as HTMLElement).clientHeight,
          );
          const translateY = marginY * index;

          return {
            transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotateCard}deg)`,
            opacity,
          };
        }

        return {
          transform: `translateY(${marginY * index}px) scale(1)`,
          opacity: 1,
        };
      });

      setCardStyles(newStyles);
      setScrolling(false);
    }, 15);
  }, [scrolling, cardsArray]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef}>
      {cardsArray.map((child, index) => (
        <div
          key={index}
          className="card sticky top-20 mx-auto max-w-[1024px] transform overflow-hidden rounded-lg transition-[transform,_opacity] duration-300"
          style={cardStyles[index]}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export { StackCards };
