import React,{useState} from 'react'
//jsx
function Hello() {
  const [color,setColor] = useState('blue')
  const changeColor=()=>{
    setColor(color=='blue'?'red':'blue')
  }
  return(
    <>
    <div>免费前端教程</div>
    <div><button onClick={changeColor}>改变颜色</button></div>
    <style jsx>
      {`
        div{color:${color};}
        
        `}
    </style>
    </>
  )
}

export default Hello