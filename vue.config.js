// https://www.cnblogs.com/webBlog-gqs/p/9799445.html
const path = require('path')

module.exports = {
  pages: {
    index: {
      // 页面入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: '马克vue3jl'
    }
  },
  chainWebpack: config => {
    config.resolve.extensions
      .add(".css")
      .add(".scss")
      .add(".js")
      .add(".vue")
      .add(".json")
    config.resolve.alias
      .set("@", resolve("src"))
  }
}

function resolve(dir) {
  return path.join(__dirname, dir)
}