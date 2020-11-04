import React, { useState } from 'react';
// 多状态
let showSex = true
function Example3(){
  const [age,setAge] = useState(18)
  // if(showSex) {
    const [sex,setSex] = useState('男')
    // showSex = false
  // }
  const [work,setWork] = useState('程序员')


  return(
    <div>
      <p>{age}</p>
      <p>{sex}</p>
      <p>{work}</p>
    </div>
  )
}

 
export default Example3;