/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'prm-blue': '#1271b9',
        'prm-green': '#0f8a43',
        'prm-blue-light': '#2d8fd8',
        'prm-blue-dark': '#0a5a94',
        'prm-green-light': '#13a854',
        'prm-green-dark': '#0c6d35',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
