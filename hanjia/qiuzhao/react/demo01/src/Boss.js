import React, { Component } from 'react';
class Boss extends Component {
 constructor(props) {
   super(props);
   this.state={
     isShow:true
   } 
   this.toToggole=this.toToggole.bind(this)
 }

  render() { 
    return (
      <div>
        <div className={this.state.isShow?'show':'hide'}>Boss</div>
        <div><button onClick={this.toToggole}>谢怜</button></div>
      </div>
    );
  }

  toToggole() {
    // console.log('1')
    this.setState({
      isShow:this.state.isShow?false:true
    })
  }
}
 

export default Boss;