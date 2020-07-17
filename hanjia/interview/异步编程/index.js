// 并发 和 并行 的区别?


//并发，是宏观概念，我有任务A和任务B,在同一时间内通过任务切换完成了这两个任务
//并行，是微观概念，假设cpu有两个核心，那么我们就可以同时完成任务A和任务B,同时完成多个任务的情况就可以称之为并行


//回调函数(callback)
//什么是回调函数？回调函数有什么缺点？如何解决回调地狱问题？

ajax(url,() => {
  //处理逻辑
  ajax(url,() => {
    //处理逻辑
    ajax(url,() => {
      //处理逻辑
    })
  })
})

function firstAjax () {
  ajax(url,() => {
    //处理逻辑
    secondAjax()
  })
}
function secondAjax() {
  ajax(url,() => {
    //处理逻辑
  })
}
ajax(url,() => {
  //处理逻辑
  firstAjax()
})

//回调函数的缺点
//1.嵌套函数存在耦合性，一旦以后所改动就会牵一发而动全身。
//2.嵌套函数一多，就很难处理错误。



// Generator
//你理解的Generator是什么？
//Generator会返回一个迭代器


function *foo(x) {
  let y = 2 * (yield(x + 1)) //5+1  直接暂停 value是yield的值
  let z = yield(y /3)  //2 * 12  /3 
  return (x + y + z) //z=13 y = 24  x = 5

}

let it = foo(5)
console.log(it.next())  //{value: 6, done: false}
// 传入的参数等于上一个yield的返回值
console.log(it.next(12))//{value: 8, done: false}
console.log(it.next(13))//{value: 42, done: false}


function *fetch() {
  yield ajax(url,() => {})
  yield ajax(url,() => {})
  yield ajax(url,() => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next() //如果第一个没有执行，则不能执行
let result3 = it.next()


//Promise
//Promise的特点是什么？分别有什么优缺点？ 什么是Promise链？ Promise构造函数执行和then函数有什么区别？
// 三种状态：
//1.等待中(pending)
//2.完成了(resolved)
//3.拒绝了(rejected)


//Promise里面的代码是立即执行的
//Promise每次调用then之后都是返回一个全新的Promsise


//缺点： Promise用了之后，无法失效
new Promise((resolve,reject) => {
  console.log('new Promise')
  resolve('success')

  //无效
  reject('reject')
})
console.log('finish')

// new Promise
// finish



Promise.resolve(1)
.then(res => {
  console.log(res)  //1  resolve 出的值是多少，

  // then当中使用return的话，return的值会被Promise.resolve()包装
  return 2
})
.then((res) => {
  console.log(res) //2 
})


// ajax(url)
//   .then(res => {
//     return ajax(url1)
//   })
//   .then(res => {
//     return ajax(url2)
//   })
//   .then(res => {
//     console.log(res)
//   })



//async await // 语法糖 
//async和await的特点？ 他们的优点和缺点分别是什么？await的原理是什么？

//一个函数如果加上了async，那么该函数就会返回一个promise

async function test () {
  return '1'
}

console.log (test())

// Promise {<resolved>: "1"}
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: "1"

// function test() {  //和async一样的效果
//   return new Promise((resolve,reject) => {
//     resolve('1')
//   })
// }


async function name() {
  // 这里代码没有依赖性的话，完全可以使用Promise.all 的方式
  //这里的代码有依赖性的话，其实就是解决回调地狱的例子

  await fetch(url)
  await fetch(url1)
  await fetch(url2)
}



let a = 0
let b = async () => {
  a = a + await 10  //await 内部实现generator,generator会保留堆栈中的东西所以这时候 a = 0被保留了下来
  console.log('2',a)
}
b()
a++
console.log('1',a) //1 1 因为await本身是异步操作

// 1 1
// 2 10


//await 就是generator 加上 Promise 后的一个语法糖，内部实现了自执行

// 常用的定时器函数  不能这样写，会被开除
// function A(params) {
//   //1s
// }
// function B(params) {
//   //0.5s
// }

// setTimeout(() => {
//   B()
// },1000)

//setTimeout、setInterval、requestAnimationFrame 各有什么特点？

setTimeout(() => {
  console.log('setTimeout')
},1000)
let period = 60 * 1000 *60 * 2
let startTime = new Date().getTime()
let count = 0
let end = new Date().getTime() + period
let interval = 1000
let currentInterval = interval

function loop() {
  count++
  //代码执行所消耗的时间
  let offset = new Date().getTime() - (startTime + count * interval)
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 *60))
  let hdiff = diff % (60 * 1000 *60)
  let m = Math.floor(hdiff /(60*1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / (1000)
  let sCeil = Math.ceil(s)
  let sFloor = Math.floor(s)

  //得到下一次循环所消耗的时间
  currentInterval = interval - offset
  console.log(`时:${h},分:${m},毫秒:${s},秒向上取整:${sCeil},代码执行时间:${offset},下次循环间隔:${currentInterval}`)
  setTimeout(loop,currentInterval)
}
setTimeout(loop,currentInterval)

//setInterval
function demo () {
  setInterval(() => {
    console.log(2)
  },1000);
  sleep()
}
demo()

//requestAnimationFrame
//属于setInterval的源码实现
function setInterval(callback,interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}
let a = 0
setInterval(timer => {
  console.log(1)
  a++
  if(a===3) cancelAnimationFrame(timer)
},1000)
// 1
// 3VM89:19 1

//requestAnimationFrame 自带节流功能，基本可以保证在16.6毫秒内只执行一次