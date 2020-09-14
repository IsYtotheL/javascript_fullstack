// function sum(a,b,callback) {
//   console.log(1)
//   setTimeout(function () {
//     var ret1 = a + b
//     callback(ret1)
//   },1000)
// }
// sum(10,20,function(ret) {
//   console.log(ret)
// })

callback = function(ret) {
  console.log(ret)
}
var ret = 10
callback(ret)
// 10