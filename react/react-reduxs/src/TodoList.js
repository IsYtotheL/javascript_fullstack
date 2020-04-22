import React, { Component } from 'react'
import store from './store/index'
import {connect} from 'react-redux'  
class TodoList extends Component {
  // constructor (props) {
  //   super(props) 
  //   this.state = store.getState()
  // }
  // handleInputChange(e) {
  //   console.log(e.target.value)
  // }
  render() {
    return (
      <div>
        <div>
        <input value={this.props.inputValue} onChange={this.props.changeInputvalue}/>
        <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => { //把store.dispatch映射到props
  return {
    changeInputvalue(e) {
      const action = {
        type: 'change_input_value',
        value:e.target.value
      }
     // console.log(e.target.value)
      dispatch(action)
    }
  }
}
// connect 是连接
// TodoList 和 store 做连接
// mapStateToProps 的参数就是store 该方法会帮助我们把store映射到当前的props
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)