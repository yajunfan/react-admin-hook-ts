# Getting Started with Create React App

## 项目开发过程，
### 1.安装使用ts的react模板
```
antd 基于最新稳定版本的 TypeScript（>=4.0.0），请确保项目中使用匹配的版本。

$ yarn create react-app antd-demo-ts --template typescript
或者是
npx create-react-app antd-demo-ts --template typescript

```
### 2.安装antd并安装icon使用组件
```
 yarn add antd
 yarn add @ant-design/icons
```
### 3.安装scss，并使用modele.scss
```
 yarn add scss
```
### 4.安装react-loadable和nprogress 用于页面切换和请求数据时，浏览器的顶部出现的进度条
```
 yarn add nprogress
 yarn add react-loadable
```

## 错误集合
### index.tsx:24 Uncaught Error: useHref() may be used only in the context of a <Router> component.
```
原因是在 Menu.Item中写入了Link（Router 组件外面使用了 Link 组件，所以导致报错）
<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    {
        navLists.map((item) => {
            return <Menu.Item key={item.key}>
                <Link to={"/"+item.key}>{item.name}</Link>
            </Menu.Item>;
        })
    }
</Menu>
解决方式
import {BrowserRouter as Router,Link} from "react-router-dom"; 记得引入
原来是在最外层没有使用Router这个标签
return (
    <Router>
        do something
    </Router>
```

### Error: useRoutes() may be used only in the context of a <Router> component
```
原因是使用的react-router-domV6 ，直接切换成v5的话就没有这个问题，如果使用v6版本的话，需要使用useRoutes这种方式
引入的组件
import Home from "../../router/home/index";
import Visual from "../../router/tools/index";

V5模式
import {BrowserRouter as Router,Route} from "react-router-dom"
return (
    <Router>
        <Route key="home" exact path="/home"  component={Home}/>
        <Route key="visual/list" exact path="/home/visual/list"  component={Visual}
    </Router>
)

V6模式(解决方式)
import {BrowserRouter as Router,useRoutes} from "react-router-dom"
const GetRoutes  = ()=>{
    let routers = useRoutes([
        { path: "/home", element: <Home /> },
        { path: "/home/visual/list", element: <Visual /> }
    ]);
    return routers;
}

return (
    <Router>
        <GetRoutes />
    </Router>
)
注意之前使用的是component，现在是element
```