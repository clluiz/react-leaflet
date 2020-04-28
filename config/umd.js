'use strict'

const Webpack = require('webpack')
const { join, resolve } = require('path')

module.exports = {
  entry: join(__dirname, '..', 'src', 'index.js'),

  mode: 'production',

  optimization: { minimizer: [] },

  output: {
    filename: './index.js',
    library: 'cria-react-leaflet',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    leaflet: {
      commonjs: 'leaflet',
      commonjs2: 'leaflet'
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: join(__dirname, '..', 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/i,
        use: ['file-loader']
      }
    ]
  },

  resolve: {
    modules: [resolve(__dirname), '..', 'node_modules'],
    extensions: ['.js', '.jsx']
  }
}