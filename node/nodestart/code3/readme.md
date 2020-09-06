- 安装指定版本jQuery
 npm i jquery@1.11.0
- 掌握如何解析请求路径中的查询字符串
 + url.parse()
- 如何在Node中实现服务器重定向
 + header('location')
  * 301 永久重定向 浏览器会记住
   - a.com b.com
   - a 浏览器不会请求a了
   - 直接去跳到b 了
  * 302 临时重定向 浏览器不记忆
   - a.com b.com
   - a.com 还会请求 a
   - a 告诉浏览器你往b
  - Node 中的 Console(REPL)使用

6. Node中的模块系统
 使用NOde编写应用程序主要就是在使用
 - EcmaScript 语言
  + 和浏览器不一样，在Node中没有BOM、DOM
 - 核心模块
  + 文件操作的 fs
  + http 服务的 http'
  + url 路径操作模板
  + path 路径处理模块
  + os操作系统信息
 - 第三方模块
  + art-template
  + 必须通过npm下载才可以使用
 - 咱们自己写的模块
  + 自己创建的文件

6.0.1 什么是模块化
 - 文件作用域
 - 通信规则
   + 加载require
   + 导出

6.2 CommonJS模块规范
在Node中的JavaScript 还有一个很重要的概念；模块系统
 + 模块作用域
 + 使用require 方法用来加载模块
 + 使用exports 接口对象用来导出模块中的成员
 6.2.1 加载 require
 语法:
 var 自定义变量名称 = require('模块')
 两个作用：
  - 执行被加载模块中的代码
  - 得到被加载模块中的 exports 导出接口对象
 6.2.2 导出 exports
  - Node 中是模块作用域，默认文件中所有的成员只在当前文件模块有效
  - 对于希望可以被其他模块访问的成员，我们需要把这些公开的成员都挂载到 exports
导出多个成员（必须在对象中）:
  exports.a = 123
  exports.b = 'hello'
  exports.c = function () {
    consolelog('ccc')
  }
  exports.d = {
    foo: 'bar'
  }
导出单个成员（拿到的就是：函数、字符串）:
module.exports = 'hello'
// 以这个为准，后者会覆盖前者
module.exports = function (x,y) {
  return x + y
}

也可以这样来导出多个成员
module.exports = {
  add: function () {
    return x + y
  },
  str: 'hello'
}


- 原理解析
exports 和 module.exports 的一个引用：
console.log(exports === module.exports) // => true
exports.foo = 'bar'

//等价于
module.exports.foo = 'bar'