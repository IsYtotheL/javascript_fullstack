var express = require('express')
// 1.创建 app
var app = express()
//当以 /public/ 开头的时候，去 ./public/目录中找找对应的资源
//http://localhost:3000/public/login.html
app.use('/public/',express.static('./public/'))

//当省略第一个参数的时候，则可以通过省略 /public 的方式来访问
//eg:http://localhost:3000/less.html
app.use(express.static('./public/'))

app.get('/',function(req,res) {
  // res.write('hello')
  // res.write('world')
  // res.end()
// 这两种方式都可
  //res.end('nihao world')
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
大家好，我是王一博
<body>
  `)
})
app.get('/login',function(req,res) {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  我是饶宇玲
</body>
</html>`)
})
app.listen(3000,function() {
  console.log('express app is running')
})