import React from 'react';
import "./index.scss"
function Home() {
    type List = {
        name: string;
        id: Number;
        config : [];
    }
    const dashboardLists:List[] = [
        {name:"测试1",id:1,config:[]},
        {name:"测试2",id:2,config:[]},
        {name:"测试3",id:3,config:[]},
    ]
  return (
    <div className="dashboard-div">
        <ul className="dashboard-ul">
            {
                dashboardLists.map((item)=>{
                    return (
                        <li>{item.name}</li>
                    )
                })
            }
           
        </ul>
    </div>
  );
}

export default Home;
