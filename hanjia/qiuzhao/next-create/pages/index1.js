import React from 'react'
import Link from 'next/link'
import Router from 'next/Router'

const Home=()=>{
  function gotoA() {
    Router.push('/testA')
  }
  return (
    <>
    <div>我是首页</div>
    <div><Link href="/testA"><a>去A页面</a></Link></div>
    <div><Link href="/testB"><a>去B页面</a></Link></div>
    <div>
      <button onClick={gotoA}>testA</button>
    </div>
  </>
  )
}
//(
  // <>
  //   <div>我是首页</div>
  //   <div><Link href="/testA"><a>去A页面</a></Link></div>
  //   <div><Link href="/testB"><a>去B页面</a></Link></div>
  //   <div>
  //     <button onClick={()=>{Router.push('/testA')}}>testA</button>
  //   </div>
  // </>
//)
export default Home