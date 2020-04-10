// 最新高阶组件
import React, { Component } from 'react'
// HOC 
function HOC (WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ''
      }
    }
// 怎么让高阶组件的onChange 方法作用于弟弟组件
    onChange = (event) => {
      // this.setState 在*这里*是异步的
      // this.setState 在不同场景下 可异步可同步
      this.setState({
        name: event.target.value
      })
       console.log(this.state.name)
    }
    render () {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      }
      return <WrappedComponent {...newProps}/>
    }
  }
}
// 高阶组件的使用  想在哪个弟弟组件里使用 就在其上方加@...
// 新写法 这样会报错 babel 还没有支持 
// 解决用 cnpm i @babel/plugin-proposal-decorators 
@HOC
class Example extends Component {
  render () {
    return (
      <input {...this.props.name}/>
    )
  }
}

//const Example = HOC (Example)

export default Example