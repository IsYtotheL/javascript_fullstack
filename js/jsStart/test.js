function test() {
  var a = 'hi'
}
test()
// console.log(a) //ReferenceError: a is not defined

function test2() {
  b = 'hello'
}
test()
console.log(b)

