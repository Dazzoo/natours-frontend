/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'green-emerald-gradient': 'linear-gradient(to right bottom, #7dd56f, #28b487)',
      },
      backgroundColor: {
        'white-alabaster': '#f7f7f7',
      },
      colors: {
        'white-alabaster': '#f7f7f7',
        'grey-tundora': '#444',
        'green-emerald': '#55C57A',
        'grey-boulder': '#777777',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
