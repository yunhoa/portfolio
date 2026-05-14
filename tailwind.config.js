/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#07111f',
          900: '#0c1727',
          850: '#111e31',
          800: '#16243a',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34, 211, 238, 0.14), 0 18px 60px rgba(2, 8, 23, 0.36)',
      },
    },
  },
  plugins: [],
};
