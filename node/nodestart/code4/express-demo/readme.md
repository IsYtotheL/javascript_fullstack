 - 手动建一个package,json
 - npm init --yes
 - npm install express

 1. 修改完代码自动重启
 我们这里可以使用一个第三方命名行工具：nodemon 来帮我们解决频繁修改代码重启服务器问题。
 nodemon 是一个基于Node/js开发的一个第三方命令行工具，我们使用的时候需要独立安装:
 # 在任意目录安装都可以
 - npm install --global nodemon 
 安装完毕之后，使用:
 - node app.js
 # 使用 nodemon
 nodemon app.js
 只要是通过 nodemon app.js 启动的服务，则会监视你的文件变化，当文件发生变化的时候，自动帮你重启服务器
 2. 基本路由router
  路由其实就是一张表
  这个表里面有具体的映射关系
  - get:
    //当你以GET方法请求 / 的时候，执行对应的处理函数
  - app.get('/',function(req,res) {
    res.send('Hello World')
  })
  - post:
    //当你以POST方法请求 / 的时候，执行对应的处理函数
    app.post('/',function(req,res) {
      res.send('Got a Post request')
    })

    3. 静态服务
     - /public 资源
     app.use(express.static('public))
     - /files资源
     app.use(express.static('files'))
     - /public/xxx
     app.use('/public',express.static('public'))
     - /static/xxx
     app.use('/static',express.staric('public'))