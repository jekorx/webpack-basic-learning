const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    host: '127.0.0.1',
    port: 7890,
    open: true
  }
})