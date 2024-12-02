module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Agregar pantalla personalizada "xs"
        'xs': '320px',
      },
    },
  },
  plugins: [],
};
