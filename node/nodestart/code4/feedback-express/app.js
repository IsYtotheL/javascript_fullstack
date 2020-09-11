var express = require('express')

var app = express()
app.use('/public',express.static('./public/'))

// 配置使用art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用art-template模板引擎
// express-art-template 是专门用来在 Express 中把art-template 整合到 Express中
// 虽然外面这里不需要记载art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('art',require('express-art-template'))
// Express 为Response 相应对象提供了一个方法:render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名',{模板数据})
// 第一个参数不能写路径，默认会去项目中的view 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到view目录中


app.get('/',function (req,res) {
  res.send('404.art')
})

app.get('/post',function (req,res) {
  res.send('post page')
})

app.listen(3000,function() {
  console.log('running...')
})