'use client';

import cls from './StackCards.module.css';

import { useRef, useEffect } from 'react';

interface StackCardsProps {
  items: React.ReactNode[];
}

export const StackCards: React.FC<StackCardsProps> = ({ items }) => {
  const containerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(
      `.${cls.stackCard}`,
    ) as NodeListOf<HTMLLIElement>;
    if (!cards.length) return; // Если карточек нет, просто выходим

    const cardHeight = cards[0].offsetHeight || 0;
    // const marginY = parseFloat(getComputedStyle(cards[0]).marginBottom || '0');

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;

      cards.forEach((card, index) => {
        const offset = index * (cardHeight / 2); // Накладываем каждую карточку на предыдущую
        const scrolling = containerTop + cardHeight * index;

        if (scrolling > 0) {
          console.log(index, offset);
          const scale = Math.max(
            0.8,
            (cardHeight - scrolling * 0.2) / cardHeight,
          );
          card.style.transform = `translateY(${offset}px) scale(${scale})`;
          card.style.zIndex = `${cards.length + index}`; // Обеспечивает наложение
        } else {
          card.style.transform = `translateY(${offset}px) scale(1)`;
          card.style.zIndex = `${cards.length + index}`;
        }
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // вызов для начальной установки
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ul ref={containerRef} className="relative">
      {items.map((content, index) => (
        <li key={index} className={`${cls.stackCard}`}>
          {content}
        </li>
      ))}
    </ul>
  );
};
