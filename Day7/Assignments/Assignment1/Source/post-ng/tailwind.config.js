/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
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
