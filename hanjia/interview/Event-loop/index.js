setTimeout(() => {
  console.log(2)
},0)
//Promise 本身是异步方法
let p = new Promise((resolve,reject) => {
  resolve(1)
  console.log(1)
})
// 1
// 2

//进程 和 线程的区别? JS单线程带来了什么好处？

//本质上来说，进程和线程都是cpu工作时间片的一个描述

//进程：描述了cpu在运行指令及加载和保存上下文所需要的时间
//线程：描述了执行一段指令所需要的时间

//线程是互斥的

//JS单线程带来了什么好处:
//可以节省内存，节约上下文切换时间，没有锁的问题的好处。


//执行栈 （什么是执行栈)

function foo(b) {
  // var a = 5;
  // return a * b + 10
  throw new Error('error')
}

function bar(x) {
  // var y = 3;
  // return foo(x * y)
  // foo()
  bar()
}
bar()

//可以认为 执行栈 是一个存储函数调用的栈结构

//浏览器中的Event Loop
//异步代码的执行顺序？ 解释一下 Event Loop?


//当我们执行JS代码的时候其实就是往执行栈中放入函数，
//那么遇到异步代码的时候该怎么办？ 其实当遇到异步代码时，
//会被挂起并在需要执行的时候加入到TASK（有多少种Task）队列中
//一旦执行栈为空，Event Loop 就会从Task队列中拿出需要执行的代码并放到执行栈中执行
//所以，本质上来说，JS中的代码其实还是同步



//任务源可以分为微任务(microtask)和宏任务(macrotask).
//在ES6的规范当中，microtask成为jobs,macrotask称为task


console.log('script start')  //1
async function async1() {
  //第五步的时候回到这个地方的Promise里面执行resolve函数，这又会把resolve丢到微任务中执行
  await async2() //await 看成是让出线程的标志
  //Promise resolve（返回值).then(
  console.log('async1 end') //5
  // )
}
async function async2() {
  console.log('async2 end') //2
}
async1()
setTimeout(function() {
  console.log('setTimeout') //8
},0)

new Promise(resolve => {
  console.log('Promise') //3 promise需要立即执行
  resolve()
})
.then(function() {
  console.log('Promise1') //6
})
.then(function(){
  console.log('Promise2') //7
}) 
console.log('Script end') //4

// script start
// VM135:7 async2 end
// VM135:15 Promise
// VM135:24 Script end
// VM135:4 async1 end
// VM135:19 Promise1
// VM135:22 Promise2
// undefined
// VM135:11 setTimeout

//Event Loop 执行顺序
// 1.先执行同步代码，这属于宏任务
// 2.执行栈为空之后，查询是否有异步代码需要执行
// 3.执行完所有的微任务
// 4.执行所有的微任务后，如果有必要的话会渲染页面
// 5.开始下一轮的Event Loop,执行宏任务当中的异步代码，也就是setTimeout中的回调


// 微任务：process.nextTick,promise,MutationObserver
// 宏任务:script,setTimeout,setInterval,setImmediate,I/O,UI rendering

// 微任务会优先于宏任务  错误  因为script属于宏任务
//浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务。


// Node 中的 Event Loop 和浏览器中的有什么区别？ process.nextTick执行顺序
//https://www.jianshu.com/p/deedcbf68880
// 1.
// 2.
// 3.
// 4.
// 5.
// 6.

setTimeout (() => {
  console.log('setTimeout')
},0)
setImmediate(() => {
  console.log('setImmediate')
})

//首先setTimeout(fn,0) === setTimeout(fn,1) 源码当中决定了

const fs = require('fs')
fs.readFile(__dirname,() => { //fs.readFile  就成为了I/O
  // 也就是说这两个函数卸载了I/O回调中
  setTimeout (() => {
    console.log('setTimeout')
  },0)
  setImmediate(() => {
    console.log('setImmediate')
  })
})

// 以上说的都是宏任务
// 对于微任务来说，他会在以上6各阶段的 每个阶段 完成之前清空微任务队列

setTimeout(() => {
  console.log('timer2')
},0)
Promise.resolve().then(() => {
  console.log('Promise1')
})

// 在node异步中微任务一定比宏任务先执行
//process.nextTick
//这个函数其实 是独立于 Event Loop 之外的，她有一个自己的队列
//当每个阶段完成后， 如果存在 nextTick 队列，就会清空队列中的所有回调函数
//并且优先于其他 microtask 执行

setTimeout(() => {
  console.log('timer1')

Promise.resolve().then(() => {
  console.log('Promise1')
})
},0)
process.nextTick(() => {
  console.log('nextTick')
  process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(() => {
      console.log('nextTick')
      process.nextTick(() => {
        console.log('nextTick')
      })
    })
  })
})

// nextTick
// nextTick
// nextTick
// nextTick
// timer1
// Promise1