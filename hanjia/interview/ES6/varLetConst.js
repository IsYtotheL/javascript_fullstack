// es6
// var let const 的区别
// 什么是变量提升 ? 什么是暂时性死区？

//hoisting（提升)
console.log(a) 
var a = 1

//提升的是声明
// var a
// console.log(a)
// a = 1

var a = 10 // var a , a= 10
var a // var a
console.log(a) //10
// var a
// var a
// a = 10
// console.log(a)

// 不仅变量会提升，函数也会提升

console.log(a) //f a() {}
function a() {} //函数的提升优先于变量的提升
var a = 1




var a = 1
let b = 1
const c = 1
console.log(window.b) //undefined
console.log(window.c) //undefined
conaole.log(window.a) //1


//let 和const 声明的变量不会挂再在window上
function test () { //暂时性死区
  console.log(a)
  let a 
}

test()
// VM361:2 Uncaught ReferenceError: Cannot access 'a' before initialization
//     at test (<anonymous>:2:15)
//     at <anonymous>:6:1

function test () { 
  console.log(a)
  var a 
}

test() //undefined

window: {
  a:null
  let b = 1
  const c = 1
  var d = 3
}
console.log(window.b) //undefined
console.log(window.a) //undefined
console.log(window.c) // undefined
console.log(window.d) // 3



// 为什么要存在提升？
function test1() {
  test2()
}
function test2() {
  test1()
}
test1()

// 提升的根本原因是为了解决函数间的相互调用

//总结：
// 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
// var 存在提升，我们能在声明之前使用。let\const 因为暂时性死区的原因，不能在声明前使用
// var 在全局作用域下声明变量会导致挂载在window 上，其他两者不会。
//let 和const 作用基本一致，但是后者声明的变量不能再次赋值


