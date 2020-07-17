// // typeof 是否能正确判断类型？ instanceof 能正确判断对象的原理是什么？
// // 答： typeof 对于原始类型来说，除了null,都可以正确显示类型,typeof对于对象来说，除了函数，都会显示object
// // instanceof 是通过原型链来判断的
// typeof 1 // "number"
// typeof '1' // "string"
// typeof undefined // "undefined"
// typeof true  // "boolean"
// typeof Symbol
// typeof Symbol() //"symbol"
// // eg. let a = Symbol(1)
// // typeof a  // symbol

// type0f [1,2] // "objext"
// typeof {} // "object"
// typeof console.log // "function"



// //Symbol函数的参数只是对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的
// let s1 = Symbol('foo');
// let s2 = Symbol('foo');
// s1 == s2 //false



// // 实现 instanceof 原理
let arr = new Array() // Array
// console.log(arr.__proto__) // []
// console.log(arr.__proto__.__proto__) //object
// // object.prototype 包含 arr.__proto__.__proto__
// arr instanceof Array

function _instanceof(left,right) {
  let leftValue = left.__proto__
  let rightValue = right.prototype
  while (true) {
    if (leftValue === null) { // object那一层也包括了
      return false
    }
    if (leftValue === rightValue) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}
console.log(_instanceof(arr,Array) ) // true

// 为什么是while?
//for:一般循环的次数是指定的次数
//while:一般不知道需要执行多少次，当达到指定目的后，结束循环。