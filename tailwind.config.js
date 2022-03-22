module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        'initial-black': '#1D1D1D',
        'final-gray': 'rgba(21, 21, 21, 0)'
      },
      // fontFamily: {
      //   'basement': 'Basement Grotesque'
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
