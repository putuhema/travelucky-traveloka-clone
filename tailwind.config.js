/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      gray: '#f2f3f3',
      blue: { DEFAULT: '#0194f3', 500: '#0264c8' },
      orange: '#ff5e1f',
    },
  },
  plugins: [],
};
