/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      0: '0px',
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2.5rem',
      5: '3rem',
      6: '3.5rem',
      7: '4.5rem',
      8: '5rem',
      9: '6rem',
      10: '8rem',
    },
    extend: {
      colors: {
        primary: {
          dark: '#02544C',
          DEFAULT: '#036C5F',
          light: '#D5E0DA',
        },
        secondary: '#293241',
        info: '#2F80ED',
        success: '#27AE60',
        warning: '#E2B93B',
        error: '#EB5757',
        blue: '#151B26',
        white: '#ffffff',
        black: {
          1: '#000000',
          2: '#141313',
          3: '#282828',
        },
        grey: {
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#858585',
          5: '#E0E0E0',
        },
      },
      animation: {
        'slow-spin': 'slowSpin 5s linear infinite',
      },
      keyframes: {
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
