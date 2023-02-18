/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        animated: "url('./img/animated_bg.svg')",
      },
      fontFamily: {
        sans: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
