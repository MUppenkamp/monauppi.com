/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  plugins: [require('tailwindcss-logical')],
  theme: {
    extend: {
      width: {
        nintendo: '30em',
      },
      borderWidth: {
        1: '1px'
      },
      colors: {
        hotpink: {
          100: "#ffe1f0",
          200: "#ffc3e1",
          300: "#ffa5d2",
          400: "#ff87c3",
          500: "#ff69b4",
          600: "#cc5490",
          700: "#993f6c",
          800: "#662a48",
          900: "#331524"
        },
      }
    },
  },
};
