/** @type {import('tailwindcss').Config} */

const customColors = {
  brandCharcoalBlack: "#171717",
  brandOnyxBlack: "#1E1E1E",
  brandElectricBlue: "#2D44BC",
  brandTextGray: "#aba9a9",
  brandGreen: "#3ca643",
  brandRed: "#d42626",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: customColors,
      backgroundColor: customColors,
      borderColor: customColors,
      textColor: customColors,
      fill: customColors,
    },
  },
  plugins: [],
};
