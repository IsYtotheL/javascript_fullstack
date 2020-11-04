import React, { Component } from 'react';
import store from './store/index.js'
import {connect} from 'react-redux'

const ToDoList =(props) =>{
    let {inputValue,inputChange,clickBtn,list} = props
    return (
      <div>
        <input 
        value={inputValue} 
        onChange={inputChange}/>
        <button onClick={clickBtn}>提交</button>
        <ul>
          {
            list.map((item,index)=>{
              return(<li key={index}>{item}</li>)
            })
          }
        </ul>
      </div>
    );
}
// class ToDoList extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = store.getState()
//   // }

 
//   render() { 
//     let {inputValue,inputChange,clickBtn,list} = this.props
//     return (
//       <div>
//         <input 
//         value={inputValue} 
//         onChange={inputChange}/>
//         <button onClick={clickBtn}>提交</button>
//         <ul>
//           {
//             list.map((item,index)=>{
//               return(<li key={index}>{item}</li>)
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
//   inputChange(e) {
//     console.log(e.target.value)
//   }
// }
 
const stateToProps = (state)=>{
  return{
    inputValue:state.inputValue,
    list:state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e){
      // console.log(e.target.value)
      let action={
        type:'change_input',
        value:e.target.value
      }
      dispatch(action)
    },
    clickBtn(){
      // console.log('1')
      let action = {type:'add_item'}
      dispatch(action)
    }
  }
}
// export default ToDoList;
export default connect(stateToProps,dispatchToProps)(ToDoList);