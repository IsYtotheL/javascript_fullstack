// https://blog.csdn.net/qq_38912819/article/details/80597101
//https://www.jianshu.com/p/8573cdcde863
//https://www.cnblogs.com/Yellow-ice/p/10639029.html
//https://www.jianshu.com/p/ae4e566212ff
// 模块化
// 为什么要使用模块化？ 都有哪几种方式可以实现模块化，各有什么特色？

// 模块化可以给我们带来好处：
//1.解决命名冲突
//2.提高复用性
//3.提高代码可维护性


//立即执行函数  兼容性好

(function(globalVariable) {
  globalVariable.test = function () {}
  // ...声明各种变量、函数 都不会污染函数
})(globalVariable)

//AMD和CMD （现在已经很少见了）没什么特色

//AMD
define(['require','dependency'],function(require,factory){
  'use strict'
});
define(['./a','./b'],function(require,factory){
  a.do()
  b.do()
});

//CMD
define(function(require,exports,module){
  // 加载模块
  //可以把 require写在函数体的任意位置实现延迟加载
  var a = require('./a')
  a.doSomething()
});

// CommonJS  一般用于服务端，node.js遵循此规范
module.exports = {  //a.js
  a:1
}
// or
exports.a = 1

var module = require('./a.js.js') //这个是b.js
module.a //1

// module.exports = {
//   a:1
// }
// var module = {
//   id:'xxx',
//   exports:{}
// }

var exports = module.exports
var load = function(module) {
  //导出东西
  var a = 1
  module.exports = a
  return module.exports
}


//ES Module  客户端使用此规范
//1. CommonJS 支持动态导入，也就是 require(${path}/XPathExpression.js),
//后者目前不支持，但是已有提案
//2.CommonJS 是同步导入，因为用于服务端，文件都在本地，
//同步导入即使卡住主线程影响也不大，而后者是异步导入，因为用于浏览器，
//需要下载文件，如果也采用同步导入会对渲染有很大影响
//3.CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，
//所以如果想要更新值，必须重新导入一次，但是ESMOdule采用实时绑定的方式，
//导入导出的值都指向同一内存地址，所以导入值会跟随导出值变化
//4。 ES module 会编译成 require/exportd 来执行的

// 引入模块API
import XXX from './a.js.js'
import {XXX} from './a.js.js'
//导出模块API
export function a() {}
export default function() {} //匿名函数