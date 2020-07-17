//https://blog.csdn.net/qq_32682137/article/details/82426401
// 原型继承 和 class继承
// 原型是如何实现继承的？ class如何实现继承？ class本质是什么？
// 其实在js中并不存在类
// class只是一个语法糖 存在类这样的思想
// class本质是函数
class Person {

}

console.log(Person instanceof Function)

// 继承的本质就是复制，即重写原型对象，代之以一个新类型的实例
// 原型链继承
function SuperType() {
  this.prototype = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubTYpe() {
  this.subproperty = false
}
console.log(SuperType.prototype)
// {constructor: ƒ}
// constructor: ƒ SuperType()
// __proto__: Object
console.log(new SuperType())
// SuperType {prototype: true}
// prototype: true
// __proto__:
// constructor: ƒ SuperType()
// __proto__: Object


var instance = new SubTYpe()
console.log(instance.getSuperValue()) //false

// 想让 B继承A，只需要看A的原型链上有些什么东西，然后把B的原型重写成A的原型链上的东西




//借用构造函数继承  缺点
//只能继承父类的属性和方法，不能继承原型上面的属性和方法
//不能实现复用，影响性能
function SuperType() {
  this.color = ['red','green','blue']
}
function SubTYpe() {
  SuperType.call(this)
}

var instance1 = new SubTYpe()
  instance1.color.push('black')
  console.log(instance1.color)
  // (4) ["red", "green", "blue", "black"]
  // 0: "red"
  // 1: "green"
  // 2: "blue"
  // 3: "black"
  // length: 4
  // __proto__: Array(0)
  var instance2 = new SubTYpe()
  console.log(instance2.color)
  // (3) ["red", "green", "blue"]
  // 0: "red"
  // 1: "green"
  // 2: "blue"
  // length: 3
  // __proto__: Array(0)



// 组合继承 （最常见的继承方式）
// 组合继承（结合原型链继承 和 借用构造函数继承）
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}
function Child(value) {
  Parent.call(this,value)//构造函数
}
Child.prototype = new Parent()//原型链，改变子类的原型

// child的__proto__原本指向Child，现在指向Parent
const child = new Child(1)
child.getValue() //1


// 寄生组合继承
//该方式是为了优化组合继承中的缺点:继承父亲函数时调用了构造函数

function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}
function Child(value) {
  Parent.call(this,value)//构造函数
}
//Child.prototype = new Parent()//原型链，改变子类的原型
// Child.prototype = Object.create(Parent.prototype,{ //{...Parent.prototype}
//   constructor:{
//     value:Child,
//     enumerable:false,
//     writable:true
//   }
// })
//和上面的写法意思一样

let pro = Object.create(Parent.prototype)//创建父类原型的一个副本
pro.constructor =Child //弥补因重写原型而失去的默认constructor属性
Child.prototype = pro //将新创建的对象赋值给子类的原型
const child = new Child(1)
child.getValue() //1



// Class继承
// class继承是组合继承的效果
class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val) 
  }
}

class Child extends Parent{
  constructor(value) {
    super(value) //Parent.call(this,value)
    this.val = value
  }
}

let child = new Child(2)
child.getValue() //2
console.log(child instanceof Parent) //true
