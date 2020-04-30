import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'

import { connect } from 'react-redux' 
import { actionCreators } from './store'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight } from './style'

class Home extends Component {
  componentDidMount () {
    this.props.changeHomeData()
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

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    const action = actionCreators.getHomeInfo()
    // dispatch(action)
    action(dispatch)
  }
}) 
export default connect(null,mapDispatch)(Home)