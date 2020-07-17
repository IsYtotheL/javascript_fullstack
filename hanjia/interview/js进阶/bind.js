let foo = {
  name: 'wn'
}
function bar (x) {
  console.log(this.name)
  console.log(x)
}
bar.bind(foo,[1,2,3])()
var p = new bar.bind(foo,[1,2,3])(6)


Function.prototype.myBind = function(context) {

    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    const _this = this  //bar this 保存在了_this
    const args = [...arguments].slice(1)

    //返回函数
    return function F() {
      //因为返回了一个函数，我们可以new F(),所以需要判断
      if (this instanceof F) {
        return new _this(...args,...arguments)
      }
      //args是123 //arguments 是 6
      return _this.apply(context,args.concat(...arguments))
    }
  }