import { CHANGE_INPUT_VALUE,INIT_LIST_ACTION } from "./actionTypes"
import axios from 'axios'
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// export const getTodoList = () => {
//   return (dispatch) => {
//       axios.get(' http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
//     // console.log(res)
//      const data = res.data
//      const action = initListAction(Object.keys(data.hotComments[0]))
//     //  store.dispatch(action)
//     //  console.log(action)
//     dispatch(action)

//     })
//   }
// }