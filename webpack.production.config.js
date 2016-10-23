const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'client');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    `${APP_DIR}/index.js`,
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?/,
        loaders: ['react-hot', 'babel'],
        include: APP_DIR,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192', // inline base64 URLs for <=8k images, direct URLs for the rest
      },
    ],
  },
};
