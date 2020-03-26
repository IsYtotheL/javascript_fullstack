import React from 'react';

//函数组件
function Button (props) {
  let date = new Date().getTime();
  // 通知父组件
  const handleClick = () => {
    console.log(123456);
  }
  const {type, children, receiveFromButton } = props; // 所有在里面的内容都是子节点children type样式:primary (主题色等)
  // 父组件传递一个 回调 函数过来， 子组件 通过参数 通知 父组件
  receiveFromButton(date);
  return (
    <button onClick={handleClick}
      className={type === 'primary' && 'primary-class'} //类名className因为class是关键词 
    >{ children }</button>
  )
}

export default Button;