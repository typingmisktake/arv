/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
