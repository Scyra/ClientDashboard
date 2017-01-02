const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    `${__dirname}/src/app.js`
  ],
  output: {
    path: `${__dirname}/build/public`,
    filename: 'app.js',
    publicPath: '/'
  },
  target: 'web',
  cache: true,
  debug: true,
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: [['env', {'targets': {'browsers': ['last 2 versions']}}], 'react', 'latest']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=compressed'
      }
    ]
  },
  sassLoader: {
    includePaths: [`${__dirname}/node_modules`]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${__dirname}/src/index.html`,
    }),
    /*
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})*/
  ]
};