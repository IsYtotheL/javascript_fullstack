var fs = require('fs')

fs.readdir('E:/javascript_fullstack/node/nodestart/code2/www',function(err,files) {
  if(err) {
    return console.log('目录不存在')
  }
  console.log(files)
})