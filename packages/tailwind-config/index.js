/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({});
    }),
  ],
};
