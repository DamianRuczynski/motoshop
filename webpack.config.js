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
