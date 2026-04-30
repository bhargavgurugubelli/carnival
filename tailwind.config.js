/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        gold: { 
          light: '#F5E6C8', 
          DEFAULT: '#C9A84C', 
          dark: '#9B7D2E' 
        },
        espresso: {
          light: '#3D2B1F',
          DEFAULT: '#1E1108',
          dark: '#0D0804',
        },
        cream: '#F8F1E4',
        warm: '#D4B896',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #F5E6C8 50%, #C9A84C 100%)',
      }
    },
  },
  plugins: [],
}
