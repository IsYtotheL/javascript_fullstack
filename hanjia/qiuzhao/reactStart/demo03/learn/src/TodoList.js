import React, { Component } from 'react';
import 'antd/dist/antd.css'
// import {Input,Button,List} from 'antd'
import store from './store/index.js'
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes.js'
import {getTodoList,changeInputAction,addItemAction,deleteItemAction,getListAction} from './store/actionCreators'
// import { List } from 'antd/lib/form/Form';
import TodoListUI from './store/TodoListUI'
import axios from 'axios'
// const data=[
//   '无感',
//   '陈宇',
//   '谢允'
// ]
class TodoList extends Component {
  constructor(props) {
    super(props)
    // console.log(store.getState())
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}/>
    );
  }
  // componentDidMount() {
  //   const action = getTodoList()
  //   store.dispatch(action)
  // }
  // componentDidMount() {
  //   axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
      // //console.log(res)
      // const data = res.data
      // const action = getListAction(data)
      // store.dispatch(action)
  //   })
  // }
  changeInputValue(e) {
    // console.log(e.target.value)
    // const action = {
    //   type:CHANGE_INPUT,
    //   value:e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  clickBtn() {
    // console.log('wyb')
    // const action = {type:ADD_ITEM}
    const action = addItemAction()
    store.dispatch(action)
  }
 deleteItem(index) {
  //  console.log(index)
  // const action={
  //   type:DELETE_ITEM,
  //   index
  // }
  const action = deleteItemAction(index)
  store.dispatch(action)
 }
}
 
export default TodoList;