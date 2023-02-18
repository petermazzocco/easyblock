/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
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
