var fs = require('fs')
// error
// 成功:
// 文件写入成功
// error 是null
// 失败:
// 文件写入失败
// error 就是错误对象
fs.writeFile('./data/你好.md','酷盖王一博',function(error) {
  if (error) {
    console.log('写入失败')
  } else {
  console.log('文件写入成功')
  }
})