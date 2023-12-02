/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangePrimary': '#F9690E',
        'bluePrimary': '#013243',
        'darkerGrey': '#a1a7ab',
        'lightGrey': '#F4F6F8',
        'veryLightGrey': '#f3f6f6',
        'veryLightOrange': '#F3E6A5',
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'thin': ['Inter', 'sans-serif', 'thin'],
    },
    fontWeight: {
      'extra-light': 100,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'bold': 700,
      'extra-bold': 800,
      'black': 900,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

