import React, { Component } from 'react';

class Example4 extends Component {
  constructor(props) {
    super(props);
    this.state = { count:0 }
  }
  componentDidMount() {
    console.log(`componentDidMount=>You clicked ${this.state.count} times`)
  }
  componentDidUpdate(){
    console.log(`componentDidUpdate=>You clicked${this.state.count}times`)
  }
  render() {
    return (
    <div >
      <p>You clicked {this.state.count}</p>
      <button onClick={this.addCount.bind(this)}>Click me</button>
    </div>
    );
  }
  addCount() {
    this.setState({count:this.state.count+1})
  }
}
 
export default Example4;

// componentDidMount=>You clicked 0 times
// Example4.js:12 componentDidUpdate=>You clicked1times
// Example4.js:12 componentDidUpdate=>You clicked2times