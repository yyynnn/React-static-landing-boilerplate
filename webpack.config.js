/* eslint-disable no-var */
var path = require('path');
var ReactStaticPlugin = require('react-static-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, '/client/index.js')],

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: 'images/'
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new ReactStaticPlugin({
      routes: './client/routes.js',
      template: './client/template.js',
      renderToStaticMarkup: true
    }),
    new UglifyJSPlugin({
      compress: {
        warnings: true
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?name=[name].[ext]&outputPath=images/',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader?importLoaders=1!postcss-loader',
              options: {
                minimize: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client'),
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  }
};
