/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        misty: "#FFE3E8",
        lavender: "#FCB1CC",
        cyclamen: "#FA75A6",
        silver: "#C4C4C4",
        battleship: "#868688",
        raisin: "#1E1E24",
      },
    },
  },
  plugins: [],
};
