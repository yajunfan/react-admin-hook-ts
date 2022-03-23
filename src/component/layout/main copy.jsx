import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "./main.scss";
import { Layout, Menu, Breadcrumb } from 'antd';
import {CodeSandboxOutlined } from "@ant-design/icons";
import Home from "../../router/home/index"
import Tools from "../../router/tools/index"
const { Header, Content, Footer } = Layout;
// eslint-disable-next-line import/first
// import LoadableComponent from '../../utils/LoadableComponent'
// import PrivateRoute from '../PrivateRoute/index'
// const Home = LoadableComponent(()=>import('../../router/home/index'))  
// const Tools = LoadableComponent(()=>import('../../router/tools/index'))  

function Main() {
    const clientHeight:number = document.body.clientHeight;
    const maxHeight:string = clientHeight +"px";
    const contentHeight:string = clientHeight-135 +"px";
    const navLists:any[]=[
        {
            key:"tools",
            name:"可视化编辑",
            component:Tools,
        },
        {
            key:"home",
            name:"可视化大屏",
            component:Home
        }
    ]
  return (
    
        <div className="Main" style={{height:maxHeight}}>
            <Router>
                <Layout className='layout'>
                    <Header className="layout-header">
                        <div className="logo">
                            <CodeSandboxOutlined/>
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            {
                                navLists.map((item) => {
                                    return <Menu.Item key={item.key}>
                                        <Link to={"/"+item.key}>{item.name}</Link>
                                    </Menu.Item>;
                                })
                            }
                        </Menu>
                    </Header>
                    <Content className="layout-content" style={{height:contentHeight }}>
                        <Breadcrumb className='flex-sta-cen' style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">
                            {/* <Route key="home"  path="/home" component={Home}></Route>
                            <Route key="tools"  path="/tools" component={Tools}></Route> */}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Visual ©2022 Created by React</Footer>
                </Layout>
            </Router>
        </div>
        
    
  );
}

export default Main;
