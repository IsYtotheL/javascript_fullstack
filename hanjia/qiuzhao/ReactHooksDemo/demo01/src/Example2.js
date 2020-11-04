import React, { useState } from 'react';

function Example2(){
  const [count,setCount] = useState(0) //数组解构

  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]
  // 关于 useState 的用法是，需要传入一个参数作为状态的初始值，
  // 当函数执行后会返回两个值，一个是当前状态的属性，一个是修改状态的方法。

  return(
    <div>
      <p>you click {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

 
export default Example2;