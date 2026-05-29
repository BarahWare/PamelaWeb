/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4', // Rosa pastel
          400: '#f472b6',
          500: '#ec4899',
          DEFAULT: '#f9a8d4',
        },
        secondary: {
          DEFAULT: '#FEF9F3', // Crema
          dark: '#F3E8DF',
        },
        accent: {
          DEFAULT: '#D4AF37', // Dorado suave
          light: '#F8E9B6',
        },
        neutral: {
          DEFAULT: '#FAF8F5', // Blanco cálido
          dark: '#5C544F', // Para textos
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
