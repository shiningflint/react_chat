const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  devtool: 'source-map',
  resolve: {// Resolve ES6 import without relative path
    modules: [
      path.resolve('./src/js'),
      path.resolve('./node_modules')
    ]
  },
  module: {// What to load before transpiling the JS, using babel for ES6
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader' },
    ],
  },
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
