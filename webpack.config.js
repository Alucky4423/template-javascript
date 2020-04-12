const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
  devServer: {
    host: 'localhost',
    port: 9000,
    compress: true,
    open: true,
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
