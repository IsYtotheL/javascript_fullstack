// useRef 获取DOM元素  保存普通变量
import React,{ useRef,useState, useEffect } from 'react'

function Example () {
  // inputEl 这个变量是 useRef函数的返回值，那么这个变量给谁当Ref 属性，就能表示该元素的DOM
  const inputEl = useRef(null)
  const onButttonClick = () => {
    inputEl.current.value = '猛哥很帅'
    console.log(inputEl)
  }
// --------------
  const [text, setText] = useState('猛哥')
  const textRef = useRef()
  useEffect( () => {
    textRef.current = text
    console.log(textRef.current)
  })
  // ----------------
  return (
  <>
    <input ref={inputEl} type="text"/>
    <button onClick={onButttonClick}>在input上展示文字</button>
    <br/>
    <hr/>
    <input value= {text} onChange={(e) => {setText(e.target.value)}} />
  </>
  )
}

export default Example