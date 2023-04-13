const { merge } = require('webpack-merge');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  mode: 'production',
  // Docs: https://webpack.js.org/configuration/devtool/
  devtool: false,
  module: {
    rules: [
      // mini-css-extract-plugin
      // Separates css into `css/index.css` from `bundle.js`
      // Docs: https://www.npmjs.com/package/mini-css-extract-plugin
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    // mini-css-extract-plugin
    // Separates css into `css/index.css` from `bundle.js`
    // Docs: https://www.npmjs.com/package/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    // clean-webpack-plugin
    // This plugin removes the contents of the output directory before building.
    // Docs: https://www.npmjs.com/package/clean-webpack-plugin
    new CleanWebpackPlugin(),
  ],
  // Docs: https://webpack.js.org/configuration/performance/
  performance: {
    hints: 'warning',
  },
});
