import React,{useState,useEffect} from 'react'
import 'antd/dist/antd.css'
import {Card,Input,Button,Spin,message} from 'antd'
import '../static/css/Login.css'
import { KeyOutlined,UserOutlined } from '@ant-design/icons';
import axios from 'axios'
import servicePath from '../config/apiUrl'
function Login(props) {

  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  useEffect(()=>{
  
  },[])

const checkLogin=()=>{
  setIsLoading(true)
  // setTimeout(()=>{
  //   setIsLoading(false)
  // },1000)
  if(!userName) {
    message.error('用户名不能为空')
    setTimeout(()=>{
      setIsLoading(false)
    },500)
    return false
  }else if(!password) {
    message.error('密码不能为空')
    setTimeout(()=>{
      setIsLoading(false)
    },500)
    return false
  }
  let dataProps = {
    'userName':userName,
    'password':password
  }
  axios({
    method:'post',
    url:servicePath.checkLogin,
    data:dataProps,
    withCredentials:true

  }).then(
    res=>{
      console.log(res)
      setIsLoading(false)
      if(res.data.data=='登录成功'){
        localStorage.setItem('openId',res.data.openId)
        props.history.push('/index')
      }else {
        message.error('用户名密码错误')
      }
    }
  )
}
  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="JSpang blog System" bordered={true} style={{width:400}}>
          <Input
            id="userName"
            size="large"
            placeholder="Enter Your userName"
            // prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}
            onChange={(e)=>{setUserName(e.target.value)}}
            />
            {/* <UserOutlined/> */}
            <br/><br/>
            <Input.Password
            id="password"
            size="large"
            placeholder="Enter Your password"
            // prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}}/>}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
              {/* <KeyOutlined/></Input.Password> */}
            <br/><br/>
            <Button type="primary" size="large" block onClick={checkLogin}>Login in</Button>
        </Card>

      </Spin>
    </div>
  )
}

export default Login