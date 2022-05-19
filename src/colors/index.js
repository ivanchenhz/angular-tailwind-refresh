const decorative = require('./decorative.json');
const functional = require('./functional.json');
const system = require('./system.json');

module.exports = {
  white: 'white',
  black: 'black',

  ...decorative.color,
  ...functional.color,
  ...system.color,
};
