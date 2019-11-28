(function () {
  var o = { a: 1}
  Object.defineProperty(o, 'b',{ //监听一个对象
    get () {
      return this.a //o.a
    },
    set (newVal) {
      this.a = newVal
    },
    configurable: true // b 是否可以被再次配置
  })

  console.log(o.b) // 得到1 get()
  o.b = 2
  console.log(o.b) //得到2  set()
})()