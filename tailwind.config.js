/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        radiantPink: "#D4537E",
        radiantCoral: "#F0997B",
        radiantGold: "#FAC775",
        radiantOrange: "#F2761F",
        radiantCream: "#F5F0E8",
        radiantWhite: "#FAFAFA",
        radiantInk: "#1A1A1A",
        radiantMuted: "#6B6B6B"
      },
      boxShadow: {
        glow: "0 18px 50px rgba(212, 83, 126, 0.18)"
      }
    }
  },
  plugins: []
};

module.exports = config;
