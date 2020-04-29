import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import axios from 'axios'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight } from './style'

class Home extends Component {
  componentDidMount () {
    axios.get('/api/home.json').then((res) => {
      console.log(res)
    })
  }
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/6171276-3304c2681c7b7995.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home