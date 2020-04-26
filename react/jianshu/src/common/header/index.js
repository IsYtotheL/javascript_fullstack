import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import  {actionCreators} from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,

} from './style'
// 无状态组件
const Header = (props) => {
  // render() {
     return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active" >首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
             timeout={200}
             in={props.focused}
             classNames= "slide"
             >
               {/* slide-enter slide-enter-active slide-exit slide-exit-active */}
          <NavSearch
             className={props.focused ? 'focused': ''}
             onFocus= {props.handleInputFocus}
             onBlur={props.handleInputBlur}
             >
            </NavSearch>
            </CSSTransition>
            <span className={props.focused ? 'focused iconfont' : 'iconfont'}
            >&#xe610;</span>
            </SearchWrapper>
            </Nav>
            <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe616;</span>
            写文章
          </Button>
          <Button className="reg">注册</Button>
          
        </Addition>
      </HeaderWrapper>
    )
  // }
}
// class Header extends Component {
//   // constructor (props){
//   //   super(props)
//     // this.state = {
//     //   focused: false
//     // }
//     // this.handleInputFocus = this.handleInputFocus.bind(this)
//     // this.handleInputBlur = this.handleInputBlur.bind(this)
//   // }
//   // handleInputFocus () {
//   //   // this.setState({
//   //   //   focused:true
//   //   // })
//   // }
//   // handleInputBlur () {
//   //   this.setState({
//   //     focused: false
//   //   })
//   // }
 
// }

const mapStateToProps = (state) => {
  return {
    focused:state.header.get('focused')
  }
}
// store.dispatch ===> props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      // const action = {
      //   type: 'search_focus'
      // }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      // const action = {
      //   type:  'search_blur'
      // }
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)