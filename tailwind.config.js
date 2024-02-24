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
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '56px',
      7: '72px',
      8: '80px',
      9: '96px',
      10: '120px',
    },
    extend: {
      colors: {
        primary: '#036C5F',
        secondary: '#293241',
        info: '#2F80ED',
        success: '#27AE60',
        warning: '#E2B93B',
        error: '#EB5757',
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
    },
  },
  plugins: [],
};
