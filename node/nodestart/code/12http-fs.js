var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on('request', function (req,res) {
  var url = req.url
  if(url === '/') {
    // 肯定不这么干  不可取
   // res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>首页</h1></body></html> ')
  
   // 我们要发送的还是文件中的内容
   fs.readFile('./resource/index.html',function (err, data) {
     if(err) {
       res.setHeader('Content-Type','text/plain;charset=utf-8')
       res.end('文件读取失败，请稍后重试')
     } else {
       // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
       //res.end()支持两种数据类型
       res.setHeader('Content-Type','text/html;charset=utf-8')
       res.end(data)
     }
   }) //osChina  http COntentType 对照表
  } else if (url === '/img') {
    // url:统一资源定位符
    // 一个 url 最终其实是要对应到一个资源的
    fs.readFile('./resource/598.jpg',function (err, data) {
      if(err) {
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('文件读取失败，请稍后重试')
      } else {
        // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
        //res.end()支持两种数据类型
        res.setHeader('Content-Type','image/jpeg')
        res.end(data)
      }
    })
  }

})

server.listen(3000, function () {
  console.log('Server is running...')
})