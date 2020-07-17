// js原始值类型
// JS 中的6种原始值， 分别是:

// Boolean
// null
// undefined
// Number
// String
// Symbol (es6新增)


// typeof Symbol
// "function"
// typeof Symbol()
// "symbol"

// 原始值没有函数可调用
// '1'.toString()  //"1"  已经不是原始值了，已强制转为了对象


//一、0.1 + 0.2 ！ == 0.3
// 0.1 + 0.2 = 0.30000000000000004
// 1.1+1.2 = 2.3
// "1" + "2" == "12"

// typeof null //object //但是它不是object类型，是bug，要记住


// 对象类型和原始类型不同之处是什么？ 函数参数是对象会发生什么？


// let bar = {}
// const foo = [] //foo在计算机内部是要占用空间的，我们需要通过指针去找。

// 复制了foo的变量地址(指针)
// const bar = foo //赋值的时候，其实复制了foo的变量地址（指针)
// bar.push(1)
// -答： 原始类型存储的是值，对象类型储存的是地址（指针）,计算机会在内存中帮我们开辟一个空间来存放值
// 当我们需要去取这个空间的时候，这个空间就会拥有一个指针
//- 首先，函数传参是传递对象指针的副本
// test的这个参数person此时是一个镜像p1,也就是说，person跟p1有了一份一样的指针
// 当我们重新为person分配一个对象时，出现分歧
// 重新赋值导致person拥有了一个新的地址（指针），也就和p1再无瓜葛
function test (person) {
  person.age = 26 //这一行能影响到p1
  person = { //这次不能影响p1
    name: 'wn',
    age: 30
  }
  return person
}

const p1 = {
  name: '蜗牛',
  age: 25
}
const p2 = test(p1)

// p2 age-> 25->26->30
// p1 本应该name: '蜗牛',age: 25
//但是因为p1被test改造过了
console.log(p2) //{ name: 'wn', age: 30 }
console.log(p1) //{ name: '蜗牛', age: 26 }


const a = []
const b = a
b.push(1)
console.log(a,b) //[1] [1]
// 为什么a,b都是1？是因为复制的是地址


// 函数的参数是对象的时候会发生什么问题？
// p1是对象，传递p1,其实就是在传递指针
// 因为是同步的方法，所以会经过test(p1)
// p1 age-> 26，第一次改的时候，p1的指针也改成了26

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
const p2 = test(p1)
console.log(p1)