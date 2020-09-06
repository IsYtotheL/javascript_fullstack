var fooExports = require('./foo')

console.log(fooExports)

var obj = {}
var obj1 = obj
obj1.foo = 'bar'
obj.foo = 'hello'
obj1 = {}
obj1.foo = 'world'
console.log(obj.foo) //hello

// 如果你实在分不清楚 exports 和 module.exports
// 你可以选择忘记 exports
// 而只使用 module.exports 也没问题
//
// module.exports.XXX = XXX
// module.exports = {}