/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ani1: {
          "0%": { transform: "translateY(1px)" },
          "50%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(1px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
