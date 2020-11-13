import { Layout, Menu, Breadcrumb } from 'antd';
import React,{useState} from 'react'
import '../static/css/AdminIndex.css'
import {Route} from 'react-router-dom'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PropertySafetyFilled,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// class SiderDemo extends React.Component {
  // state = {
  //   collapsed: false,
  // };
function AdminIndex(props) {
  const [collapsed,setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    // console.log(collapsed);
    // this.setState({ collapsed });
    setCollapsed(collapsed)
  };
const handleClickArticle = e=>{
  if(e.key=='addArticle'){
    props.history.push('/index/add')
  }else{
    props.history.push('/index/list')
  }
}
  // render() {
  //   const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              工作台
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              添加文章
            </Menu.Item>
            <SubMenu key="sub1" 
            icon={<UserOutlined />} 
            title="文章管理"
            onClick={handleClickArticle}
            >
              <Menu.Item key="addArticle">添加文章</Menu.Item>
              <Menu.Item key="articleList">文章列表</Menu.Item>
              {/* <Menu.Item key="5">Alex</Menu.Item> */}
            </SubMenu>
            {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            <Menu.Item key="9" icon={<FileOutlined />}>
              留言管理
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>RYL</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div>
                <Route path="/index/" exact component={AddArticle}/>
                <Route path="/index/add/" exact component={AddArticle}/>
                <Route path="/index/list/" exact component={ArticleList}/>
                <Route path="/index/add/:id" exact component={AddArticle}/>


              </div>
              {/* Bill is a cat. */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
// }

// ReactDOM.render(<SiderDemo />, mountNode);

export default AdminIndex