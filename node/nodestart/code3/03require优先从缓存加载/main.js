require('./a')
//优先从缓存加载
// 由于在 a 中已经加载过
//所以这里不会重复加载
// 可以拿到其中的接口对象，但不会重复执行里面的代码
// 这样做的目的是避免重复加载，提高模块效率
var fn = require('./b')
console.log(fn)
//a.js被加载了
//b.js被加载了
// [Function]
// [Function]