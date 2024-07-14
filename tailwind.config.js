/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        background: {
          primary: '#ffffff',
          secondary: 'rgba(88, 115, 254, 0.04)'
        }
      }
    }
  },
  plugins: []
};
