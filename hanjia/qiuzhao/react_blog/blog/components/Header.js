import React,{useState,useEffect} from 'react'
import '../static/style/components/header.css'
import {SmileOutlined,YoutubeOutlined,HomeOutlined } from '@ant-design/icons';
import {Row,Col, Menu} from 'antd' 
import Router from 'next/router'
import Link from 'next/link'
import servicePath from '../config/apiUrl'
import axios from 'axios'
const Header = () => {

    const [navArray , setNavArray] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
           const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()


    },[])

    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
  
  
    }

    return(
        <div className="header">
        <Row type="flex" justify="center">
            <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">谢怜</span>
                <span className="header-txt">天官赐福，百无禁忌</span>
            </Col>
    
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal" onClick={handleClick}>
                    <Menu.Item key="0">
                    <HomeOutlined />
                        博客首页
                    </Menu.Item>

                    
                    {
                        navArray.map((item)=>{
                            return(
                                <Menu.Item key={item.Id}>

                                    {/* <Icon type={item.icon}/> */}
    
                                    {item.typeName}
                                </Menu.Item>
                            )
                        })
                    }
                    {/* <Menu.Item key="video">
                    <YoutubeOutlined />
                        视频
                    </Menu.Item> */}
                    {/* <Menu.Item key="life">
                    <SmileOutlined />
                        生活
                    </Menu.Item> */}
                </Menu>
            </Col>
        </Row>
     </div>
    )
}


export default Header
