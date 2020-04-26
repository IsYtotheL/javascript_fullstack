import {fromJS} from 'immutable'
// immutable.js
// facebook
// immutable对象 // 不可改变对象
const defaultState = fromJS({
  topicList:[
    {
    id:1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  },
  {
    id:2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }
]
})


export default (state = defaultState, action) => {
  return state
}