import React, { useState,useEffect } from 'react';

function Example5(){
  const [count,setCount] = useState(0) //数组解构
  useEffect(()=>{
   console.log(`useEffect=>You clicked ${count} times`)
  })
  return(
    <div>
      <p>you click {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

 
export default Example5;

// useEffect=>You clicked 0 times
// useEffect=>You clicked 1 times
//  useEffect=>You clicked 2 times