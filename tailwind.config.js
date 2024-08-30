/** @type {import('tailwindcss').Config} */

const customColors = {
  brandCharcoalBlack: "#171717",
  brandOnyxBlack: "#353535",
  brandElectricBlue: "#2D44BC",
  brandTextGray: "#aba9a9",
  brandGreen: "#51b045",
  brandRed: "#d42626",
  brandLightBlue: "#42c2dd",
  brandBlue: "#334ED8",
  brandCeruleanBlue: "#2F49D1",
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
