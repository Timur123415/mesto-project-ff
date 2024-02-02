const presets = [
<<<<<<< HEAD
    ['@babel/preset-env', { 
      targets: { 
=======
    ['@babel/preset-env', { // какой пресет использовать
      targets: { // какие версии браузеров поддерживать
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
        edge: '17',
        ie: '11',
        firefox: '50',
        chrome: '64',
        safari: '11.1'
      },
  
<<<<<<< HEAD

=======
      // использовать полифиллы для браузеров из свойства target
      // по умолчанию babel использует поллифиллы библиотеки core-js
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
      useBuiltIns: "entry"
    }]
  ];
  
  module.exports = { presets }; 