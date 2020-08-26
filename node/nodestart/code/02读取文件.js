// 浏览器中的 JavaScript 是没有文件操作的能力的
// 但是 Node 中的 Javascript 具有文件操作的能力

//fs 是file-system 的简写，就是文件系统的意思
//在node 中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API
//例如：fs.readFile 就是用来读取文件的

//1.使用require方法加载fs核心模块
var fs = require('fs')

//2.读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数是一个回调函数
// 成功
// data 数据
// error null
// 失败
// data null
// error 错误对象  



// data
fs.readFile('./data/hello.txt',function (error,data) {
  console.log(data)
  // 文件中存储的其实都是二进制数据  0 1
  // 这里为什么看到的不是 0 和 1 呢？ 原因是二进制转为 16 进制了
  // 但是无论是二进制还是16进制，人类都不认识
  // 所以我们可以通过 toString 方法把其转化为我们都能认识的字符 
  //<Buffer 77 61 6e 67 79 69 62 6f 20 69 73 20 76 65 72 79 20 67 6f 6f 64>
 
 
  // 在这里就可以通过判断 error 来确认是否有错误发生
  if(error) {
    console.log('读取文件失败了')
  } else {
  console.log(data.toString())
  } //wangyibo is very good
})