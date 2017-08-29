'use strict';

const path = require('path');
const webpack = require('webpack');

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  cache: true,

  devtool: '#source-map',

  entry: [path.resolve(__dirname, 'src', 'index.js')],

  externals: {
    react: {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    },
    'react-dom': {
      amd: 'react-dom',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: 'ReactDOM'
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
          failOnError: true,
          failOnWarning: false,
          formatter: require('eslint-friendly-formatter')
        },
        test: /\.js$/
      },
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          cacheDirectory: true,
          presets: [
            [
              'env',
              {
                loose: true,
                modules: false
              }
            ],
            'react',
            'stage-2'
          ]
        },
        test: /\.js$/
      }
    ]
  },

  output: {
    filename: 'remeasure.js',
    library: 'Remeasure',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },

  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV']), new LodashModuleReplacementPlugin()],

  resolve: {
    extensions: ['.js']
  }
};
