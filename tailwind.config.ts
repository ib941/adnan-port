import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pureWhite: '#FFFFFF',
        deepBlack: {
          DEFAULT: '#000000',
          rich: '#050505',
          subtle: '#1C1C1E',
          muted: '#52525B',
        },
        darkBlue: {
          DEFAULT: '#0A192F',
          hover: '#071222',
          active: '#050D19',
          light: '#172A45',
          subtle: 'rgba(10, 25, 47, 0.05)',
          border: 'rgba(10, 25, 47, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-ibm-arabic)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 25, 47, 0.06)',
        'luxury': '0 20px 40px -15px rgba(10, 25, 47, 0.08)',
        'btn': '0 4px 14px 0 rgba(10, 25, 47, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
