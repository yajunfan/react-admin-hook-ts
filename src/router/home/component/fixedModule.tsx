import React from "react"
import { Modal } from 'antd';
import Tem1 from "./templete/tem1"


function FixedModule(props){
    const templeteLists:any[] = [
        {
            id:1,
            name:"模板1",
            templete:<Tem1/>
        },
        {
            id:2,
            name:"模板2",
            templete:<Tem1/>
        },
        {
            id:3,
            name:"模板3",
            templete:<Tem1/>
        }
    ];
    const handleCancle = ()=>{
        props.handleCancle(false);
    }
    
    return (
        <>
            <Modal title="选取已有模板" width={1000} visible={props.visible} onOk={handleCancle} onCancel={handleCancle}>
                <ul className="model-tem-ul flex-bet-cen">
                    {
                        templeteLists.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <h4>{item.name}</h4>
                                    {item.templete}
                                </li>
                            )
                        })
                    }
                </ul>
            </Modal>
        </>
    )
} 
export default FixedModule;