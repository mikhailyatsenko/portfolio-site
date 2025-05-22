'use client';

import { useEffect, useRef } from 'react';
import { useGradient } from '@/context/GradientContext';

export const ScrollTracker = () => {
  const observerRef = useRef<HTMLDivElement>(null);
  const { setIsAtBottom } = useGradient();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtBottom(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [setIsAtBottom]);

  return <div ref={observerRef} className="h-1 w-full" />;
};
