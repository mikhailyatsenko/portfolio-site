'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BlueGradient, PinkGradient } from './GradientElements';

type Section = 'hero' | 'profile' | 'projects';

export const AnimatedBgWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<Section>('hero');
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.3) {
              setActiveSection(entry.target.id as Section);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-5% 0px -5% 0px',
      },
    );

    const refs = [heroRef, profileRef, projectsRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  console.log(activeSection);

  const childrenArray = React.Children.toArray(children);
  return (
    <div className="relative">
      <BlueGradient className={activeSection} />
      <PinkGradient className={activeSection} />
      <div ref={heroRef} id="hero">
        {childrenArray[0]}
      </div>
      <div ref={profileRef} id="profile">
        {childrenArray[1]}
      </div>
      <div ref={projectsRef} id="projects">
        {childrenArray[2]}
      </div>
    </div>
  );
};
