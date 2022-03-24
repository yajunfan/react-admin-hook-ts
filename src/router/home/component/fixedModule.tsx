import React from "react"
import { Modal, Button } from 'antd';
function FixedModule(props){
    const handleCancle = ()=>{
        props.handleCancle(false);
    }
    return (
        <>
            <Modal title="Basic Modal" visible={props.visible} onOk={handleCancle} onCancel={handleCancle}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <Button type="primary">确认</Button>
            </Modal>
        </>
    )
} 
export default FixedModule;