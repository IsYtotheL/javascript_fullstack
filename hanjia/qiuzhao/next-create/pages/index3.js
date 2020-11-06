import React from 'react'
import Link from 'next/link'
import Router from 'next/Router'
//钩子事件
const Home=()=>{
  //routeChangeStart
  //routeChangeComplete
  //beforeHistoryChange
  //routeChangeError
  //hashChangeStart
  //hashChangeComplete
  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化，参数为：',...args)
  })
  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由变化结束，参数为：',...args)
  })
  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3.beforeHistoryChange->路由变化结束，参数为：',...args)
  })
  Router.events.on('routeChangeError',(...args)=>{
    console.log('4.routeChangeError->路由放生错误，参数为：',...args)
  })
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5.hashChangeStart->，参数为：',...args)
  })
  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6.hashChangeComplete->，参数为：',...args)
  })
  function gotoZhao() {
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
    <div>
      <Link href="#wyb">
         <a>选WYB</a>
      </Link>
    </div>
  </>
  )
}

export default Home