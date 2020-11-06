import React,{useState} from 'react';
// 父组件任何一个状态发生变化,子组件的方法就会执行
function Example10() {
  const [aa,setAa] = useState('hello')
  const [bb,setBb] = useState('world')
  return(
    <>
      <button onClick={()=>{setAa(new Date().getTime())}}>aa</button>
      <button onClick={()=>{setBb(new Date().getTime()+'bb')}}>bb</button>
      <ChildComponent name={aa}>{bb}</ChildComponent>
    </>
  )
}

function ChildComponent({name,children}) {
  function changeAa() {
    console.log('aaaa')
    return name+'nihao aaaa'
  }
  const actionXiaohong = changeAa(name)
  return (
    <>
    <div>{actionXiaohong}</div>
    <div>{children}</div>
    </>
  )
}

export default Example10