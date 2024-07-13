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
        // 'timber-wolf': {
        //   50: '#f7f6f5',
        //   100: '#ecebe8',
        //   200: '#d8d5cf',
        //   300: '#c0bbb1',
        //   400: '#a69d91',
        //   500: '#94887b',
        //   600: '#877a6f',
        //   700: '#71665d',
        //   800: '#5d544f',
        //   900: '#4d4641',
        //   950: '#282422',
        // },

        'flax-smoke': {
          50: '#f4f4f1',
          100: '#e8e8df',
          200: '#d2d3c3',
          300: '#b6b79f',
          400: '#9b9c7f',
          500: '#838566',
          600: '#62644c',
          700: '#4d4e3d',
          800: '#404133',
          900: '#38392e',
          950: '#1c1d16',
        },
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
