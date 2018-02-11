const path = require('path');
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'temp/'
  },
  devServer: {
    contentBase: './',
    host: 'localhost',
    compress: true,
    port: 1108
  },
  module: {
    loaders: [{
      test: /.\js$/,
      exclude: /node_modules/,
      loaders: "babel-loader",
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}