const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     height: {
       '3/10': '30%'
     },
     width: {
       '19/40': '47.5%'
     },
     margin: {
       '4%': '4%',
       '1/40': '2.5%',
     },
     gradientColorStops: {
       'blue-1': '#a1c4fd',
       'blue-2': '#c2e9fb',
     },
     colors: {
      'bg-complement': '#FB3EE4',
      'blue-23': '#B7DDFC',
      'blue-navy': '#13294B',
      'beige': "#F0E7DB",
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};