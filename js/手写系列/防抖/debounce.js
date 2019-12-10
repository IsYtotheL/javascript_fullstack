const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer) //清除的是上一次的定时器 第一次的时候null，第二次的时候fn()无法执行
    timer = setTimeout(() => {
      fn.apply(this, ...args) // 防止作用域被修改 fn()
    }, delay)
  }
}


//debounce(test,500)