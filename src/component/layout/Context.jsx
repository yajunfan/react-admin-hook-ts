import React,{createContext,useReducer} from "react"
import {reducer} from "./reducer";
export const navContext = createContext({});

export const Context=(props:any)=>{
    const [selectKeys,dispatch] = useReducer(reducer,[]);;
    const navLists = [
        {
            title: '首页大屏',
            icon: 'home',
            key: '/home'
        },
        {
            title: '测试',
            icon: 'test',
            key: '/test'
        },
        {
            title: '可视化',
            icon: 'visual',
            key: '/home/visual',
            subs: [
                {key: '/home/visual/list', title: '列表页', icon: '',},
                {key: '/home/visual/custom', title: '自定义页面', icon: '',},
            ]
        }
    ];
    return (
        <navContext.Provider value={{selectKeys,navLists,dispatch}}>
            {props.children}
        </navContext.Provider>
    )
}
