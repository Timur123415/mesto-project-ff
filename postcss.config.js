const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
<<<<<<< HEAD
  plugins: [
    autoprefixer,
=======
  // подключите плагины к PostCSS
  plugins: [
    // подключите autoprefixer
    autoprefixer,
    // cssnano при подключении нужно передать объект опций
    // { preset: default } говорит о том, что нужно использовать
    // стандартные настройки минификации
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
    cssnano({ preset: 'default' })
  ]
}; 