/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['title'],
        body: ['body'],
        fancy: ['Bricolage Grotesque'],
      },
      colors: {
        primary: '#E6E6E1',
        secondary: '#3d3a36',
        tertiary: '#393632',
        fourthly: '#857E74',
        fancy: '#A09C98',
        quinary: '#7c7c73',
      },
      screens: {
        '2xs': '420px',
        xs: '512px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
};
