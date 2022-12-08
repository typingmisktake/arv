/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#41b883",
        secondary: "#34495e",
      },
    },
  },
  plugins: [],
};
