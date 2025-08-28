/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'argentina': {
          'celeste': '#75AADB', // Celeste argentino
          'sun': '#FCBF49',     // Amarillo del sol
          'pearl': '#F5F5F5',   // Blanco perla
          'light': '#E8F4FF',   // Celeste muy claro
          'white': '#FFFFFF',   // Blanco puro
        }
      },
    },
  },
  plugins: [],
}