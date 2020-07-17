// 深浅拷贝 
// 什么是深浅拷贝？ 如何实现浅拷贝？什么是深拷贝？如何实现深拷贝？
// 对象类型在赋值的过程中，其实是把指针（地址）复制给对方
// 所以改变了一方，其他方也会改变

let a = []
let b = a
b.push(1)
console.log(a) //[1]


let a = {age: 1}
let b = a
a.age = 2
console.log(b) // {age:2}

// Object.assign 只是和深拷贝效果一样  是把属性值拷贝出来放到新的对象中去

let a = {age: 1}
let b = Object.assign({},a)
a.age = 2
console.log(b) // {age : 1}
//Js es6中扩展运算符（...） http://www.fly63.com/article/detial/2516
//https://www.cnblogs.com/zshno1/p/10812075.html
//https://www.jianshu.com/p/1c142ec2ca45
// ... 浅拷贝
let a = { age: 1}
let b = {...a}
a.age = 2
console.log(b.age)


let a = {
  age:1,
  jobs: {
    first: 'coder'
  }
}
let b = {...a}
a.jobs.first = "waiter"
console.log(b.jobs.first) //?waiter
// 因为不能不管有多少层
// b = {{
//   age: 1,
//   jobs: {
//     first: 'coder'
//   }
// }}

//
// 深拷贝
//JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式，采用完全独立于语言的文本格式，是理想的数据交换格式。
//通过 JSON.stringify() 把 JavaScript 对象转换为字符串
//JSON.parse(JSON.stringify(object))
//通过 JSON.stringify() 把 JavaScript 对象转换为字符串。
//JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
//其过程说白了 就是利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象；
// 局限性： 会忽略undefined， 会忽略Symbol，不能序列化函数，不能解决循环引用的对象 
let a = {
  age:1,
  jobs: {
    first: 'coder'
  }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = "waiter"
console.log(b.jobs.first) //coder

let obj = {
  a: 1,
  b: {
    c:2,
    d:3
  }
}
obj.c = obj.b
obj.e = obj.a
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)

// {a: 1, b: {…}, c: {…}, e: 1}
// a: 1
// b: {c: 2, d: 3}
// c: {c: 2, d: 3}
// e: 1


let obj = {
  a: 1,
  b: {
    c:2,
    d:3
  }
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)


// Uncaught TypeError: Converting circular structure to JSON
//     --> starting at object with constructor 'Object'
//     --- property 'c' closes the circle
//     at JSON.stringify (<anonymous>)
//     at <anonymous>:11:30


// 拷贝不了函数
let a = {
  age:undefined,
  sex:Symbol('male'),
  jobs: function () {},
    name: 'wn'
  }
  let b = JSON.parse(JSON.stringify(a))
  console.log(b)  //{name: "wn"}




  // 如果你需要拷贝的对象含有内置类型并且不包含函数，可以使用MessageChannel

  // Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
  // 判断自身属性是否存在
  
  // 如何实现深拷贝？  //递归拷贝
  // 虽然typeof判断对象类型不够准确，这个缺陷在此处无关紧要，只要能判断出是obj
  function deepClone(obj) {
    let copy = obj instanceof Array ? [] : {}
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
      }
    }
    return copy
  }
  let test = {
    a: 1,
    b: {
      c:2,
      d:3
    }
  }
  let res = deepClone(test)
  test.a = 10
  test.b.c = 20
  console.log(res) //{a:1,b:{c:2,d:3}}

//   {a: 1, b: {…}}
// a: 1
// b: {c: 2, d: 3}