/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        panel: {
          left:   '#FFFFFF',
          right:  '#C8DCF0',
          border: '#A8C5E2',
        },
        navy: '#0A3055',
      },
    },
  },
  plugins: [],
}
