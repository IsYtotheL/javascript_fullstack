function test (person) {
  setTimeout((person) => {
  person.age = 26
  person = {
    name: 'wn',
    age: 30
  }
  return person
},1000)
}
const p1 = {
  name: '蜗牛',
  age: 25
}
const p2 = test(p1)
console.log(p1)

// setTimeout 加了一个异步 所以结果为 { name: '蜗牛', age: 25 }