/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      poppins: ["Poppins", "sans-serif"],
      volkhov: ["Volkhov", "serif"],
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

