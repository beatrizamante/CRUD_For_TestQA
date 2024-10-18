/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darker': '#171717', 
        'medium': '#292F3D',
        'light': '#C97676',
        'lighter': '#F2F2F1'
      },
      fontFamily: {
        serif: ['Noto Serif', 'serif'],
      }
    },
  },
  plugins: [],
}