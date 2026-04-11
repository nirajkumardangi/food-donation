/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}', 
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F74F22",
        "secondary-color": "#FFAC00",
        "dark-gray": "#0f172a",
        "deep-space": "#030712",
        "surface-light": "#1e293b",
        customLoader: '#FFFF00', 
        customButtonBg: '#FFA500', 
      },
      fontFamily: {
        kalam: ['"Kalam"', "cursive"],
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      }
    },
  },
  plugins: [],
};
