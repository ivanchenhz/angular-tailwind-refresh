const colors = require('./src/colors');

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}
