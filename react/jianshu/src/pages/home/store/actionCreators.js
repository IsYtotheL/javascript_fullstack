import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'
const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
  type:constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json' ).then((res) => {
      // console.log(res)
      const result = res.data.data
      // const action = changeHomeData(result)
      // this.props.changeHomeData(action)
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  // return (dispatch) => {
  //   console.log('click')
  //   // dispatch()
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      // console.log(res)
      const result = res.data.data
      // const action = changeHomeData(result)
      // this.props.changeHomeData(action)
      // console.log(result)
      dispatch(addHomeList(result,page + 1))
    })
  }
  }

  export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show: show
  })
