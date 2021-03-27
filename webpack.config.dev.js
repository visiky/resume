const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'),
  OpenBrowserPlugin = require('open-browser-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  entry: './src/main.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: "/dist/",
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      "less": path.join(__dirname, './src/less'),
      "constants": path.join(__dirname, './src/constants'),
      "utils": path.join(__dirname, './src/utils'),
      "components": path.join(__dirname, './src/components')
    },
    extensions: ['.tsx', '.ts', '.js', '.json', '.less', '.css']
  },
  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body 
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3000/' }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '/public')   // 打包public静态资源
    }])
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // loaders: ['babel-loader?retainLines=true'],
        use: 'babel-loader',
        include: /src/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8196'
      }]
  }
};
