const path = require('path');
const webpack = require('webpack');
var config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          },
          {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         },
          {
            test: /\.jsx?$/, // ends with js or jsx
            loader: 'babel-loader',
          },
          {
            test: /\.(png|jpg|svg)$/,
            use: {
              loader: 'url-loader',
            },
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
          }
       ]
    }
 }
 module.exports = config;