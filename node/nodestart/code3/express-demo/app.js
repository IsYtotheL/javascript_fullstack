//https://www.expressjs.com.cn/starter/installing.html
//https://aui.github.io/art-template/express/
// 0.安装
// 1.引包
var express = require('express')
// 2.创建你服务器应用程序
// 也就是原来的http.createServer
var app = express()
// 当服务器收到get请求 / 的时候，执行回调处理函数

// 在Express中开放资源就是一个API的事
//公开指定目录
// 只要这样做了，你就可以通过 /public/xx 的方式访问public 目录中的所有资源了
app.use('/public',express.static('./public/'))
app.use('/static',express.static('./static/'))

// 模板引擎，在Express也就是一个API的事
// 得到路径
// 一个一个的判断
// 以前的代码很丑
app.get('/',function (req,res){
  res.send('hello express!')
})
app.get('/about',function (req,res){
  // 在expreess中可以直接req.query来获取查询字符串参数
  console.log(req.query)
  res.send('我是express!')
})

app.get('/pinglun',function(req,res) {
  //req.query
  // 在Express中使用模板引擎有更好的方式;res.render('文件名.{模板对象})
  // 可以自己尝试去看 art-template 官方文档：如何让art-template 结合 express来使用
})
// 相当于 server.listen
app.listen(3000,function() {
  console.log('app is running at port 3000')
})