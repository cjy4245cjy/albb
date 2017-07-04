import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import { shouldComponentUpdate } from 'react-immutable-render-mixin'
import { TopBar, Navigator, Footer, Login } from '../components/common'
import Banner from '../components/Banner'
import { Tabs, Tab } from 'material-ui'
import Cookie from '../utils/Cookie'
import Runtime from '../utils/Runtime'

import MCustomerTheme from '../styles/MCustomerTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(MCustomerTheme)
    }
  }

  componentDidMount () {
    // 载入百度统计
    Runtime.initBaiduCount()
    //同步cookie推广码
    Runtime.initSpread()
    // 同步 cookie
    this.props.actions.userSyncCookieInfo()
  }

  handleLogin(data) {
    // 同步 cookie
    this.props.actions.userSyncCookieInfo()
    // 隐藏登录框
    this.hideLogin()
  }

  showLogin() {
    this.props.actions.globalSwitchLoginVisible(true)
  }

  hideLogin() {
    this.props.actions.globalSwitchLoginVisible(false)
  }

  handleLogout() {
    const cookieOptions = {
      path: '/',
      domain: Runtime.getDomain()
    }
    Cookie.remove('uid', cookieOptions)
    Cookie.remove('sid', cookieOptions)
    Cookie.remove('userType', cookieOptions)
    this.props.actions.userSyncCookieInfo()
  }

  render () {
    const pathname = location.pathname
    let html
    if(pathname == '/home'){
      html = (
        <div>
          {this.props.children}
        </div>
      )
    }else{
      html = (
        <div>
          <Navigator user={this.props.user} showLogin={this.showLogin.bind(this)} />
          {this.props.children}
          <Footer />
          <Login visible={this.props.global.get('loginVisible')} onLogin={this.handleLogin.bind(this)} onCancel={this.hideLogin.bind(this)} />
        </div>
      )
    }
    return (
      <div>
        {html}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
}

export default connect(state => ({
  global: state.global,
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(App)
module.exports = exports['default']
