/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        p_purple: '#66517C', // primary color
        s_blue: '#707D9D', // secondary color
        a_yellow: '#EDAD4C', // accent color
        o_beige: "#FCF9BF", // other color 
        o_red: "#D14A46", // other color
      },
    },
  },
  plugins: [],
}
