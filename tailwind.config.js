/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0B8F43',
        'academic-gold': '#B67A3C',
        'dark-charcoal': '#1E1E1E',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'alt-display': ['Merriweather', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'alt-body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fadeUp': 'fadeUp 0.6s ease-out',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'number-counter': 'number-counter 2s ease-out',
      },
      keyframes: {
        fadeUp: {
          'from': {
            'opacity': '0',
            'transform': 'translateY(30px)',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateY(0)',
          },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'number-counter': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
