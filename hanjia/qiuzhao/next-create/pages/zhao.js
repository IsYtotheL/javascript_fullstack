import {withRouter} from 'next/router'
import Link from 'next/link'

const Zhao = ({router})=> {
  return(
    <>
    <div>{router.query.name}演员</div>
    <Link href="/index2"><a>返回首页</a></Link>
    </>
  )
}

export default withRouter(Zhao)