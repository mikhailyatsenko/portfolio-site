// components/Modal.tsx

'use client';

import React, { useEffect, useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  isLoading = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); // Длительность совпадает с Tailwind transition
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      } transition-opacity duration-300`}
    >
      <div
        className={`max-h-[90%] w-[90%] transform overflow-y-auto rounded-lg bg-white p-6 shadow-lg md:w-[50%] ${
          isOpen ? 'scale-100' : 'scale-95'
        } transition-all duration-300`}
      >
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <span className="loader h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></span>
          </div>
        ) : (
          <>
            <button
              onClick={onClose}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              ✖
            </button>
            {children}
          </>
        )}
      </div>
    </div>
  );
};
