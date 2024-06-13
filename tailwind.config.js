/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['title'],
        body: ['body']
      },
      colors: {
        primary: '#E6E6E1',
        secondary: '#CECEC5',
        tertiary: '#A09C98',
        fourthly: '#8f8c88',

        'primary-dark': '#5B5751',
        'secondary-dark': '#3d3a36',
        'tertiary-dark': '#524E48',
        'fourthly-dark': '#857E74'
      }
    }
  },
  plugins: []
};
