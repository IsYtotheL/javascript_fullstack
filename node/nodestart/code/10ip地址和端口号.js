// ip地址用来定位计算机
// 端口号用来定位具体的应用程序
// 所有需要联网通信的应用程序都会占用一个端口号
var http = require('http')

//1. 创建 Server
var server = http.createServer()

//2. 监听 request 请求事件，设置请求处理函数
server.on('request',function(req,res) {
  // console.log('收到请求了，请求路径是：' + req.url)
 console.log('收到请求了，请求路径是：' + req.url)
 console.log('请求我的客户端的端口号是:',req.socket.remotePort)
 
  res.end('hello nodejs')
})
//3. 绑定端口号，启动服务
server.listen(3000, function () {
  console.log('服务器启动成功，可以访问了')
})