/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#FF7900',
          secondary: '#F16E00',
        },
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#F8F8F8',
          100: '#EEEEEE',
          200: '#DDDDDD',
          300: '#CCCCCC',
          400: '#999999',
          500: '#666666',
          600: '#595959',
        },
      },
    },
  },
  plugins: [],
};