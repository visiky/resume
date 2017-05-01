const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin');

require('babel-polyfill');

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:3000`,
    'webpack/hot/dev-server',
    'react-hot-loader/patch',
    './src/app/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body 
    }),
    new OpenBrowserPlugin({url: 'http://localhost:3000/',browser:'Google Chrome'})
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      // loaders: ['babel-loader?retainLines=true'],
      loaders: ['react-hot-loader/webpack','babel-loader?presets[]=es2015,presets[]=react'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/
    },{
      test: /\.css$/, // Only .css files
      loader: 'style-loader!css-loader' // Run both loaders
    },{
      test: /\.less$/, // Only .css files
      loader: 'style-loader!css-loader!less-loader' // Run both loaders
    }]
  }
};
