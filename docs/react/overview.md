
## React 概览

### 1. 简介

#### 背景
1. 传统 UI 操作关注太多细节
    * jQuery DOM API 实现界面局部更新，繁琐
    * React 组件化
    * React 始终整体“刷新”页面，细节操作的复杂度解放出来
2. 应用程序状态分散在各处，难以追踪和维护
    * 单向数据流 Flux 架构


![Flux 架构](./assets/images/flux.png)

[React: 用于构建用户界面的 JavaScript 库](https://zh-hans.reactjs.org/)


1. 声明式  
当数据改变时 React 能有效地更新并正确地渲染组件  
以声明式编写 UI，可以让你的代码更加可靠，且方便调试
2. 组件化  
创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI
组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离  
3. 一次学习，随处编写  
无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码  
React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用



### 2. 基本概念

#### 基础原则

1. 完全由数据驱动
```
data = props | state
UI = f(data)
```
在界面真正开发之前，首先设计合理的数据结构，先不用纠结具体的 HTML 结构
2. 一切都是组件，组件是一等公民
```javascript
class Tracker extends React.Component {
  render() {
    return null;
  }
  
  componentDidMount() {
    const tracker = new Image();
    tracker.src = 'https://domain.name/Tracker.gif';
  }
}
```
```jsx
<div><Tracker /></div>
```
3. props 是组件间的基本通讯方式



1. 以组件的思维方式考虑 UI 的构建  

`props + state => view`  

* React 组件是一种状态机
* React 组件是一个函数,
* 单向数据绑定，props + event


2. 组件：单一职责原则

    * 每个组件只做一件事
    * 组件变得复杂，应该拆分成更小的组件


3. 设计原则

    * 保持接口小，props 数量要少
    * 根据数据边界来划分组件，充分利用组合（composition）
    * 把 state 往上层组件提取（lift up），让下层组件只需要实现为纯函数


4. 数据状态管理：DRY 原则

    * 能计算得到的状态就不要单独存储
    * 组件尽量无状态，通过 props 获取数据


#### [受控组件](https://zh-hans.reactjs.org/docs/forms.html) v/s [非受控组件](https://zh-hans.reactjs.org/docs/uncontrolled-components.html)

```jsx
<input
    type="text"
    value={this.state.value}
    onChange={(e) => 
        this.setState({ value: e.target.value })}
/>
<input
    type="text"
    ref={node => this.input = node}
/>
```


#### JSX 

不是模板语言，只是一种语法糖，动态创建组件的语法糖  
区别于模板语言（template、指令）DSL


```jsx
const name = 'zhangsan'
const element = <h1>Hello, {name}</h1>

const element = React.createElement(
    'h1',
    null,
    'Hello, ',
    name
)

// 自定义组件大写开头
<MyComponent foo={1 + 2 + 3 +4} />
const props = { firstName: 'Stephen', lastName: 'Curry' }
const greeting = <Greeting {...props} />
const element = <li>{props.message}</li>
const menuItem = <menu.Item />

```



1. 声明式创建界面，直观
2. 代码动态创建界面，灵活
3. 无需学习新的模板语言


#### 生命周期

![React Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


getDerivedStateFromProps

1. 当 state 需要从 props 中初始化时使用
2. 尽量不要使用（维护两者状态一致性会增加复杂度）
3. 每次 render 前都会调用（16.3 之后，setState 后调用）
4. 典型场景：受控表单控件获取默认初始值
 

componentDidMount

1. UI 首次渲染完成后调用
2. 只执行一次
3. 典型场景：获取外部资源（fetch/ajax）
4. SSR 下
 

componentWillUnmount

1. 组件移除时被调用
2. 典型场景：资源释放
3. react-router
 

getSnapshotBeforeUpdate

1. 在页面 render 之前调用，state 已经更新
2. 典型场景：获取 render 之前 DOM 状态
 

componentDidUpdate

1. 每次 UI 更新后被调用
2. 典型场景：页面需要根据 props 变化重新获取数据


shouldComponentUpdate

1. 决定 Virtual DOM 是否要重绘
2. 一般可以由  PureComponent 自动实现
3. 典型场景：性能优化



#### Virtual DOM 和 key 属性

1. JSX 运行基础：Virtual DOM
diff 算法 O(n)

广度优先分层比较，一层一层比较

1. DOM 节点的变动的方式相对来说比较固定，如不会发生跨层移动的情况，若跨层则不会复用
2. 类型相同的兄弟节点可以唯一标识，map key，用于 diff 中，提高性能


![Diff](./assets/images/diff.png)


#### 组件设计模式

1. 高阶组件
HOC(High Order Component)
高阶组件接受组件作为参数，并返回新的组件
```javascript
const EnhancedComponent = withHighOrderComponent(WrappedComponent)
// 权限认证
```
2. 函数子组件
依赖注入，组件分割实现，延迟依赖


#### Context API
16.3，组件间通信 provider consumer
props 向下一直传递，麻烦
应用：多主题、国际化


### 3. 基本使用


#### 脚手架

create-react-app, codesandbox


#### Redux

状态管理框架，基于 Flux 思想
@dan_abramov

组件内 state -> 全局唯一 store
组件间通信

Single Source of Truth
唯一状态的来源，使程序状态容易追踪，易于调试。undo/redo，redux dev tools 调试（diff）

state + action = new state
可预测性、纯函数更新 store
immutable


Store, Action, Reducer

```javascript
const store = createStore(reducer)

getState()
dispatch(action)
subscribe(listener)

// Action
{
    type: ADD_TODO,
    payload: {
        text: 'do my homework'
    }
}

// Reducer
const initialState = {
    todos: []
}
function todoReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.payload.text,
                        completed: false
                    }
                ]
            }
        default:
            return state
    }
}

import { combineReducers } from 'redux'
combineReducers({
    todos,
    counter
})

dispatch(addTodo(text))
bindActionCreator
```



```javascript
class TodoList extends Component {

}
import { connect } from 'react-redux'

const mapStateToProps = ({ todos }) => ({
    todos
})
const mapDispatchToProps = (dispatch) => ({

})

// 高阶组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
```

异步 Action
1. 异步 Action 不是特殊 Action，而是多个同步 Action 的组合使用
2. 中间件在 dispatch 中截获 Action 做特殊处理 side-effects

Redux 中间件
1. 截获 Action
2. 发出 Action

[Redux 异步请求](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production)


http://arqex.com/991/json-editor-react-immutable-data

1. 性能优化
2. 易于调试和跟踪
3. 易于推测


1. { ... }, Object.assign
2. immutability-helper
3. immer


react-router
1. 声明式路由定义
2. 动态路由

1. URL
2. hash
3. 内存路由


基于路由配置进行资源组织

1. 实现业务逻辑的松耦合
2. 易于扩展、重构和维护
3. 路由层面实现 Lazy Load


https://github.com/pillarjs/path-to-regexp


异步渲染


时间分片（Time Slicing）

DOM 操作的优先级低于浏览器原生行为，例如键盘和鼠标输入，从而保证操作的流畅

渲染挂起（Suspence）

虚拟 DOM 节点可以等待某个异步操作的完成，并指定 timeout，之后才完成真正的渲染


时间分片

1. 虚拟 DOM 的 diff 操作可以分片进行
2. React 新 API：unstable_deferredUpdates
3. Chrome 新 API：requestIdleCallback


https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html


渲染挂起

1. 新内置组件：Timeout
2. unstable_deferredUpdates

