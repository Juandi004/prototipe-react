/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#4D4DFF',
          200: '#8d7aff',
          300: '#ffdcff',
        },
        accent: {
          100: '#FF4D4D',
          200: '#ffecda',
        },
        text: {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        back: {
          100: '#1A1A1A',
          200: '#292929',
          300: '#404040',
        },
      },
    },
  },
  plugins: [],
};
