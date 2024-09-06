/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fluro: ['fluro-light', 'sans-serif'],
        neue: ['neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

