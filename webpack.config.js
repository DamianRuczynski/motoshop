const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'pages', 'index', 'index.js'),
    'add-product': path.join(
      __dirname,
      'src',
      'pages',
      'add-product',
      'index.js'
    ),
    'product-details': path.join(
      __dirname,
      'src',
      'pages',
      'product-details',
      'index.js'
    ),
    cart: path.join(__dirname, 'src', 'pages', 'cart', 'index.js'),
  },
  devServer: {
    // contentBase is DEPRECATED, use static instead!
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
