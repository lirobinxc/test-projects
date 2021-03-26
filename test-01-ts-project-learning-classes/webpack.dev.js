const webpackCommon = require('./webpack.common');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  ...webpackCommon,
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [new Dotenv()],
};
