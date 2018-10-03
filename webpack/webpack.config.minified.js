'use strict';

const webpack = require('webpack');
const OptimizeJsPlugin = require('optimize-js-plugin');

const defaultConfig = require('./webpack.config');

module.exports = Object.assign({}, defaultConfig, {
  bail: true,

  devtool: undefined,

  mode: 'production',

  output: Object.assign({}, defaultConfig.output, {
    filename: 'remeasure.min.js',
  }),

  plugins: defaultConfig.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new OptimizeJsPlugin({
      sourceMap: false,
    }),
  ]),
});
