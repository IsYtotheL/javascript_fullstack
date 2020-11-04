import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Index() {
  useEffect(()=>{
    console.log('useEffect=>老弟，你来了!Index页面')
    return()=>{
      console.log('老弟你走了Index')
    }
  },[])
  return<h2>WYB</h2>
}
function Index2() {
  useEffect(()=>{
    console.log('useEffect=>老弟，你来了!List页面')
  })
  return<h2>Linn</h2>
}
// 只要count发生变化就会解绑
function Example6(){
  const [count,setCount] = useState(0) //数组解构
  useEffect(()=>{
   console.log(`useEffect=>You clicked ${count} times`)
   return()=>{
    console.log('=========================')
  }
  },[count])
  return(
    <div>
      <p>you click {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={Index2}></Route>
      </Router>
    </div>
  )
}

 
export default Example6;

// useEffect=>You clicked 0 times
// useEffect=>You clicked 1 times
//  useEffect=>You clicked 2 times