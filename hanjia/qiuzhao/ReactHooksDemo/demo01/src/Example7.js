import React, { useState,createContext,useContext } from 'react';

const CountContext = createContext();
function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}
function Example7(){
  const [count,setCount] = useState(0) //数组解构
  return(
    <div>
      <p>you click {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      <CountContext.Provider value={count}>
        <Counter/>
      </CountContext.Provider>
    </div>
  )
}

 
export default Example7;