// function SuperType() {
//   this.color = ['red','green','blue']
// }
// SuperType.prototype.age = 18
// function SubTYpe() {
//   SuperType.call(this)
// }



//   var instance2 = new SubTYpe()
//   console.log(instance2.color)
//   console.log(instance2.age)
// //   (3) ["red", "green", "blue"]0: "red"1: "green"2: "blue"length: 3__proto__: Array(0)
// // VM135:13 undefined


window: {
  aa:null
  let bb = 1
  const cc = 1
  var dd = 3
}
console.log(window.bb) //undefined
console.log(window.aa)
console.log(window.cc)
console.log(window.dd)


// [].shift.call(arguments)

function test() {
  let newArgument = []
  for(let key in arguments) {
    newArgument.push(arguments[key])
  }
  console.log(newArgument.shift())
}
test(5,20,34,2)



//
function test(){
  console.log(arguments)
  //console.log(Array.prototype.shift.call(arguments))  效果一样
console.log([].shift.call(arguments)) //5
}
test(5,20,3,7)

// Arguments(4) [5, 20, 3, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ]0: 201: 32: 7length: 3callee: ƒ test()Symbol(Symbol.iterator): ƒ values()__proto__: Object
// 5