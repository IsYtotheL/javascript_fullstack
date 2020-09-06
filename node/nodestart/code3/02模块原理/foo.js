// 在Node中，每个模块内部都有一个自己的module对象
// 该 module 对象中，有一个成员叫: exports 也是一个对象
// 也就是说如果你需要对外导出成员，只需要把导出的成员挂载到 module.exports 中
// 我们发现，每次导出接口成员的时候都通过 module.exports.xxx = xxx 的方式很麻烦，点的太多了
// 所以，Node 为了简化你的操作，专门提供了一个变量：exports

// var module = {
//   exports: {
//  foo: 'bar',
    //add:function
//   }
// }

//也就是说在模块中还有这么一句代码
// var exports = module.exports

exports.foo = 'bar'

module.exports.add = function (x,y) {
  return x + y
} //{ foo: 'bar', add: [Function] }

//两者一致，那就说明，我们可以使用任意一方来导出
//console.log(exports == module.exports)

// 当一个模块需要导出单个成员的时候
// 直接给 exports 赋值是不管用的
//exports = 'hello'

exports.a = 123
exports = {}
exports.foo = 'bar'
module.exports.b = 456 //{ foo: 'bar', add: [Function], a: 123, b: 456 }

// 给 exports 赋值会断开 和 module.exports 之间的引用
// 同理，给 module.exports 重新赋值也会断开
module.exports = 'hello'
exports.foo = 'world'
// 谁来require我，谁就得到module.exports
// 默认在代码的最后一句
// 一定要记住，最后return 的是 module.exports
// 不是 exports
// 所以你给 exports 重新赋值不管用
// return module.exports


// 这里导致 exports !== module.exports
module.exports = {
   foo: 'bar'
}
// 但是这里又重新建立两者的引用关系
exports = module.exports

exports.foo = 'hello'

//-----------------

// {foo:bar}
exports.foo = 'bar'
// {foo:bar,a:123}
module.exports.a = 123
//exports !== module.exports
// 最终return 的是 module.exports
// 所以无论你 exports 中的成员是什么都没用
exports = {
  a:456
}
//{foo:'haha',a:123}
module.exports.foo = 'haha'

// 没关系
exports.c = 456
// 重新建立了引用关系
exports = module.exports
// {foo:'haha',a:789}
exports.a = 789

// 前面再牛逼，在这里都推翻了，重新赋值
// 最终得到的是 Function
module.exports = function () {
  console.log('hello')
}

// 真正去用的时候：
// 导出多个成员 ：exports.XXX = XXX
// 导出多个成员也可以 ： module.exports = {

// }
// 导出单个成员:module.exports