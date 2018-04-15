// const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const cssExtract = new ExtractTextPlugin('styles.css');

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// module.exports = {
//   entry: {
//     entry: [
//     'babel-polyfill',
//     './src/app.js',
//     ],
//     vendor: ['react', 'react-dom', 'react-router'],
//   },
//   output: {
//     path: path.join(__dirname, 'public', 'dist'),
//     filename: '[name].bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         loader: 'babel-loader',
//         test: /\.js$/, // files that end in .js
//         exclude: /node_modules/
//       },
//       {
//         test: /\.s?css$/,
//         use: process.env.NODE_ENV === 'production' ?
//         cssExtract.extract({
//           use: ['css-loader', 'sass-loader']
//         }) :
//         ['style-loader', 'css-loader', 'sass-loader']
//       }
//     ]
//   },
//   plugins: process.env.NODE_ENV === 'production' ? [
//     cssExtract,
//     new webpack.optimize.ModuleConcatenationPlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       beautify: false,
//       comments: false,
//       compress: {
//         warnings: false,
//         drop_console: true,
//         screw_ie8: true
//       },
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//     }),
//   ] : [new webpack.HotModuleReplacementPlugin()],
//   devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
//   devServer: {
//     contentBase: './public',
//     publicPath: '/dist/',
//     historyApiFallback: true,
//     hot: true,
//   }
// };




const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env == 'production';
  const cssExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // checks for any files ending in .js or .jsx
          exclude: [/node_modules/], // doesn't include node modules
          loader: 'babel-loader', // uses babel as transpiler
        },
        {
          test: /\.s?css$/, // checks for any files ending in .css, .sass, or .scss
          use: isProduction ?
          cssExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMaps: true
                }
              }, 
              {
                loader: 'sass-loader',
                options: {
                  sourceMaps: true
                }
              },            
            ]
          }) :
          ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      cssExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
  }
};