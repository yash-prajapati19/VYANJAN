/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        kindaTransparent: 'rgba(255, 255, 255, 0.3)',
        kindaSimilarToTransparent: 'rgba(255, 255, 255, 0.6)',
        tintedGreen: '#7CFC00',
        superBlack: 'rgb(15, 15, 15)'
      }
    },
  },
  plugins: [],
}