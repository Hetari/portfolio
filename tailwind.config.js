/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // corePlugins: {
  //   aspectRatio: false,
  // },
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
      maxWidth: {
        '8xl': '1920px',
        '9xl': '2560px',
        '10xl': '3200px',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ':root': {
          '--heading-6': 'clamp(1rem, 0.928rem + 0.36vw, 1.25rem)',
          '--heading-5': 'clamp(1.13rem, 1.004rem + 0.63vw, 1.57rem)',
          '--heading-4': 'clamp(1.25rem, 1.0359rem + 1.0707vi, 1.9995rem)',
          '--heading-3': 'clamp(1.5625rem, 1.2474rem + 1.5755vi, 2.6653rem)',
          '--heading-2': 'clamp(1.9531rem, 1.496rem + 2.2854vi, 3.5529rem)',
          '--heading-1': 'clamp(3.5rem, 2.3571rem + 5.5143vi, 10.5rem)',
          '--heading-display': 'clamp(4rem, 1.203rem + 10.0714vw, 10.25rem)',
          '--heading-body': 'clamp(1rem, 0.6071rem + 1.0143vi, 2.25rem)',
          '--heading-1--alt': 'clamp(3rem, 2.25rem + 3.75vi, 5.625rem)',
          '--text-base': 'clamp(1rem,0.9286rem + 0.3571vi,1.25rem)',
          '--text-base--small': 'clamp(0.875rem,0.8393rem + 0.1786vi,1rem)',
          '--text-base--large': 'clamp(1rem,0.8571rem + 0.7143vi,1.5rem)',
        },
      });
    },
  ],
  // plugins: [require('@tailwindcss/aspect-ratio')],
};
