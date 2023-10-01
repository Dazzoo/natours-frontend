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
        'orange-red-gradient': 'linear-gradient(to right, #ff7730, #eb4d4b);',
      },
      backgroundColor: {
        // 'white-alabaster': '#f7f7f7',
        'white-alabaster': 'var(--white-alabaster)',
        'white-ghost': '#f9f9f9',
        'grey-concrete': '#f2f2f2',
      },
      colors: {
        // 'white-alabaster': '#f7f7f7',
        'white-alabaster': 'var(--white-alabaster)',
        'grey-tundora': '#444',
        'grey-tundora-lighter': '#4d4d4d',
        'green-emerald': '#55C57A',
        'grey-boulder': '#777777',
        'grey-dusty': '#999999',
        'orange-burning': '#ff7730',
        'red-error': '#ff0033',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
