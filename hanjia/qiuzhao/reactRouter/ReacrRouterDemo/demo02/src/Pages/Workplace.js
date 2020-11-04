import React from 'react'
import {Route,Link} from 'react-router-dom'
import GetUp from './workplace/Getup.js'
import Money from './workplace/Money.js'



function WorkPlace() {
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/money">加薪秘籍</Link></li>
          <li><Link to="/workplace/getup">早起攻略</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>职场软技能</h3></div>
        <Route path="/workplace/money" component={Money}/>
        <Route path="/workplace/getup" component={GetUp}/>
      </div>
    </div>
  )
}

export default WorkPlace
