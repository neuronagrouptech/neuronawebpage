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

      fontSize: {
        xs: ["0.75rem", "1rem"], // 12px font size with 16px line height
        sm: ["0.875rem", "1.25rem"], // 14px font size with 20px line height
        base: ["1rem", "1.5rem"], // 16px font size with 24px line height
        lg: ["1.125rem", "1.75rem"], // 18px font size with 28px line height
        xl: ["1.25rem", "1.75rem"], // 20px font size with 28px line height
        "2xl": ["1.5rem", "2rem"], // 24px font size with 32px line height
        "3xl": ["1.875rem", "2.25rem"], // 30px font size with 36px line height
        "4xl": ["2.25rem", "2.5rem"], // 36px font size with 40px line height
        "5xl": ["3rem", "1"], // 48px font size with line height of 1
        "6xl": ["3.75rem", "1"], // 60px font size with line height of 1
        "7xl": ["4.5rem", "1"], // 72px font size with line height of 1
        "8xl": ["6rem", "1"], // 96px font size with line height of 1
        "9xl": ["8rem", "1"], // 128px font size with line height of 1
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")
  ],
};
