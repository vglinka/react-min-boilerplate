const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackConfig = require('./webpack.prod.config.js');

// Plugins

module.exports = merge(webpackConfig, {
  plugins: [
    // webpack-bundle-analyzer
    // Docs: https://www.npmjs.com/package/webpack-bundle-analyzer
    new BundleAnalyzerPlugin(),
  ],
});
