/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "tt-firs-neue": "'TT Firs Neue'",
      },
      colors: {
        primary: "#01B7F2",
        secondary: "#000000",
        primaryOpacity: "#007ABB30",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
