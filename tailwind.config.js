/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      fraunces: ["Fraunces", "sans"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
    screens: {
      xs: "377px",
      md_1: "530px",
    },
  },
  plugins: [],
};
