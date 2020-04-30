import React, { Component } from 'react'
import { ListItem,ListInfo,LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class List extends Component {
  render () {
    const {list,getMoreList } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return(
              <ListItem key={item.get('id')}>
              <img className="pic" src={item.get('imgUrl')} alt=""/>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            )
          })
        }
        <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
       
      </div>
    )
  }
}
const mapState =(state) => ({
  list: state.home.get('articleList')
})

const mapDispatch = (dispatch) => ({
  getMoreList () {
    // dispatch()
    actionCreators.getMoreList(dispatch)
  }
})
export default connect(mapState,mapDispatch)(List)