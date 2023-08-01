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
        'green-emerald-gradient':
          'linear-gradient(to right bottom, rgba(125, 213, 111, 1), rgba(40, 180, 135, 1))',
        'green-emerald-gradient-85':
          'linear-gradient(to right bottom, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85))',
      },
      backgroundColor: {
        'white-alabaster': '#f7f7f7',
      },
      colors: {
        'white-alabaster': '#f7f7f7',
        'grey-tundora': '#444',
        'green-emerald': '#55C57A',
        'grey-boulder': '#777777',
        'grey-dusty': '#999999',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
