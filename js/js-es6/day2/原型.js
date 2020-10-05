//  构造函数方法很好用，但是存在浪费内存的问题。
//  每一个实例对象都要开辟一个新的内存空间，并且都有着相同的方法比如sing().

// 构造函数通过原型分配的函数是所有对象所共享的。
// js规定，每一个构造函数都有一个prototype属性，指向另一个对象。
// 注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。
// 我们可以把那些不变的方法，直接定义在prototype上，这样所有对象的实例就可以共享这些方法


// console.dir()非标准
// 该特性是非标准的，请尽量不要在生产环境中使用它！

// 在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。
 // 1. 构造函数的问题. 
 function Star(uname, age) {
  this.uname = uname;
  this.age = age;
  // this.sing = function() {
  //     console.log('我会唱歌');

  // }
}
Star.prototype.sing = function() {
  console.log('我会唱歌');
}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
console.log(ldh.sing === zxy.sing); //true
console.dir(Star); //[Function: Star]
console.log(Star) //[Function: Star]
ldh.sing();//我会唱歌
zxy.sing();//我会唱歌
// 2. 一般情况下,我们的公共属性定义到构造函数里面, 公共的方法我们放到原型对象身上