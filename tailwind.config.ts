/** @type {import('tailwindcss').Config} */
const figmaVariables = require("./variableToken.ts").theme;

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app-components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        ...figmaVariables.spacing,
      },
      colors: {
        ...figmaVariables.colors,
      },
    },
  },
  plugins: [],
};
