import React,{useContext} from "react";
import { Menu} from 'antd';
import {BrowserRouter as Router,Link} from "react-router-dom"
import {navContext} from "./Context.jsx";
function renderMenuItem({key, icon, title}){
    return (
        <Menu.Item key={key}>
            <Link to={key}> 
                <span> {title}</span>
            </Link>
        </Menu.Item>
    )
}
function renderSubMenu({key, icon, title,subs}){
    return (
        <Menu.SubMenu key={key} title={<span>{title}</span>}>
        {
          subs && subs.map(item => {
            return item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
}
function CustomMenu(){
    const {navLists,dispatch} = useContext(navContext);
    
    return (
            <div style={{color:'white'}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/home']} 
                     onClick={(data)=>{dispatch({type:'navClick',openKeys:data.keyPath})}}>
                    {
                        navLists.map((item) => {
                            return item.subs&&item.subs.length?renderSubMenu(item):renderMenuItem(item);
                        })
                    }
                </Menu>
            </div>
    )
}   

export default CustomMenu;