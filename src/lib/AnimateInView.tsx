'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface AnimateInViewProps {
  children?: React.ReactNode;
  className?: string; // Изначальные классы
  activeClass?: string; // Классы, которые активируются при появлении
  tag?: JSX.ElementType; // Тег, который нужно использовать для обёртки (по умолчанию div)
  threshold?: number; // Порог видимости
  resetOnExit?: boolean; // Возвращать ли в исходное состояние при выходе из видимости
}

export const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  className = 'opacity-0 transition-opacity duration-1000 ease-in-out',
  activeClass = '!opacity-100 transition-opacity duration-1000 ease-in-out',
  tag = 'div',
  threshold = 0.15,
  resetOnExit = false,
  ...props
}) => {
  if (threshold < 0 || threshold > 1) {
    throw new Error('Threshold value must be between 0 and 1');
  }

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | SVGElement | null>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => setIsVisible(true));
      } else if (resetOnExit) {
        requestAnimationFrame(() => setIsVisible(false));
      }
    },
    [resetOnExit],
  );

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [threshold, resetOnExit, handleIntersection]);

  const Component = tag;

  return (
    <Component
      ref={elementRef}
      className={`${className} ${isVisible ? activeClass : ''}`}
      {...props}
    >
      {children}
    </Component>
  );
};
