'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollLock } from '@/lib/useScrollLock';
import ButtonBack from '../components/common/Buttons/ButtonBack';

export default function ProjectModal({ children }: PropsWithChildren) {
  const router = useRouter();
  useScrollLock();

  const modalRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current) {
        const scrollTop = modalRef.current.scrollTop;
        setIsScrolled(scrollTop >= 20);
      }
    };

    const modalElement = modalRef.current;
    modalElement?.addEventListener('scroll', handleScroll, { passive: true });

    return () => modalElement?.removeEventListener('scroll', handleScroll);
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[19] overflow-y-auto bg-black bg-opacity-25"
      onClick={onDismiss}
    >
      <div
        className="mx-auto mt-[84px] w-11/12 animate-fadeInWithZoom overflow-hidden rounded-md bg-background opacity-0 [animation-duration:_0.2s]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>

      <ButtonBack
        className={`z-2 fixed left-1/2 top-28 mx-auto -translate-x-1/2 animate-fadeIn opacity-0 transition-transform duration-[0.2s] ${
          isScrolled ? 'scale-0 opacity-0' : ''
        }`}
        aria-label="Back"
        title="Back"
        onClick={(e) => {
          e.stopPropagation();
          onDismiss();
        }}
      />
    </div>
  );
}
