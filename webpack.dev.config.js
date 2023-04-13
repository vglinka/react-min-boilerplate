const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  mode: 'development',
  // Docs: https://webpack.js.org/configuration/devtool/
  devtool: 'eval-source-map',
  devServer: {
    // Enable gzip compression for everything served
    // Docs: https://webpack.js.org/configuration/dev-server/#devservercompress
    compress: true,
    // When using the HTML5 History API, the index.html page will likely
    // have to be served in place of any 404 responses.
    // Docs: https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    historyApiFallback: true,
    // Docs: https://webpack.js.org/configuration/dev-server/#devserverhot
    hot: true,
    // Docs: https://webpack.js.org/configuration/dev-server/#devserveropen
    open: {
      app: {
        // The site will open in the selected browser:
        // name: 'chromium',
        // arguments: ['--incognito', '--new-window'],
      },
    },
    port: 3000,
  },
});
