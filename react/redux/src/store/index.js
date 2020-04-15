import { createStore } from 'redux'
import reducer from './reducer'
// 创建一个store
const store = createStore(reducer) // store 已经能知道笔记本中记过两个笔记

export default store