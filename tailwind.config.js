/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/assets/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        darkLeft: "#030C11",
        darkRight: "#010B3C",
        blueGreen: "#119DA4",
        whiteNeurona: "#F8F8F8",
        grayNeurona: "#979797",
        darkGrayNeurona: "#212537",
      },
      boxShadow: {
        blueGreen: "0px 4px 15px rgba(0, 169, 157, 0.7)",
      },
      fontFamily: {
        sans: ['"Helvetica Light"', "Arial", "sans-serif"],
        mono: ['"Courier New"', "monospace"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
