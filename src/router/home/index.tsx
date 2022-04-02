import React,{useState,useEffect}from 'react';
import GridLayout from "react-grid-layout";

import styles from  "./index.module.scss"
import  '/node_modules/react-grid-layout/css/styles.css'
import  '/node_modules/react-resizable/css/styles.css';

import { Card, Avatar,Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// 子组件
import FixedModule from "./component/fixedModule";
//图片
import {markPng,avatarSvg} from "./img";
const { Meta } = Card;

function Home(props) {
    const [dashboardLists, setDashboardLists] = useState<Array<{name: string; id: number; i:string;x:number;y:number;w:number;h:number;config: []}>>([]);
    useEffect(() => {
        if (dashboardLists.length === 0) {
            setDashboardLists([
                {name:"测试1",id:1, i: "a", x: 0, y: 0, w: 3, h: 11,config:[]},
                {name:"测试2",id:2, i: "b", x: 3, y: 0, w: 3, h: 11, config:[]},
                {name:"测试3",id:3, i: "c", x: 6, y: 0, w: 3, h: 11,config:[]},
            ])
        }
        console.log(111,dashboardLists)
    }, [dashboardLists])
    const itemRender = ( tag ) => {
        return (
            <Card
                className={styles.card}
                cover={
                <img
                    alt="example"
                    src={markPng}
                />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                    avatar={<Avatar src={avatarSvg} />}
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
                <Button className={styles.btn} type="primary" onClick={()=>{setVisible(true)}} >选取已有模板 </Button>   
            </div>
            {/* className={`flex-sta-sta`} */}
            <div className={styles['grid-div'] }>
                <GridLayout
                    className={` layout`}
                    layout={dashboardLists}
                    cols={12}
                    rowHeight={24}
                    width={1400}
                    preventCollision={true}
                >
                    {
                        dashboardLists.map((item,index)=>{
                            return (
                                <div key={item.i}>{itemRender(item)}</div>
                                // {itemRender(item)}
                            )
                        }) 
                    }
                </GridLayout>
              
            </div>
            {/* 可选模板 */}
            {
               visible? <FixedModule visible handleCancle={handleCancle}/>:""
            }
            
        </div>
    );
}

export default Home;

