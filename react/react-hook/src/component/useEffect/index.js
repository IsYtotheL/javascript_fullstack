// 副作用 hooks模式下状态 (state) 发生变更的时候提供给我们做额外操作的地方
import React, { Component } from 'react'

class Example extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  

    componentDidMount() {
      console.log(`componentDidMount => 你点击了 ${this.state.count}次`)
    }

    // componentDidUpdate() {
    //   console.log(`componentDidMount => 点击了 ${this.state.count}次`)
    // }

    // 数据源更改 组件需要重新渲染 willUpdate会被执行 state才会被获取成功
    // 它执行的时间在数据源更改之前
    componentWillUpdate () {
      console.log(`componentDidMount => 点击了 ${this.state.count}次`)
    }

  addCount () {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <div>
        <p>你点了{this.state.count} 次</p>
        <button onClick={this.addCount.bind(this)}>click me</button>
      </div>
    )
  }
}
export default Example

