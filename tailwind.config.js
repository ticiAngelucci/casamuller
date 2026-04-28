/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf7ef',
          100: '#f0e9da',
          200: '#e2d6bf',
        },
        olive: {
          300: '#a3b28c',
          500: '#70855f',
          700: '#4b5d43',
        },
        clay: {
          300: '#d9c19e',
          500: '#b58f66',
        },
        stone: {
          950: '#2f342d',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 22px 70px rgba(61, 62, 44, 0.12)',
      },
    },
  },
  plugins: [],
}
