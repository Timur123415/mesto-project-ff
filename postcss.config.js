const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' })
  ]
}; 
