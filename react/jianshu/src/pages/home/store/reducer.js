import { fromJS } from 'immutable'
// immutable.js
// facebook
// immutable对象 // 不可改变对象
const defaultState = fromJS({
  topicList: [
    // {
    //   id: 1,
    //   title: '社会热点',
    //   imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    // },
    // {
    //   id: 2,
    //   title: '手绘',
    //   imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    // }
  ],
  articleList: [
    // {
    //   id: 1,
    //   title: '"魏无羡"',
    //   desc: '天子笑分你一坛，当没看见我行不行',
    //   imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // },
    // {
    //   id: 1,
    //   title: '"魏无羡"',
    //   desc: '天子笑分你一坛，当没看见我行不行',
    //   imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // },
    // {
    //   id: 1,
    //   title: '"魏无羡"',
    //   desc: '天子笑分你一坛，当没看见我行不行',
    //   imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // },
    // {
    //   id: 1,
    //   title: '"魏无羡"',
    //   desc: '天子笑分你一坛，当没看见我行不行',
    //   imgUrl: "https://upload-images.jianshu.io/upload_images/15684874-ffc8c037e5f10911.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    // },

  ],
  recommendList: [
    // {
    //   id: 1,
    //   imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    // },
    // {
    //   id:2,
    //   imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    // }
  ]
})


export default (state = defaultState, action) => {
  return state
}