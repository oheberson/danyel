const { getCurrentFont } = require("./config/fonts.js");
const currentFont = getCurrentFont();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#faf8f5",
          100: "#f5f1ea",
          200: "#e8dfd0",
          300: "#d9cbb5",
          400: "#c9b39a",
          500: "#b89d7f",
          600: "#a08566",
        },
        pastel: {
          pink: "#f8e8e8",
          blue: "#e8f0f8",
          green: "#e8f5e8",
          yellow: "#faf5e8",
          lavender: "#f0e8f8",
          grey: "#d9d9d9ff",
        },
      },
      fontFamily: {
        sans: currentFont.fontFamily,
        display: currentFont.fontFamily,
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
