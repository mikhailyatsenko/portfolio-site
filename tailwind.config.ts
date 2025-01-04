import type { Config } from 'tailwindcss';
import { keyframes } from './src/lib/keyframes';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm576: '576px',
      },
      keyframes: {
        fadeIn: keyframes.fadeIn,
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['var(--font-rokkitt-serif)', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2' }],
        h2: ['2.25rem', { lineHeight: '1.3' }],
        h3: ['1.875rem', { lineHeight: '1.4' }],
        h4: ['1.5rem', { lineHeight: '1.5' }],
        h5: ['1.25rem', { lineHeight: '1.6' }],
        h6: ['1rem', { lineHeight: '1.7' }],
      },
      height: {
        'screen-minus-nav': 'calc(100vh - 74px)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-opacity-variable': {
          backgroundColor: 'rgba(var(--background), var(--tw-bg-opacity, 1))',
        },
        '.fg-opacity-variable': {
          backgroundColor: 'rgba(var(--foreground), var(--tw-bg-opacity, 1))',
        },
      });
    }),
  ],
} satisfies Config;
