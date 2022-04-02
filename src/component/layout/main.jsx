import React from 'react';
import "./main.scss";
import { Layout} from 'antd';
import {CodeSandboxOutlined } from "@ant-design/icons";
import Nav from "./nav";
import ContentMain from "./contentMain";
import {Context} from "./Context.jsx";
const { Header, Content} = Layout;


function Main() {
    const clientHeight:number = document.body.clientHeight;
    const maxHeight:string = clientHeight +"px";
    const contentHeight:string = clientHeight-45 +"px";
  return (
    <div className="Main" style={{height:maxHeight}}>
            <Layout className='layout' theme="dark">
                <Context>
                    <Header className="layout-header">
                        <div className="logo">
                            <CodeSandboxOutlined/>
                        </div>
                        <Nav/>
                    </Header>
                    <Content className="layout-content" style={{height:contentHeight }}>
                        <ContentMain/>
                    </Content>
                </Context>
                {/* <Footer style={{ textAlign: 'center' }}>Visual ©2022 Created by React</Footer> */}
            </Layout>
    </div>
  );
}

export default Main;
