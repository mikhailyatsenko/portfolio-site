'use client';

import {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useRouter } from 'next/navigation';
import { useScrollLock } from '@/lib/useScrollLock';
import ButtonBack from '../components/common/Buttons/ButtonBack';

export default function ProjectModal({ children }: PropsWithChildren) {
  const router = useRouter();
  useScrollLock();

  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current) {
        const scrollTop = modalRef.current.scrollTop;
        setIsScrolled(scrollTop >= 20);
      }
    };
    handleScroll();
    const modalElement = modalRef.current;
    modalElement?.addEventListener('scroll', handleScroll, { passive: true });

    // Добавляем обработчик нажатия клавиши Esc
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        onDismiss();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      modalElement?.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onDismiss]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[19] overflow-y-auto bg-black bg-opacity-25"
    >
      <div
        ref={contentRef}
        className="mx-auto mt-[84px] w-11/12 animate-fadeInWithSlide overflow-hidden rounded-md bg-background opacity-0 [animation-duration:_0.2s]"
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
        }}
      />
    </div>
  );
}
