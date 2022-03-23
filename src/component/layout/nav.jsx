import React,{useContext} from "react";
import { Menu} from 'antd';
import {Link} from "react-router-dom"
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
function clickMenu(dispatch,keyPath,navLists,selectKeys){
    dispatch({type:'navClick',selectKeys:keyPath})
}
function Nav(){
    const { navLists,dispatch,selectKeys} = useContext(navContext);
    return (
        <div>
            <div style={{color:'white'}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} 
                    onClick={({key,keyPath})=>{clickMenu(dispatch,keyPath,navLists,selectKeys)}}>
                    {
                        navLists.map((item) => {
                            return item.subs&&item.subs.length?renderSubMenu(item):renderMenuItem(item);
                        })
                    }
                </Menu>
            </div>
        </div>
    )
}   
export default Nav;