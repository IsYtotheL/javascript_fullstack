let foo = {
  name: 'wn',
  fn:function(x) {
    console.log(this.name)
    console.log(x)
}
}
function bar(x) {
  console.log(this.name)
  console.log(x)
}
bar.apply(foo,[666]) //bar.call(foo,1,2,3) //前者只有两个参数，其中一个是数组

//wn
//666
Function.prototype.myApply = function(context) {
  // this ===> bar
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result 
    // 处理参数 和call有区别
    if (arguments[1]) { //代表数组
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }
    delete context.fn
    return result
  }