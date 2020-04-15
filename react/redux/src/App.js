//Redux = flux 缺陷：可以写很多个store  改版 Redux = flux + Reduce 就只有一个store
import React, { Component } from 'react'
import { Input, List, Button } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index.js'
import {CHANGE_INPUT_VALUE} from './store/actionTypes'
// store 的创建
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    // console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange) // 只要store里面的数据发生变化
  }

  handleInputChange (e) {
    const action = {
      type: CHANGE_INPUT_VALUE ,
      value: e.target.value
    }
    store.dispatch(action) //让管理员听到这句话
  }
  handleStoreChange (e) {
    console.log('store Change')
    this.setState(store.getState())
  }
  handleBtnClick () {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  handleItemDelete(index) {
    console.log(index)
    const action = {
      type: 'delete_todo_item',
      index:index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <div>
          <Input
           value={this.state.inputValue} 
           placeholder="todo info"
           style={{ width: '300px', marginRight: '10px' }}
           onChange={this.handleInputChange} 
           />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
        style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item ,index) => (
            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
              {item}
            </List.Item>
    )}
        />
      </div>
    )
  }
}
export default TodoList