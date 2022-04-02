import React from "react"
import styles from "./tem.module.scss"
import { Row, Col,Empty} from 'antd';

function Tem1(){
    const leftLists:any[]=[1,2,3];
    const centerLists:any[]=[1,2];
    const rightLists:any[]=[1,2,3];
    return (
        <>
            <div className={styles["tem1-div"]}>
                <Row gutter={6}>
                    <Col className="gutter-row" span={6}>
                        <ul className={styles["tem1-ul"]}>
                            {
                                leftLists.map((item,index)=>{
                                    return (
                                        <li key={index} className={styles["tem1-li"]}>
                                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                    <Col className="gutter-row" span={12}>
                    <ul className={styles["tem1-ul"]}>
                            {
                                centerLists.map((item,index)=>{
                                    return (
                                        <li key={index} className={`${styles["tem1-li"]} ${styles["tem1-cen-li"]}`}>
                                           <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                    <Col className="gutter-row" span={6}>
                    <ul className={styles["tem1-ul"]}>
                            {
                                rightLists.map((item,index)=>{
                                    return (
                                        <li key={index} className={styles["tem1-li"]}>
                                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                   
                </Row>    
            </div>
        </>
    )
}
export default Tem1;