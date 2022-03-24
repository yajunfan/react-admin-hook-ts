import React,{useState,useEffect}from 'react';
import {DraggableArea} from 'react-draggable-tags';
import styles from  "./index.module.scss"

import { Card, Avatar,Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import FixedModule from "./component/fixedModule";

import {m} from "../../mixin/minix"
const styless = {
    test:m({$margin:'20px',padding:"10px"},{border:"1px solid red"})
}
const { Meta } = Card;

function Home(props) {
    const [dashboardLists, setDashboardLists] = useState<Array<{name: string; id: number; config: []}>>([]);
    useEffect(() => {
        if (dashboardLists.length === 0) {
            setDashboardLists([
                {name:"测试1",id:1,config:[]},
                {name:"测试2",id:2,config:[]},
                {name:"测试3",id:3,config:[]},
            ])
        }
    }, [dashboardLists])
    const onChange = (tags) => {
        setDashboardLists(tags)
    }
    const itemRender = ({ tag, index }) => {
        return (
            <Card
                className={styles.card}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={tag.name}
                    description="This is the description"
                />
            </Card>
        )
    }
    
    const [visible,setVisible] = useState(false);

    const handleCancle = ()=>{
        setVisible(false);
    }
    return (
        <div className={styles['dashboard-div'] }>
            <div className='flex-sta-cen'>
                <Button className={styles.btn} type="primary" >新建可视化</Button>   
                {/* onClick={()=>{dispatch({type:'toggleModel',visible:true})}} */}
                <Button style={styless.test} type="primary" onClick={()=>{setVisible(true)}} >选取已有模板 </Button>   
            </div>
            <div className='flex-sta-cen'>
                <DraggableArea   tags={dashboardLists} 
                    render={itemRender}
                    onChange={onChange}
                /> 
            </div>
            {/* 可选模板 */}
            {
               visible? <FixedModule visible handleCancle={handleCancle}/>:""
            }
            
        </div>
    );
}

export default Home;

