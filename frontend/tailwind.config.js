/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': "url('./src/shared/assets/images/auth-background.jpg')"
      },
      fontFamily: {
        'lato': "Lato",
        'inter': "Inter"
      },
      colors: {
        'primary': '#232323',
        'secondary': '#B1B1B1',
        'success': '#16DBCC',
        'error': '#FF82AC',
        'b-gray': '#E6EFF5',
        'blue': '#2D60FF',
        'title': '#343C6A'
      }
    },
  },
  plugins: [],
}