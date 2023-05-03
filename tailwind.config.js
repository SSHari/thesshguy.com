const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(var(--color-white))',
      gray: {
        50: 'hsl(var(--color-gray-50))',
        100: 'hsl(var(--color-gray-100))',
        200: 'hsl(var(--color-gray-200))',
        300: 'hsl(var(--color-gray-300))',
        400: 'hsl(var(--color-gray-400))',
        500: 'hsl(var(--color-gray-500))',
        600: 'hsl(var(--color-gray-600))',
        700: 'hsl(var(--color-gray-700))',
        800: 'hsl(var(--color-gray-800))',
        900: 'hsl(var(--color-gray-900))',
        950: 'hsl(var(--color-gray-950))',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Satoshi-Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
