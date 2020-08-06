let a = 123;
let b = 456;
let c = 789;

//exports 就是默认导出对象
exports.a = a;
module.exports.c = c;
//系统默认设置了：exports = module.exports