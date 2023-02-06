/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : 'Poppins',
      },
      colors: {
        "primary": "#fffffe",
        "secondary": "#0369a1",
        "info": "#475569",
        "danger": "#FF0000"
      }
    },
  },
  plugins: [],
}
