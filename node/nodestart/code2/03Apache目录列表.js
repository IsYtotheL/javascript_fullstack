var http = require('http')
var fs = require('fs')
// 1.创建 Server
var server = http.createServer()

var wwwDir = 'E:/javascript_fullstack/node/nodestart/code2/www'
server.on('request',function (req,res) {
  var url = req.url
  fs.readFile('./template.html',function (err,data) {
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
      // 2.1 生成需要替换的内容
      var content = ''
      files.forEach(function (item) {
        // 在EcmaScript 6 的 ` 字符串中，可以使用${}来引用变量
        content += `
        <tr>
          <td data-value="apple/"><a class="icon dir" href="/E:/javascript_fullstack/node/nodestart/code2/www/apple/">${item}/</a></td>
          <td class="detailsColumn" data-value="0"></td>
          <td class="detailsColumn" data-value="1598875779">2020/8/31 下午8:09:39</td>
        </tr>
        `
       
      })
      //2.3 替换
      data = data.toString()
      data = data.replace('^_^',content)
      // 3. 发送解析替换过后的响应数据
       res.end(data)
    })
   
  })
})

server.listen(3000,function() {
  console.log('running...')
})