var express = require('express')
// var bodyParser = require('body-parser')
var app = express()
var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]
app.use('/public',express.static('./public/'))

// 配置使用art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用art-template模板引擎
// express-art-template 是专门用来在 Express 中把art-template 整合到 Express中
// 虽然外面这里不需要记载art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
//art可以改其他名
app.engine('html',require('express-art-template'))
// Express 为Response 相应对象提供了一个方法:render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名',{模板数据})
// 第一个参数不能写路径，默认会去项目中的view 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到view目录中

// 如果想修改默认的 views 目录，则可以
// app.set('views',render函数的默认路径)
 
// app.get('/',function (req,res) {
//   res.render('404.html')
// })

// 配置body-parser 中间件（插件，专门用来解析表单POST请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
app.get('/admin',function (req,res) {
  res.render('admin/index.html',{
    title:'魔道祖师'
  })
})
app.get('/',function(req,res) {
  res.render('index.html',{
    comments:comments
  })
})
app.get('/post',function (req,res) {
  // res.send('post page')
  res.render('post.html')
})
// 当以post请求/post的时候，执行指定的处理函数
// 这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
// app.post('/post',functon(req,res) {
// 1.获取表单napost数据
// 2.处理
// 3.发送响应
// req.query只能拿get请求参数
// console.log(req.query)
// })
// app.post('/post',function (req,res) {
//   console.log(req.body)
//   // res.send('post')
// res.end
// res.redirect
// 这些方法Express会自动结束响应
// })
app.get('/pinglun',function(req,res) {
  // console.log(req.query)
  var comment = req.query
  comment.dateTime = '2020-08-05 19:11:23'
  comments.unshift(comment)
  res.statusCode = 302
  res.redirect('/')
  // res.setHeader('Loaction','/')
})
app.listen(3000,function() {
  console.log('running...')
})