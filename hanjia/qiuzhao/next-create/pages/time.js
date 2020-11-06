import React,{useState} from 'react'
import dynamic from 'next/dynamic'

//这里不引入，只有把执行到<One/>时才引入
const One = dynamic(import('../components/one'))
// 懒加载

// import moment from 'moment'


// function Time() {
//   const [nowTime,setTime] = useState(Date.now())
//   const changeTime=()=>{
//     setTime(moment(Date.now()).format())
//   }

// 优化后  使用时才加载
  function Time() {
    const [nowTime,setTime] = useState(Date.now())
    const changeTime=async ()=>{
      const moment = await import('moment')
      setTime(moment.default(Date.now()).format())
    }
  return(
    <>
        <div>显示时间为:{nowTime}</div>
        <One/>
        <div><button onClick={changeTime}>改变时间格式</button></div>
    </>
  )
}

export default Time