// 一种数据类型
// 参数
// 返回值
// 函数太灵活了。无所不能
// 一般情况下，把函数作为参数的目的就是为了获取函数内部的异步操作结果
// js 单线程
// function add(x,y) {
//   return x + y
// }
// add(10,20)

// console.log(1)
// // 不会等待
// setTimeout(function() {
//   console.log(2)
//   console.log('hello')
// },0)
// console.log(3)

// function add(x,y) {
//   console.log(1)
//   setTimeout(function () {
//     console.log(2)
//     var ret = x + y
//     return ret
//   },1000)
//   console.log(3)

// }
// // 到这里执行就结束了，不会等到前面的定时器，所以直接就返回了默认值 undefined
// console.log(add(10,20))

// 1
// 3
// undefined
// 2

// 注意：凡是需要得到一个函数内部异步操作的结果
// setTimeout
// readFile
// writeFile
// ajax
// 这种情况必须通过：回调函数

function sum(a,b,callback) {
  // callback 就是回调函数
  // var x = 10
  // var y = 20
  // var callback = function (ret) {console.log(ret)}
  console.log(1)
  setTimeout(function () {//异步操作
    var ret1 = a + b
    callback(ret1) //实参
  },1000)
}
sum(10,20,function(ret) { //function(ret) 就是callback回调函数
  console.log(ret)
})
// 1
// 30