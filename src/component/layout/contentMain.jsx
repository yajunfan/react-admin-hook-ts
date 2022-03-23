import React from "react";
import {useRoutes} from "react-router-dom"
import CustomBreadcrumb from "./customBreadcrumb"
import Home from "../../router/home/index";
import Visual from "../../router/tools/index";

const GetRoutes  = ()=>{
    let routers = useRoutes([
        { path: "/home",exact:true, element: <Home /> },
        { path: "/test", exact:true,element: <Visual /> },
        { path: "home/visual/list", exact:true,element: <Visual /> }
    ]);
    return routers;
}
function ContentMain(){
    return (
        <div>
            <CustomBreadcrumb ></CustomBreadcrumb>
            <GetRoutes />   
        </div>
    )
}
export default ContentMain;