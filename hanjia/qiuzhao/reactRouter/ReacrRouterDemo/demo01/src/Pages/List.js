import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() { 
    // console.log(this.state)
    // {}
    // List.js:8 {id: "1"}
    return (
    <h2>List-page{this.state.id}</h2>
    );
  }
  componentDidMount() {
    // console.log(this.props)//{history: {…}, location: {…}, match: {…}, staticContext: undefined}
    let tempId = this.props.match.params.id
    this.setState({id:tempId})
  }
}
 
export default List;