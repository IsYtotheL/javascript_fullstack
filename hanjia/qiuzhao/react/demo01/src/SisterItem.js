import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SisterItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  //组件第一次存在于dom中，函数是不会被执行
  // 如果已经存在于Dom中，函数才会被执行
//  componentWillReceiveProps() {
//    console.log('componentWillReceiveProps')
//  }
//  componentWillUnmount() {
//    console.log('componentWillUnmount')
//  }

//避免这些不必要的render
// shouldComponentUpdate(nextProps,nextState)
// 返回false时不会重写render
shouldComponentUpdate(nextProps,nextState) {
  if(nextProps.content!==this.props.content) {
    return true;
  }else {
    return false;
  }
}
  render() { 
    return (
      <li onClick={this.handleClick}>
        {this.props.name}
      {this.props.content}</li>
    );
  }
  handleClick() {
    // console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
}

SisterItem.propTypes = {
  name:PropTypes.string.isRequired,
  content:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func
}

SisterItem.defaultProps={
  name:'linn'
}
 
export default SisterItem;