import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom"
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[
        {cid:123,title:'你好'},
        {cid:456,title:'谢谢'},
        {cid:789,title:'对不起'}
      ]
    }
    //导航
    this.props.history.push("/home/")
  }
  render() { 
    return (
      <div>
        {/* <Redirect to="/home/"></Redirect> */}
         <h2>WYB</h2>
    <ul>
      {
        this.state.list.map((item,index)=>{
          return (
            <li key={index}>
              <Link to={'/list/'+item.cid}>
                {item.title}
              </Link>
            </li>
          )
        })
      }
    </ul>
      </div>
    );
  }
}
 
export default Index;