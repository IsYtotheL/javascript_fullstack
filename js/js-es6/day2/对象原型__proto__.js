// 对象原型__proto__
// 对象会有一个属性
function Star(uname, age) {
  this.uname = uname;
  this.age = age;
}
Star.prototype.sing = function() {
  console.log('我会唱歌');
}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
ldh.sing();//我会唱歌
console.log(ldh); //Star { uname: '刘德华', age: 18 }// 对象身上系统自己添加一个 __proto__ 指向我们构造函数的原型对象 prototype
// __proto__对象原型和原型对象prototype 是等价的
console.log(ldh.__proto__ === Star.prototype);//true
// 方法的查找规则: 首先先看ldh 对象身上是否有 sing 方法,如果有就执行这个对象上的sing
// 如果么有sing 这个方法,因为有__proto__ 的存在,就去构造函数原型对象prototype身上去查找sing这个方法