import React, { PropTypes } from 'react'
import ApiCaller from '../../utils/ApiCaller'
import Api from '../../store/constants/Api'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions'
import { bindActionCreators } from 'redux'
import Runtime from '../../utils/Runtime'
import Cookie from '../../utils/Cookie'

const domain = Runtime.getDomain()
const cookieOptions = {
  path: '/',
  domain: Runtime.getDomain()
}

class UnLogined extends React.Component{
  render(){
    return(
      <li className='logined-li'>
        <span style={{margin:'0 10px 0 50px'}}><a href={'//user.' + domain + '/login.html?url=' + location.href}>登录</a></span>
        <i>|</i>
        <span style={{margin:'0 10px'}}><a href={'//user.' + domain + '/reg.html'}>注册</a></span>
      </li>
    )
  }
}

class Logined extends React.Component{
  handleLogout() {
    this.props.handleLogout()
  }

  formatPhone(phone){
    phone = phone.toString()
    if(phone.length != 11){
      return phone
    }
    phone = phone.substr(0,3) + '****' + phone.substr(7)
    return phone
  }

  render () {
    const cookieInfo = this.props.user.get('cookieInfo')
    const centerLink = '//user.' + domain + '/center/'
    const helpLink = '//www.' + domain + '/help/'
    return (
      <li className='logined-li' style={{minWidth:120}}>
        <span style={{ color:'#fff',marginRight:30 }}>|</span>
        <a style={{marginRight:20}} href={'//user.' + domain + '/center'}>{this.props.data.nickName || this.formatPhone(this.props.data.phone)}</a>
        <a href='javascript:void(0)' onClick={this.handleLogout.bind(this)} style={{ fontSize:'14px' }}>退出</a>
      </li>
    )
  }
}
class Navigator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
      logined: false
    }
  }

  componentDidMount(){
    const nickName = Cookie.get('nickName', cookieOptions)
    if(nickName){
      const state = this.state
      state.data.nickName = decodeURIComponent(nickName)
      state.data.phone = Cookie.get('phone', cookieOptions) || ''
      state.logined = true
      this.setState(state)
    }
    this.fetch()
  }

  fetch(){
    ApiCaller.call(Api.user.getInfo,{
      uid: Cookie.get('uid', cookieOptions)
    },(res) => {
      const state = this.state
      if(res.code == 0){
        state.data = res.data
        state.logined = true
      }else if(res.code == -2){
        state.logined = false
      }
      this.setState(state)
    })
  }

  handleLogout(){
    Cookie.remove('uid', cookieOptions)
    Cookie.remove('sid', cookieOptions)
    Cookie.remove('userType', cookieOptions)
    this.props.actions.syncCookieInfo()
    this.fetch()
  }

  render () {
    return (
      <div className='navigator'>
        <div className='main-page'>
          <div>
            <img style={{ float:'left',height:60 }} src="data:image/png;base64,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"/>
          </div>
          <div>
            <ul className='top-list'>
              <li>
                <span><a href={'//www.' + domain}>首页</a></span>
              </li>
              <li>
                <span><a href={'//pb.' + domain +'/real/trade'}>A股策略</a></span>
              </li>
              <li>
                <span><a href={'//pb.' + domain + '/sim'}>炒股大赛</a></span>
              </li>
              <li>
                <span><a href={'//pb.' + domain + '/sim/subscribe'}>高手跟踪</a></span>
              </li>
              { this.state.logined ? <Logined {...this.props} data={this.state.data} handleLogout={this.handleLogout.bind(this)}/> : <UnLogined {...this.props} />}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  global: state.global,
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Navigator)
module.exports = exports['default']
