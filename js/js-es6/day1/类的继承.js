// class Father{
//   constructor() {

//   }
//   money() {
//     console.log(100)
//   }
// }
// class Son extends Father {

// }
// var son = new Son();
// son.money();


// super 关键字
// super 关键字 用于访问和调用对象父类上的函数。
// 可以调用父类的构造函数，也可以调用父类的普通函数
class Father {
  constructor (x,y) {
    this.x = x;
    this.y = y;
  }
  sum() {
    console.log(this.x + this.y);
  }
}
class Son extends Father {
  constructor(x,y) {
    // this.x = x;//ReferenceError: Must call super constructor in derived class 
    // this.y = y; //   before accessing 'this' or returning from derived constructor
    super(x,y);//调用了父类的构造函数  //3
  }
}
var son = new Son(1,2);
var son1 = new Son(11,23);
son.sum(); //3
son1.sum(); //34


class Fu {
  say () {
    return '我是爸爸';
  }
  sing() {
    console.log('唱')
  }
}
class Er extends Fu {
  say() {
    // console.log('我是儿子');
    console.log(super.say()+'的儿子')
    // super.say() 就是调用父类中的普通函数 say()
  }
}
var er = new Er();
er.say();  //我是儿子  //我是爸爸的儿子
er.sing(); //唱

// 继承中的属性或者方法查找原则：就近原则
// 1.继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的
// 2.如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法