const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve('src')
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      // 标题
      title: 'Webpack',
      // 模版
      template: resolve('src/index.html'),
      // 给定的图标路径，可将其添加到输出html中
      favicon: resolve('src/assets/favicon.ico')
    })
  ]
}