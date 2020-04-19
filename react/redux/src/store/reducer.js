import {CHANGE_INPUT_VALUE, INIT_LIST_ACTION} from './actionTypes'
const defaultState = {
  inputValue: '123',
  list: [1 , 2]
}
//state 指的是store里面上一次存储的数据
// action 用户传过来的那句话
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而不会有任何副作用
export default (state = defaultState ,action ) => {
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))

    newState.inputValue = action.value
   // console.log(state, action)
    return newState // reducer 有一个限制，可以接受state,但是绝对不能修改
  }
  if (action.type==='add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type==='delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    newState.inputValue = ''
    return newState
  }
  if (action.type ===INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  console.log(state, action)
  return state
}