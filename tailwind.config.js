/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9B6BA7",     // Violet doux
        secondary: "#4D87A6",   // Bleu désaturé
        accent: "#F3C97A",      // Doré pastel
        info: "#7DC6DC",        // Bleu glacier
        muted: "#A69FBE",       // Gris-violet doux
        light: "#FAF7F2",       // Fond crème
      },
    },
  },
  plugins: [],
}
