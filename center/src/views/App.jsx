import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import { shouldComponentUpdate } from 'react-immutable-render-mixin'
import Cookie from '../utils/Cookie'
import Runtime from '../utils/Runtime'
import Easemob from '../utils/Easemob'
import Navigator from '../components/common/Navigator'
import Footer from '../components/common/Footer'
import SideMenu from '../components/common/SideMenu'
import NoCardBound from '../components/NoCardBound'
import CardBindDialog from '../components/CardBindDialog'
import NickNameDialog from '../components/NickNameDialog'
import HeadPicDialog from '../components/HeadPicDialog'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
    this.state = {
      showNickNameDialog: false,
      showHeadPicDialog: false
    }
  }

  componentDidMount () {
    // 同步 cookie 信息
    this.props.actions.syncCookieInfo()
    // 加载用户信息
    this.props.actions.loadUserInfo(this.setEasemob.bind(this))
    // 加载用户银行卡信息
    this.props.actions.loadUserBankCardList()
  }

  setEasemob(data) {
    const em = new Easemob({
      user: data.uid,
      listeners: {
        onOpened: ()=>{
          console.log('opened')
        },
        onClosed: ()=>{
          console.log('closed')
        },
        onOnline: ()=>{
          console.log('online')
        },
        onOffline: ()=>{
          console.log('offline')
        },
        onTextMessage: (message)=>{
          console.log(message)
          const msgType = message.ext.type + ''
          let eventHandlers = this.props.im.get('events').get(msgType)
          if (eventHandlers) {
            eventHandlers(message)
          }
        }
      }
    })
    em.login()
  }

  // 打开昵称设置对话框
  openNickNameDialog() {
    this.setState({
      showNickNameDialog: true
    })
  }

  openHeadPicDialog() {
    this.setState({
      showHeadPicDialog: true
    })
  }

  // 关闭绑卡对话框
  closeBindCardDialog() {
    this.props.actions.showCardBindDialog(false)
  }

  // 设置昵称成功之后会调用此方法关闭对话框
  closeNickNameDialog(nickName) {
    this.props.actions.setNickName(nickName)
    this.setState({
      showNickNameDialog: false
    })
  }

  // 退出
  handleLogout () {
    const domain = Runtime.getDomain()
    const cookieOptions = {
      domain: domain,
      path: '/'
    }
    Cookie.remove('uid', cookieOptions)
    Cookie.remove('sid', cookieOptions)
    //Cookie.remove('userType', cookieOptions)
    this.props.actions.syncCookieInfo()
    location.href = '//www.' + domain
  }

  render () {
    const baseInfo = this.props.user.get('baseInfo')
    const userHeadImage = baseInfo.get('headImage')
    const userNickName = baseInfo.get('nickName')
    const realNameAuth = baseInfo.get('authStatus')
    return (
      <div>
        <Navigator user={this.props.user} />
        <div className="main">
          <NoCardBound visible={this.props.user.get('baseInfo').get('authStatus') != 1} onBindClick={this.props.actions.showCardBindDialog} />
          <SideMenu
            userHeadImage={userHeadImage}
            userNickName={userNickName}
            openNickNameDialog={this.openNickNameDialog.bind(this)}
            openHeadPicDialog={this.openHeadPicDialog.bind(this)} />
          <div className="content">
            {this.props.children}
          </div>
        </div>
        <Footer />
        <CardBindDialog visible={this.props.global.get('showCardBindDialog')} sid={this.props.user.get('cookieInfo').get('sid')} onCancel={this.closeBindCardDialog.bind(this)} />
        <NickNameDialog visible={this.state.showNickNameDialog} onOk={this.closeNickNameDialog.bind(this)} onCancel={()=>{this.setState({ showNickNameDialog: false })}} nickName={baseInfo.get('nickName')} />
        <HeadPicDialog visible={this.state.showHeadPicDialog} onCancel={()=>{this.setState({ showHeadPicDialog: false })}} userHeadImage={userHeadImage}/>
      </div>
    )
  }
}

export default connect(state => ({
  global: state.global,
  user: state.user,
  im: state.im
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(App)
module.exports = exports['default']
