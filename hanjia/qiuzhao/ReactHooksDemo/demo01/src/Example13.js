import React,{useState,useEffect,useCallback} from 'react';

//useCallback
//  
function useWinSize() {
  //useState
  const [size,setSize] = useState({
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight,
  })
  const onResize= useCallback(()=>{
    setSize({
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight,
    })
  },[])

  useEffect(()=>{
    
    window.addEventListener('resize',onResize)
    return ()=>{
      window.removeEventListener('resize',onResize)
    }
  },[])
  return size
}

function Example13() {
  const size = useWinSize()

  return (
    <div>页面Size:{size.width}X{size.height}</div>
  )
}

export default Example13