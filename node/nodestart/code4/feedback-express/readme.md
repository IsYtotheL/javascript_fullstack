- npm init -y
- npm i -S express

1. 在 express 中配置使用 art-template 模板引擎
- art-template - GitHub仓库
- art-template 官方文档
安装：
npm install --save art-template
npm install --save express-art-template
配置：
app.engine('art',require('express-art-template'))
使用:
app.get('/',function(req,res) {
  //express 默认会去项目中的views目录找 index.html
  res.render('index.html',{
    title:'hello world'
  })
})
如果希望修改默认的view 视图渲染存储目录，可以：
 //注意:第一个参数 views千万不要写错
 app.set('views',目录路径)

在Express中没有内置获取表单POST请求体的API，这里我们需要使用一个第三方包：body-parser
安装:
npm install --save body-parser

- https://v3.bootcss.com/examples/dashboard/
