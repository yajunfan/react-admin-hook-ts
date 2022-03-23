/* eslint-disable no-unreachable */
import React,{useContext} from "react";
import {navContext} from "./Context.jsx";
import {Breadcrumb,Button }  from 'antd';

function renderBread(selectKeys,navLists){
    const breadcrumbList:Array = [];
    navLists.forEach((item: { key: any; subs: { key: any; }[]; })=>{
        if(selectKeys.length>1){
            if(item.key === selectKeys[1]){
                breadcrumbList.push(item);
            }
            item.subs&&item.subs.forEach((isub: { key: any; })=>{
                if(isub.key === selectKeys[0]){
                    breadcrumbList.push(isub);
                }
            })
        }else{
            if(item.key === selectKeys[0]){
                breadcrumbList.push(item);
            }
        }
    })
    return breadcrumbList;
}
function CustomBreadcrumb(){
    const {selectKeys,navLists} = useContext(navContext);
    const breadcrumbList = renderBread(selectKeys,navLists);
    return (
        <div className="flex-sta-cen c-white">
           <Breadcrumb className="c-white">
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                {
                    breadcrumbList.map((item)=>{
                        return (
                            <Breadcrumb.Item className="c-white">{item.title}</Breadcrumb.Item>
                        )
                    })
                }
            </Breadcrumb>
            <Button type="primary">Primary Button</Button>
        </div>
    )
}   
export default CustomBreadcrumb;

