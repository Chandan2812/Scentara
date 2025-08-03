/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A1D1DA", // your brand color
        gold: "#D4AF37", // for premium highlights
      },
      fontFamily: {
        brand: ['"Passions Conflict"', "cursive"], // logo & headings
        handwriting: ['"Annie Use Your Telescope"', "cursive"], // fancy text
        body: ['"Inter"', "sans-serif"], // fallback for body text
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)", // subtle shadow for cards/nav
      },
    },
  },
  plugins: [],
};
