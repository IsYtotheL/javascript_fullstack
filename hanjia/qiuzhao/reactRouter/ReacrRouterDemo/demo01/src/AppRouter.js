import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from './Pages/Index.js'
import List from './Pages/List.js'
import Home from './Pages/Home'

// 设置规则 传递值  接受值  显示内容

// function Index() {
//   return<h2>WYB</h2>
// }

// function List(){
//   return <h2>ListPage</h2>
// }

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index}/>
      <Route path="/list/:id" component={List} />
      <Route path="/home/" component={Home}/>
    </Router>
  )
}

export default AppRouter