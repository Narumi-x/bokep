/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['emerald', 'forest'],
    darkTheme: 'forest',
  },
}
