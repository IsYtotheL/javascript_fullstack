import React,{useRef,useState,useEffect} from 'react';
//useRef 获取DOM和保存变量
function Example12() {
  const inputEl = useRef(null)

  const onButtonClick=()=>{
    inputEl.current.value = "Hello,WYB"
    console.log(inputEl) //{current: input}
  }

  const [text,setText] = useState('Linn') //useState传入一个初始值
  const textRef = useRef()
  useEffect(()=> {
    textRef.current = text
    console.log('texRef.current:',textRef.current)
  })
  return(
    <>
        <input ref={inputEl} type="text"/>
        <button onClick={onButtonClick}>在input上展示文字</button>
        <br/>
        <br/>
        <input value={text} onChange={(e)=>{setText(e.target.value)}}/> {/*setText来改变text的值 */}
        
    </>
  )
}

export default Example12