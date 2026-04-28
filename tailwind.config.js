/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fcfffe',
          100: '#eef5f2',
          200: '#dbe8e2',
        },
        olive: {
          300: '#9ebfb5',
          500: '#548578',
          700: '#2d5a51',
        },
        clay: {
          300: '#efc3a3',
          500: '#cf8d63',
        },
        stone: {
          950: '#1c2d33',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 80px rgba(55, 44, 31, 0.12)',
      },
    },
  },
  plugins: [],
}
