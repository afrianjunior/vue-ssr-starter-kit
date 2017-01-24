const webpack = require('webpack')
const path = require('path')
const config = require('../config.js')
const vueConfig = require('./vue-loader.config')

process.env.USERNAME_ENV = config.username
process.env.PASSWORD_ENV = config.password

if(config.isDev) {
  process.env.BASE_URL_ENV = config.APIDev
} else {
  process.env.BASE_URL_ENV = config.APIProd
}

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'es6-promise', 'lru-cache']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: 'vue',
      Axios: 'axios-es6',
      Vuetify: 'vuetify'
    }),
    new webpack.LoaderOptionsPlugin({
      vue: vueConfig
    })
  ]
}
