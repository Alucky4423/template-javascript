const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  // default output
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js',
  // },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
    }),
  ],
};
