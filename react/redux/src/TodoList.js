//Redux = flux 缺陷：可以写很多个store  改版 Redux = flux + Reduce 就只有一个store
import React, { Component } from 'react'
import { Input, List, Button } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css'
import store from './store/index.js'
 import {CHANGE_INPUT_VALUE} from './store/actionTypes'
import {getInitList,getInputChangeAction,initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

// store 的创建
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    // console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
   this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // 只要store里面的数据发生变化
  }
  componentDidMount () {
    // const action = getTodoList()
    // store.dispatch(action) // 因为此刻的store已经集成的thunk的功能，所以支持dispatch一个函数，这个函数会自动执行
   // console.log(action)
    // axios.get(' http://api.github.com/users/octocat/gists').then((res) => {
    // // console.log(res)
    //  const data = res.data
    //  const action = initListAction(Object.keys(data[0].owner))
    //  store.dispatch(action)
    //  console.log(action)
    // })
    axios.get(' http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
           const data = res.data
           const action = initListAction(Object.keys(data.hotComments[0]))
          //  store.dispatch(action)
          //  console.log(action)
          // dispatch(action)
             store.dispatch(action)      
          })
  }
  handleInputChange (e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE ,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
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
    <TodoListUI
     inputValue={this.state.inputValue}
     handleInputChange = {this.handleInputChange}
     handleBtnClick = {this.handleBtnClick}
     list={this.state.list}
     handleItemDelete = {this.handleItemDelete}
     />
   
    )
  }
}
export default TodoList