const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js',
  // },
  devServer: {
    host: 'localhost',
    port: 9000,
    compress: true,
    hot: true,
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
