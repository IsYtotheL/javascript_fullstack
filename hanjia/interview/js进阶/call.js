// call 内部实现原理
//把bar搬到foo里面来
let foo = {
  name: 'wn',
  // fn:function bar(x) {
  //   console.log(this.name)
  // console.log(x)
  //}
}
function bar(x) {
  console.log(this.name)
  console.log(x)
}
bar.call(foo,666) //wn 666 //call里面可有多个参数

//

Function.prototype.myCall = function(context) { //context 是可选参数
  //console.log(this) //此时this表示bar 谁调用我
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  //this 本来代表的是bar,现在希望它代表foo
  context = context || window //如果不传,则默认为window
  context.fn = this //凭空创建一个fn属性,this作用域被改
  //console.log(this) // foo
  const args = [...arguments].slice(1) //[].slice.apply(argunments)[1] //把类数组解构到数组中
  const result = context.fn(...args) //执行拿到结果
  delete context.fn  //删除一下fn，不影响性能
  return result
}
bar.myCall(foo)