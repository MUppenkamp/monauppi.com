/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  plugins: [require('tailwindcss-logical')],
  theme: {
    extend: {
      spacing: {
        'thumb-pad': '7px',
      },
      width: {
        nintendo: '30em',
      },
      borderWidth: {
        1: '1px'
      },
      colors: {
        'nintendo-base-color': '#FFE7F3',
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
        green: {
          100: "#f1f6ee",
          200: "#e3eedd",
          300: "#d6e5cc",
          400: "#c8ddbb",
          500: "#bad4aa",
          600: "#95aa88",
          700: "#707f66",
          800: "#4a5544",
          900: "#252a22"
        }
      }
    },
  },
};
