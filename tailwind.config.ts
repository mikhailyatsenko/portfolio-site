import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { screens } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm576: '576px',
      'h-sm': { raw: '(min-height: 480px)' },
      'h-md': { raw: '(min-height: 640px)' },
      ...screens,
    },
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
      },
      backgroundImage: {
        'stripes-rainbow': `
          repeating-linear-gradient(100deg, var(--stripe-color) 0%, var(--stripe-color) 7%, transparent 10%, transparent 12%, var(--stripe-color) 16%),
          repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 15%, #60a5fa 20%, #5eead4 25%, #60a5fa 30%)
        `,
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
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
      maxHeight: {
        'screen-minus-nav': 'calc(100vh - 74px)',
      },
      minHeight: {
        'screen-minus-nav': 'calc(100vh - 74px)',
      },
      animation: {
        smoothBg: 'smoothBg 60s linear infinite',
        blink: 'blink-animation 2s ease-in-out infinite',
        textGlow: 'textGlow 2s linear forwards',
        fadeIn: 'fadeIn 0.8s linear 0.2s forwards',
        fadeInWithSlide: 'fadeInWithSlide 0.5s linear 0.2s forwards',
        rotate: 'rotateAnimation 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInWithSlide: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        smoothBg: {
          '0%': { backgroundPosition: '50% 50%, 50% 50%' },
          '100%': { backgroundPosition: '350% 50%, 350% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: 'var(--blink-opacity, 1)' },
          '50%': { opacity: '0' },
        },
        textGlow: {
          '0%': {
            textShadow: 'none',
          },
          '5%': {
            textShadow:
              '0 0 10px var(--tw-shadow-color), 0 0 10px var(--tw-shadow-color)',
          },
          '100%': {
            textShadow: 'none',
          },
        },
        rotateAnimation: {
          '0%': { transform: 'rotate(0deg)', width: '64px', height: '64px' },
          '50%': { transform: 'rotate(180deg)', width: '30px', height: '30px' },
          '100%': {
            transform: 'rotate(360deg)',
            width: '64px',
            height: '64px',
          },
        },
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
