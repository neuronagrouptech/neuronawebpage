/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

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
        blueGreen: '0px 4px 15px rgba(0, 169, 157, 0.7)',
      },
      fontFamily: {
        helvetica: ['"Helvetica Light"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
