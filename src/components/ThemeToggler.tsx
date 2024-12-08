'use client';

import { toggleTheme } from '@/utils/toggleTheme';
import { applySavedTheme } from '@/utils/toggleTheme';
import { useEffect } from 'react';

export function ThemeToggle() {
  useEffect(() => {
    applySavedTheme();
  }, []);

  return (
    <button className="p-2 border rounded" onClick={() => toggleTheme()}>
      Toggle Theme
    </button>
  );
}
