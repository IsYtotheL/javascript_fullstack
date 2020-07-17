// new 的原理是什么？通过new的方式创建对象和通过字面量创建对象有什么区别？

function Person(name) {
  this.name = name
}
//var wn = Person('蜗牛') // undefined 因为wn拿不到返回值
//var wn = new Person('蜗牛') //Person { name: '蜗牛' } 把this绑定到实例
// var wn = create(Persom('蜗牛'))
var wn = create(Person,'蜗牛')
// console.log(wn) //wn instanceof Person // wn.__proto__ = Person.prototype
//1.新生成一个对象
//2.连接到原型
//3.绑定this
//4.返回新对象
function create () {
  let obj = {}
  let Con = [].shift.call(arguments)  //arguments ===> {Person,'蜗牛'}
  console.log(Con) //[Function: Person]
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj,arguments)
  return result instanceof Object ? result : obj
}