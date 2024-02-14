/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: "1224px",
        xl: "1224px",
        "2xl": "1224px",
      }
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2563EB",
        black: "#0F172A",
        mgray: "#334155"
      }
    },
  },
  plugins: [],
}
