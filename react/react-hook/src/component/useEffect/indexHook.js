// 副作用 hooks模式下状态 (state) 发生变更的时候提供给我们做额外操作的地方
import React, { useState, useEffect } from 'react'

function Example () {
  const [count, setCount] = useState(0)
// 这一个方法 顶替了两个生命周期函数
// 只要不涉及到 初次渲染或二次更新的时候进行 就可以用
  useEffect( () => {
    console.log(`useEffect => 你点击了 ${count}次`)
  })


return (
  <div>
    <p>你点了{count} 次</p>
    <button onClick={() => {setCount(count + 1)}}>click me</button>
  </div>
)
}

export default Example

// 1. React 首次渲染和之后的每一次渲染都会调用 useEffect
// 2. useEffect 里面定义的函数是异步执行的，他不会阻碍浏览器更新视图