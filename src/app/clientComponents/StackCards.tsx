'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface StackCardsProps {
  cardsArray: React.ReactNode[];
}

const StackCards: React.FC<StackCardsProps> = ({ cardsArray }) => {
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
      const marginY = 8; // промежуток между карточками

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

          const rotateDirection = index % 2 === 0 ? -1 : 1;
          const rotateCard =
            rotateDirection * Math.min(Math.max(scrolling / 50, 0), 0.6);

          const translateY = marginY * index;
          item.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotateCard}deg)`;
        } else {
          item.style.transform = `translateY(${marginY * index}px) scale(1) `;
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
        document.getElementById('main-content')?.classList.add('new-bg');

        window.addEventListener('scroll', debouncedScroll);
      } else {
        document.getElementById('main-content')?.classList.remove('new-bg');
        window.removeEventListener('scroll', debouncedScroll);
      }
    });

    observer.observe(container);

    const debouncedScroll = debounce(handleScroll, 10);

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
          className={`card sticky top-20 mx-auto max-w-[1024px] transform overflow-hidden rounded-lg transition-transform duration-300`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export { StackCards };
