// entry: src/app.js --> output: public/scripts

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
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
        use: [
          'style-loader', // put content into DOM
          'css-loader', // read css files
          'sass-loader' // read sass files
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
};