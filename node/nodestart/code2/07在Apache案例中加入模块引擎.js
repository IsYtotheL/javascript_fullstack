var http = require('http')
var fs = require('fs')
var template = require('art-template')
// 1.创建 Server
var server = http.createServer()

var wwwDir = 'E:/javascript_fullstack/node/nodestart/code2/www'
server.on('request',function (req,res) {
  var url = req.url
  fs.readFile('./template-apache.html',function (err,data) {
    if (err) { 
      return res.end('404 Noy Found.')
    }
    // 1.如何得到wwwDir 目录列表中的文件名和目录名
    //    fs.readdir
    // 2.如何将得到的文件名和目录名替换到 template.html中
    //    2.1在template.html中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
    //    2.2根据file生成需要的HTML内容
    // 只要你做了这两件事，那这个问题就解决啦
    fs.readdir(wwwDir,function(err,files) {
      if(err) {
        return res.end('Can not find www dir.')
      }
      
      //这里只需要使用模板引擎替换 data 中的 模板字符串就可以了
      // 数据就是 files
      // 然后去你的template.hmtl 文件中编写你的模板语法就可以了

     var htmlStr = template.render(data.toString(), {
       title: '哈哈'
     })
      // 3. 发送解析替换过后的响应数据
       res.end(htmlStr)
    })
   
  })
})

server.listen(3000,function() {
  console.log('running...')
})