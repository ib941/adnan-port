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
        canvas: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          muted: '#F1F5F9',
          border: '#E2E8F0',
        },
        darkBlue: {
          DEFAULT: '#0A192F',
          hover: '#071222',
          active: '#050D19',
          light: '#172A45',
          subtle: 'rgba(10, 25, 47, 0.04)',
          border: 'rgba(10, 25, 47, 0.12)',
        },
        goldAccent: {
          DEFAULT: '#B89762',
          light: '#C5A880',
          dark: '#9E7E4C',
          subtle: 'rgba(184, 151, 98, 0.1)',
          border: 'rgba(184, 151, 98, 0.25)',
        },
        charcoal: {
          DEFAULT: '#0F172A',
          muted: '#475569',
          light: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-ibm-arabic)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'crisp': '0 1px 3px 0 rgba(10, 25, 47, 0.05), 0 1px 2px -1px rgba(10, 25, 47, 0.05)',
        'floating': '0 10px 30px -5px rgba(10, 25, 47, 0.08), 0 4px 6px -2px rgba(10, 25, 47, 0.03)',
        'card': '0 4px 20px -2px rgba(10, 25, 47, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
