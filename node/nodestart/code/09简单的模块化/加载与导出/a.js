// require 方法有两个作用：
// 1.加载文件模块并执行里面的代码
// 2.拿到被加载文件模块导出的接口对象


//在每个文件模块中都提供了一个对象：exports
//exports 默认是一个空对象
// 你要做的就是把所有需要被外部访问的成员挂载到这个 exports 对象中


// require('./b')
// console.log(foo) //ReferenceError: foo is not defined


var ret = require('./b')
var fs = require('fs')

console.log(ret.foo) //hello
console.log(ret.add(30,20)) //50
console.log(ret.age) //undefined
console.log(ret.ages) //19

ret.readFile('./a.js') //文件路径: ./a.js

fs.readFile('./a.js',function(err,data) {
  if (err) {
    console.log('读取文件失败')
  } else {
    console.log(data.toString())
  }
})