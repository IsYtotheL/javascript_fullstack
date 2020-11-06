// import Head from 'next/head'
import MyHeader from '../components/myheader'
import '../styles/test.css'
import {Button} from 'antd'
// import {Button} from 'antd'
// Module not found: Can't resolve '../styles/test'
function Header() {
  return (
    <>
      {/* <Head>
        <title>孩子你是最棒的</title>
        <meta charSet='utf-8'/>
      </Head> */}
      <MyHeader/>
      <div>Hello</div>
      <div><Button>我是按钮</Button></div>
    </>
  )
}
export default Header