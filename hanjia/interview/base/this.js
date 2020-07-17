// 如何正确判断 this ? 箭头函数的this是什么？
//谁调用我，我就指向谁，箭头函数（不够准确）
//箭头函数本身没有this，箭头函数中的this只取决于包裹箭头函数的第一个普通函数的this
// 另外：在箭头函数中使用bind 这类函数是无效的
// function foo () {
//   console.log(this.a) // 1
// }
// var a = 1
// foo () //1 foo被window调用了


// const obj = {
//   a:2,
//   foo:foo
// }
// obj.foo() //2


function foo () {
  console.log(this.a)
}
const c = new foo() //undefined

function foo () {
  console.log(this) //foo{}
}
const d = new foo()

// 1.对于直接(全局)调用foo来说，不管foo函数写在什么地方,this都是指向window
// 2.对于obj.foo()来说，（不是直接被调用）,谁调用函数，谁就是this,所以场景2中 this 就是obj对象
// 3.对于new的方式来说，this会永远绑定在 变量c上面,不会被任何方式所改变


//柯里化 https://www.jianshu.com/p/2975c25e4d71


//一直找外层的正常函数
function a() {
  // console.log(this) 相当于在这里写了一个
  return () => { //1
    return () => { //2
      console.log(this)
    }
  }
}
//
console.log(a()()()) //window


function abc() {
  // this
}
abc = () => {
  // 不存在this指向abc
}



let a = {}

let fn = function () {
  console.log(this)
}
fn.bind().bind(a)()
// fn.bind().bind(a) 等于:fn2
let fn2 = function fn1() {
  return function () {
    return fn.apply()  //只有这一个作用在fn
  }.apply(a)
}
fn2()

// 不管我们给函数bind几次，fn中的this永远由第一次bind决定，所以结果永远是window
call, apply, bind
a.call(b)


// 当多种规则出现的时候，this的作用域指向，由各个规则的优先级来决定，this的指向优按照先级高的规则来定
// new > bind这一类 > obj.foo() > 直接调用
// 箭头函数中this一旦被绑定，就不会被任何方式所改变