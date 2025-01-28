'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import Cookies from 'js-cookie';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  serverThemeCookie,
}: {
  children: ReactNode;
  serverThemeCookie?: Theme;
}) => {
  console.log(serverThemeCookie);

  const [theme, setTheme] = useState<Theme>(serverThemeCookie || 'light');

  useEffect(() => {
    if (!serverThemeCookie) {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, [serverThemeCookie]);

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark' : '';
    Cookies.set('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
