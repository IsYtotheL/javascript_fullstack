import React from 'react'
// 这个函数就相当于是一个组件 withMouse 拿到的是一个类
const withMouse = (Component) => {
  return class extends React.Component {// 这个类类没有取名字
    state = { x: 0, y: 0 }
    // handleMouseMove(){} 这是函数，函数内部的作用域的this拿不到类里面的作用域
    // 不能用这种方法 箭头函数可，因为其本身没有this 没有域
    // 箭头函数被写在哪里 作用域就指向谁 所以次this指向类
    handleMouseMove =(event) => {
     // console.log(event)
     this.setState({
       x: event.clientX,
       y: event.clientY
     })
    }
    render () {
      return (
        <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
         {/* this.props将高阶函数内部自己的props 附带赠与给弟弟组件 */}
          <Component {...this.props} mouse={this.state}/>
        </div>
      )
    }
  }
}

// 定义一个纯函数无状态组件 App 拿到的是jsx
const App = (props) => {
  const { x, y} = props.mouse
  return (
    <div style={{height: '100vh'}}>
      <h1>The mouse position is ({x},{y})</h1>
    </div>
  )
}

// const test = () => {
//   return (
//     <div>{x}, {y}</div>
//   )
// }
const AppWithMouse = withMouse(App) // 高阶组件替组件干活


export default AppWithMouse