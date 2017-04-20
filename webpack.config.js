const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  {
    context: path.join(__dirname, 'src'),
    entry: {
      bundle: './index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          options: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    devServer: {
      contentBase: 'dist'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  {
    context: path.join(__dirname, 'src'),
    entry: {
      bundle: './index.css'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  sourceMap: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
              }
            ]
          })
        }
      ]
    },
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  }
]
