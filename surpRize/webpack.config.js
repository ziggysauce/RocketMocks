const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssExtract = new ExtractTextPlugin('styles.css');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    entry: [
    'babel-polyfill',
    './src/app.js',
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/, // files that end in .js
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: process.env.NODE_ENV === 'production' ?
        cssExtract.extract({
          use: ['css-loader', 'sass-loader']
        }) :
        ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    cssExtract,
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ] : [new webpack.HotModuleReplacementPlugin()],
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './public',
    publicPath: '/dist/',
    historyApiFallback: true,
    hot: true,
  }
};