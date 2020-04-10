//Redux = flux 缺陷：可以写很多个store  改版 Redux = flux + Reduce 就只有一个store
import React, { Component } from 'react'
import { Input, List } from 'antd'
import 'antd/dist/antd.css'

class TodoList extends component{
  render () {
    return (
      <div style={{marginLeft: '10px',marginTop:'10px'}}>
        <div>
         <Input placeholder="todo info" style={{width:'300px',marginLeft: '10px'}}/>
         <Button type="primary">提交</Button>
       </div>
      </div>
    )
  }
}
export default TodoList