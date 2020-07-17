// 什么是闭包？

//闭包的定义:函数A 内部有一个函数B,函数B可以访问到函数A中的变量，那么函数B就是闭包

// 在js中，闭包存在的意义就是让我们可以间接访问函数内部的变量

function A () {
  let a = 1
  window.B = function () {
    console.log(a) //undefined
  }
} 
// 函数还没执行

function A () {
  let a = 1
  window.B = function () {
    console.log(a) //1
  }
} 
A()
B()

// 循环中，使用闭包解决 'var' 定义函数的问题
// 异步  setTimeout方法被挂起，只有for循环的i再加
 for (var i = 1;i <= 5;i++) {
   setTimeout(function timer() {
    console.log(i)//6 6 6 6 6
   },i*1000)
 }

// 第一种
 for (var i = 1; i <= 5; i++) {
   (function(j) {
     // j = 1
     // j = 2
     // j = 3
     setTimeout(function timer() {
       console.log(j) // 1 2 3 4 5
     },j * 1000)
   })(i) //立即执行函数
 } 
 // https://www.jianshu.com/p/60ca27e185ec
// “词法作用域也就是在词法阶段定义的作用域。 换句话说,词法作用域就是你在写代码的时候就已经决定了变量的作用域。”
 // 闭包会保留词法作用域
 // 内存泄漏
//  内存泄漏（Memory Leak）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

// 第二种
// 通过第三个参数,实现保留词法作用域
for (var i = 1; i <= 5;i ++) {
  setTimeout(
    function timer(j) {
      console.log(j)//1 2 3 4 5
    },
    i * 1000,
    i
  )
}


// 第三种 换let(最优，推荐)
for (let i = 1;i <= 5;i++) {
  setTimeout(function timer() {
   console.log(i)//1 2 3 4 5
  },i*1000)
}

