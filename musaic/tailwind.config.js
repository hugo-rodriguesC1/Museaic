module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "montserrat": "Montserrat"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
