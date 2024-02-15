/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        asparagus: '#7FB069',
        flame: '#D36135',
        fawn: '#E6AA68',
        vanilla: '#ECE4B7',
        coolGray: '#938BA1',
        payne: '#5E6973',
        snow: '#FFF7F8',
      },
      zIndex: {
        1000: 1000,
      },
    },
  },
  plugins: [],
};
