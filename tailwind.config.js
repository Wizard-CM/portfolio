/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./Javascript/HTML_Templates.js","./Javascript/script.js"],
  theme: {
    extend: {
      colors:{
        secondary_clr:"var(--secondary_color)",
        bg_secondary_clr:"var(--bg_secondary_color)"
      }
    },
  },
  plugins: [],
}
