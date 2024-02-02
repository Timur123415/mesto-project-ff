const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  
  entry: { main: './src/pages/index.js' },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
<<<<<<< HEAD
    rules: [ 
      {
        test: /\.js$/, 
        use: 'babel-loader', 
        exclude: '/node_modules/' 
      },

    
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },

    
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 } 
        },
        'postcss-loader'] 
=======
    rules: [ // массив правил
      // Babel
      {
        test: /\.js$/, // регулярное выражение, которое ищет все js файлы
        use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
        exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
      },

      // Изображения и шрифты
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource' // переносить исходные файлы в конечную сборку в том же формате
      },

      // MiniCssExtractPlugin.loader и css-loader
      {
        test: /\.css$/, // применять это правило только к CSS-файлам
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 } // изменение порядка запуска, чтобы правильно работали импорты в css (сначала обработка в PostCSS)
        },
        'postcss-loader'] // PostCSS
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
      },
    ]
  },

<<<<<<< HEAD

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' 
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), 
=======
  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // путь к файлу index.html
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), // подключение MiniCssExtractPlugin
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
  ]
} 