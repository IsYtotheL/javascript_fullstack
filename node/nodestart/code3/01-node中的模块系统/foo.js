
var foo = 'bar'

function add(x,y) {
  return x + y
}
//exports = add //{}
// 如果某个模块需要直接导出某个成员，而非挂载的方式
// 那这个时候必须使用下面这种方式
//module.exports = add //[Function: add]

//你可以认为在每个模块的最后return 了这个exports

// 只能得到我想要给你的成员
// 这样做的目的是为了解决变量命名冲突的问题
//exports.add = add //{ add: [Function: add] }
// exports 是一个对象
// 我们可以通过多次为这个对象添加成员来实现对外导出多个
// module.exports = 'hello'
// module.exports = function (x,y) {
//   return x + y
// }

module.exports = {
  add: function () {

  },
  str: 'hello' 
}  //{ add: [Function: add], str: 'hello' }