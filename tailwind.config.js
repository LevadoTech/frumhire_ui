/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    height: {
      header: '80px'
    },
    padding: {
      header: '80px'
    },

    extend: {
      boxShadow: {
        focus: '0 0 0 2px rgba(137,137,137, .6)'
      },
      colors: {
        primary: '#121212',
        primary100: '#292929',
        primary200: '#4d4d4d',
        primary300: '#898989',
        primary400: '#b8b8b8',
        primary500: '#f5f5f5',
        white: '#ffffff',
        black: '#000000',
        error: '#ff5e5e',
        background: {
          secondary: 'rgba(88, 115, 254, 0.04)'
        },
        special: {
          teal: 'rgba(92,251,247,1)',
          teal2: 'rgba(92,251,247,.3)',
          purple: '#759bff',
          purple2: '#843cf6',
          orange: '#ffc480',
          orange2: '#ff763b',
          pink: '#fc5286',
          pink2: '#fbaaa2'
        }
      }
    }
  },
  plugins: []
};
/*
	#121212	(18,18,18)
  #292929 
#4d4d4d	(77,77,77)
#898989	(137,137,137)
#b8b8b8	(184,184,184)
#f5f5f5	(245,245,245)
*/
