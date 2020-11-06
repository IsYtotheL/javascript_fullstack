import React from 'react'
import Link from 'next/link'
import Router from 'next/Router'

const Home=()=>{
  function gotoZhao() {
    // Router.push('/zhao?name=杨幂')
    Router.push({
      pathname:'/zhao',
      query:{name:'杨幂'}
    })
  }
  return (
    <>
    <div>我是首页</div>
    <div>
        <Link href="/zhao?name=杨幂"><a>杨幂</a></Link>
        <br/><Link href={{pathname:'/zhao',query:{name:'Lisa'}}}><a>Lisa</a></Link>
    </div>
    <div>
      <button onClick={gotoZhao}>选杨幂</button>
    </div>
  </>
  )
}

export default Home