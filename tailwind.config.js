/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#8B0000',
          light: '#A52A2A',
          dark: '#5C0000',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#DAA520',
          dark: '#8B6508',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          dark: '#F5EFEB',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

