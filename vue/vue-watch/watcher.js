class watcher {  //es6 构造函数  watcher类里放一个构造器  
  constructor (opts) { //加一个参数
    this.$data = opts.data  // this 指向类
    this.$watch = opts.watch
    for (let key in opts.data) { // for in 遍历对象 取出数据源的值
      this.setData(key, opts.data[key])
    }
  }
  setData (_key,_val) {
    Object.defineProperty(this,_key, {//Object.defineProperty(this), this把上下文指向当前对象
      get: function () { //es5
        return this.$data[_key]  //this.$data = opts.data
      },
      set: function (val) { // 修改a的值
        const oldVal = this.$data[_key] //传进来的inner  保存旧值
        if (oldVal === val) return val
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
          this.$watch[_key].call(this, val, oldVal) //call 防止作用域被修改
    )
        return val
      }
    }) 
  }
}

// let vm = new watcher({
//   data: {
//    a:0,
//    b: 'hello'
//   },
//   watch: {
//     a (newVal, oldVal) { //此方法和数据源里的字段一样
//       console.log(oldVal, newVal)
//     }
//   }
// })
// setTimeout(() => {
//   vm.a = 1  
// },1000)
