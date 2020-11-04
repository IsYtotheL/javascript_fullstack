import React,{Component,Fragment} from 'react'
import './style.css'
import SisterItem from './SisterItem'
// import axios from 'axios'
import Boss from './Boss.js'
class Sister extends Component {
  constructor(props) {
    super(props)
    this.state={
      inputValue:'',
      list:['努力','善良']
    }
  }
  componentWillMount() {
    console.log('componentWillMount--组件将要挂载')
  }
  // componentDidMount() {
  //   // console.log('componentDidMount--组件挂载完成')
  //   axios.post('http://web-api.juejin.im/v3/web/wbbr/bgeda')
  //   .then((res)=>{console.log('axios获取数据成功'+JSON.stringify(res))})
  //   .catch((error)=> {console.log('axios 获取数据失败'+error)})
    
  // }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    // index.js:1 Warning: Sister.shouldComponentUpdate(): 
    // Returned undefined instead of a boolean value.
    //  Make sure to return true or false.
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  render() {
    console.log('render 组件挂载中')
    return (
      <Fragment>
        {/* 注释 */}
        {
          //单行注释
        }
        <div>
          <label htmlFor="wyb">增加服务</label>
          <input id="wyb"
           value={this.state.inputValue} 
           onChange={this.inputChange.bind(this)}
           ref={(input)=>{this.input=input}}/> 
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          {
            this.state.list.map((item,index)=>{
              return (
           
           
                <SisterItem
                // name='wyb'
                key={index+item}
                content={item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}/>
            
              
              )
            })
          }
            
        </ul>
        <Boss/>
    </Fragment>
    )
  }
  // inputChange(e) {
  //   // console.log(e)
  //   // console.log(this)
  //   // console.log(e.target.value)
  //   this.setState({
  //     inputValue:e.target.value
  //   })

  // }
  inputChange() {
    this.setState({
      inputValue:this.input.value
    })

  }
  addList () {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
      // setState完成之后再打印
    },()=>{
    console.log(this.ul.querySelectorAll('li').length)
    })
  }
//   splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

// 注释：该方法会改变原始数组
//   arrayObject.splice(index,howmany,item1,.....,itemX)
// 参数	描述
// index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// item1, ..., itemX	可选。向数组添加的新项目。
  deleteItem (index) {
    console.log(index)
    let list = this.state.list
    // console.log( list.splice(index,1)) //被删除的
    list.splice(index,1)
    console.log(list) //剩下来的
   
    this.setState({
      list:list
    })
  }
}



export default Sister
