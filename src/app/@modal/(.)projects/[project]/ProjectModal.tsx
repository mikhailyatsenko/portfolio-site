'use client';

import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollLock } from './useScrollLock';

export default function ProjectModal({ children }: PropsWithChildren) {
  const router = useRouter();
  useScrollLock();

  const onDismiss = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-25"
      onClick={onDismiss}
    >
      <div
        className="mx-auto mt-[74px] w-11/12 overflow-hidden rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-foreground hover:bg-blue-600"
        onClick={onDismiss}
      >
        Close
      </button>
    </div>
  );
}
