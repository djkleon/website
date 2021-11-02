// vue-cli的配置文件
module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}