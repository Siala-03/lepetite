/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        chalet: {
          black: '#0b0f0c',
          'rich-black': '#11150f',
          charcoal: '#1c211a',
          amber: '#b5762c',
          honey: '#d9a054',
          forest: '#2d3d2a',
          pine: '#1f2b1c',
          cream: '#e9e5d8',
          'warm-white': '#ffffff',
        },
      },
      fontFamily: {
        display: ['Chillax', 'sans-serif'],
        body: ['Chillax', 'sans-serif'],
        hero: ['American Typewriter', 'Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
