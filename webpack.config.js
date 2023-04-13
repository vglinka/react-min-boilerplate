const webpack = require('webpack');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  // Optimization
  // Split your code into various bundles
  // which can then be loaded on demand or in parallel.
  // Docs: https://webpack.js.org/guides/code-splitting/
  // Docs: https://webpack.js.org/configuration/entry-context/#entry
  entry: {
    shared: [
      'react',
      'react-dom',
      'react-redux',
      '@reduxjs/toolkit',
      // `other-lib-from-"dependencies"-here`
    ],
    index: {
      // import: './src/index.js',
      import: './src/index.jsx',
      dependOn: ['shared'],
    },
  },
  // Docs: https://webpack.js.org/configuration/output/
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    // Docs: https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: ['.js', '.jsx', '.ts', '.tsx', '...'],
  },
  // Loaders
  module: {
    rules: [
      // js+
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      // ts
      {
        test: /.tsx?$/i,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      // css+
      {
        test: /\.(c|sa|sc)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // img
      // Import (or require) the target file(s) in one of the bundle's files:
      // `import img from './file.png';`
      // Docs: https://www.npmjs.com/package/file-loader
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // html-webpack-plugin
    // Generate HTML and more
    // Docs: https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      // Template settings:
      title: 'My project',
      // ... more in the documentation
    }),
    // copy-webpack-plugin
    // Copy './public/static/*' to './build/'
    // Docs: https://www.npmjs.com/package/copy-webpack-plugin
    new CopyPlugin({
      patterns: [
        { from: './public/static', to: './' },
        // { from: "other", to: "public" },
        // { from: "other", to: "public" },
      ],
    }),
  ],
  // Optimization
  // Docs: https://webpack.js.org/guides/code-splitting/
  optimization: {
    runtimeChunk: 'single',
  },
};

module.exports = config;
