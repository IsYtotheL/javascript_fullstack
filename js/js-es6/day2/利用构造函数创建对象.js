// 1.利用new Object() 创建对象
var obj1 = new Object();


// 2.利用对象字面量创建对象
var obj = {};

// 3.利用构造函数创建对象
function Star(uname,age) {
  this.uname = uname;
  this.age = age;
  this.sing = function() {
    console.log('我会唱歌');
  }
}

var wyb = new Star('王一博',18);
console.log(wyb);
wyb.sing();
// new 在执行时会做四件事情
// 1.在内存中创建一个新的空对象
// 2.让this指向这个新对象
// 3.执行构造函数里面的代码，给这个新对象添加属性和方法。
// 4.返回这个新对象（所以构造函数里面不需要return） 