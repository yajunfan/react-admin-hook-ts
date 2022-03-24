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
### 更换主题
```
1.根据官方文档，安装craco 以及 craco-less
    yarn add @craco/craco
    yarn add craco-less
2.在package.json中修改
    "scripts": {
        -   "start": "react-scripts start",(删除)
        -   "build": "react-scripts build",(删除)
        -   "test": "react-scripts test",(删除)
        +   "start": "craco start",(替换值)
        +   "build": "craco build",(替换值)
        +   "test": "craco test",(替换值)
    }
3.在项目根目录创建一个 craco.config.js
    const CracoLessPlugin = require('craco-less');

    module.exports = {
    plugins: [
        {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
            lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' }, 
                javascriptEnabled: true,
            },
            },
        },
        },
    ],
    };
4. 将src/App.css 文件修改为 src/App.less，对应的app.jsx中
    - import './App.css';(删除)
    + import './App.less';(替换值)
5. 重启项目
    yarn start
```
## 使用style-mixin  (用于React的样式混合)
```
 安装 yarn add style-mixin
 使用方式有两种，首先是在src文件夹下新建mixin的文件夹
 第一种:新建一个minixscss.ts
 第二种：新建一个minix.scss

```
### 第一种:在mixin文件夹下新建一个minixscss.ts
```
minixscss.ts
    import mixin from 'style-mixin';
    可以创建多个对象,如下
    export const m = mixin({
        margin: function($margin = '10px') {
            return {
                'margin':$margin
            }
        },
        marginRight:function($right = '10px') {
            return {
                'marginRight':$right
            }
        },
    });

    export const p = mixin({
        padding: function($padding = '10px') {
            return {
                'margin':$padding
            }
        }
    });
使用的组件页面，比如   home.tsx中
import {m} from "../../mixin/minix"
const styles = {
    test:m({$margin:'20px'}) //如果需要修改值这么写
    test:m('$margin', { border:'1px solid red' });
}
<Button style={styless.test} type="primary" >点击 </Button>   

```

## 错误集合
### 1.index.tsx:24 Uncaught Error: useHref() may be used only in the context of a <Router> component.
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

### 2.Error: useRoutes() may be used only in the context of a <Router> component
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

### 3.react-dom.development.js:67 Warning: Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.* Move data fetching code or side effects to componentDidUpdate.
### * If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

### Please update the following components: o

```
使用的react 是17.0.2
在使用DraggableArea这个组件的时候，会报这个错 ，拖拽导致数据发生变化，拒了解，是组件自己的异常问题，目前还未解决
当前的解决方式就是 ，将src/index.js或者src/index.jsx中的 <React.StrictMode> 删除，虽然这不是一个好主意，但是确实有效
```