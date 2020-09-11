// var fs = require('fs')

// // 文件操作中的相对路径可以省略 ./
// fs.readFile('./a.txt',function(err,data) {
//   if(err) {
//     return console.log('读取失败')
//   }
//   console.log(data.toString())
// })

// 在模块加载中，相对路径中的 ./不能省略
//require('package')

// 如果这里忽略了，则也是磁盘根目录
require('/foo')