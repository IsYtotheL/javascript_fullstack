var http = require('http')

//1. 创建 Server
var server = http.createServer()

//2. 监听 request 请求事件，设置请求处理函数
server.on('request',function(req,res) {
  // console.log('收到请求了，请求路径是：' + req.url)
 
 
  // res.write('hello')
  // res.write(' world')
  // res.end()

  // 上面的方式比较麻烦，推荐使用更简单的方式，直接使用end的同时发送响应数据
  // res.end('hello nodejs')
  // 根据不同的请求路径发送不同的响应结果
  // 1.获取请求路径
  // req.url 获取到的是端口号之后的那一部分路径
  // 也就是说所有的url都是以/开头的
  // 2.判断路径处理响应
  var url = req.url
  //// res.end(url)


  // if (url === '/') {
  //   res.end('index page')
  // } else if (url === '/login') {
  //   res.end('login page')
  // } else {
  //   res.end('404 Not Found.')
  // }

  if(url === '/products') {
    var products = [
      { 
        name: '苹果 X',
        price:8888
      },
      {
        name:'菠萝 X',
        price:5000
      },
      {
        name: '小辣椒 X',
        price:6000
      }
    ]
    //响应内容只能是二进制数据或者字符串
    // 数字  对象  数组 布尔值 什么的都不行
    res.end(JSON.stringify(products)) //数组转字符串
  }
})
//3. 绑定端口号，启动服务
server.listen(3000, function () {
  console.log('服务器启动成功，可以访问了')
})