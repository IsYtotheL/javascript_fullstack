import ActionButton from "antd/lib/modal/ActionButton"
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
const defaultState = {
  inputValue:'Write Something',
  list:[
    '无感',
    '陈宇',
    '谢允'
  ]
}
export default (state = defaultState,action)=>{
  // console.log(state) //{inputValue: "Write Something", list: Array(3)} // state是原来的值
  // console.log(action) //{type: "changeInput", value: "a"} //type:是方法value 是改变的值
  //Reducer里只能接收state,不能改变state
  //纯函数
  if(action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type===ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type===DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  // if(action.type===GET_LIST) {
  //   let newState = JSON.parse(JSON.stringify(state))
  //   newState.list = action.data.data.list
  //   return newState
  // }
  return state
}