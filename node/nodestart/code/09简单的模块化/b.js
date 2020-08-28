//console.log('b.js 文件被加载执行了')

console.log('b start')
console.log(add(10,20))
var foo = 'bbb'
require('./c.js')
console.log('b end')

// b start
// ccc
// b end