'use client';

import { useState, useEffect, useRef } from 'react';

interface StickySectionProps {
  children: React.ReactNode;
}

const StickySection: React.FC<StickySectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[400vh]">
      <div
        className={`sticky left-0 top-0 h-screen w-full bg-background transition-all ${
          isSticky ? 'overflow-auto' : ''
        }`}
      >
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};

export default StickySection;
