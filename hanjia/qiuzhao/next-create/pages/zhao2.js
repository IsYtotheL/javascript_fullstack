import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'
//getInitialProps
const Zhao2 = ({router})=> {
  return(
    <>
    <div>{router.query.name}演员</div>
    <Link href="/index2"><a>返回首页</a></Link>
    </>
  )
}
Zhao2.getInitialProps = async()=>{
  const promise = new Promise((resolve)=>{
    axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
      (res)=>{
        console.log('远程数据结果:',res)
        resolve(res.data.data)
      }
    )
  })
  return await promise
}

export default withRouter(Zhao2)