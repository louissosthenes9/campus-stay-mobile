/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}','./screens/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './src/**/*.{js,ts,tsx}', './index.js', './index.tsx', './index.android.js', './index.ios.js'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
