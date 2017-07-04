import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { routes } from './route'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'

// 导入全局css
import './styles/css/global.scss'
import './styles/css/global.less'

// tap事件初始化
injectTapEventPlugin()

// 创建 store
const store = configureStore()

// 渲染路由
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>
), document.getElementById('app'))
