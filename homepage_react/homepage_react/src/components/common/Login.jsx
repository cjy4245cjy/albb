import React from 'react'
import Cookie from '../../utils/Cookie'
import Runtime from '../../utils/Runtime'
import ApiCaller from '../../utils/ApiCaller'
import Security from '../../utils/Security'

const cookieOptions = {
  domain: Runtime.getDomain(),
  path: '/',
  expires: 1
}
export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      confirmLoading: false,
      form: {
        user: '',
        pass: ''
      },
      alert: {
        msg: '',
        visible: false
      }
    }
  }

  componentDidMount () {
    // 从 cookie 中取出存储的手机号码
    const phone = Cookie.get('phone', cookieOptions)
    if (phone) {
      const state = this.state
      state.form.user = phone
      this.setState(state)
    }
  }

  handleLogin () {
    const user = this.state.form.user
    const pass = this.state.form.pass
    if (this.state.confirmLoading || user == '' || pass == '')
      return

    const state = this.state
    state.confirmLoading = true
    this.setState(state)
    ApiCaller.call({url: '/services/user/login', type: 'post', xform: true}, {
      userName: user,
      password: Security.encryptMd5(pass)
    }, (res)=>{
      state.confirmLoading = false
      this.setState(state)
      if (res.code == 0) {
        // 登录成功
        Cookie.set('uid', res.data.uid, cookieOptions)
        Cookie.set('sid', res.data.sid, cookieOptions)
        Cookie.set('phone', user, cookieOptions)
        //Cookie.set('userType', res.user.userAttach.userType==1 ? 1 : 0, cookieOptions)

        this.props.onLogin(res)
      } else {
        this.showAlert(res.msg)
      }
    })
  }

  handleRegClick () {
    location.href = 'http://user.' + Runtime.getDomain() + '/reg.html'
  }

  handleUserChange (e) {
    const val = e.target.value

    if (val == '')
      this.showAlert('请输入您的账号或手机号码')
    else
      this.resetAlert()

    const state = this.state
    state.form.user = val
    this.setState(state)
  }

  handlePassChange(e) {
    const val = e.target.value

    if (val == '')
      this.showAlert('请输入您的登录密码')
    else
      this.resetAlert()

    const state = this.state
    state.form.pass = val
    this.setState(state)
  }

  showAlert(msg) {
    const state = this.state
    state.alert = {
      msg: msg,
      visible: true
    }
    this.setState(state)
  }

  resetAlert() {
    const state = this.state
    state.alert = {
      msg: '',
      visible: false
    }
    this.setState(state)
  }

  handleCancel (e) {
    if (e.target.className == 'login')
      this.props.onCancel()
  }

  handleKeyUp (e) {
    if (e.keyCode == 13) {
      this.handleLogin()
    }
  }

  render () {
    const regLink = 'http://user.' + Runtime.getDomain() + '/reg.html'
    const forgotLink = 'http://user.' + Runtime.getDomain() + '/forgot.html'
    return (
      <div className="login" style={{ display: this.props.visible ? 'block' : 'none' }} onClick={this.handleCancel.bind(this)}>
        <div className="login-box">
          <div style={{ fontSize: 24, color: '#393939', marginBottom: 10 }}>点点盈账户登录</div>
          <div className="login-alert" style={{ display: this.state.alert.visible ? 'block' : 'none' }}>{this.state.alert.msg}</div>
          <div className="login-input" style={{ marginTop: 10 }}>
            <input type="text" placeholder="请输入账号 / 手机号" value={this.state.form.user} onChange={this.handleUserChange.bind(this)} />
          </div>
          <div className="login-input" style={{ marginTop: 10 }}>
            <input type="password" placeholder="请输入密码" value={this.state.form.pass} onChange={this.handlePassChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} />
          </div>
          <div className="login-link" style={{ marginTop: 15 }}>
            <div style={{ display: 'block', float: 'left', width: '50%', textAlign: 'left' }}>
              <a href={regLink}>没有账号? <span style={{ color: '#ff6f00' }}>立即注册</span></a>
            </div>
            <div style={{ display: 'block', float: 'left', width: '50%', textAlign: 'right' }}>
              <a href={forgotLink}>忘记密码?</a>
            </div>
          </div>
          <div className="login-btn log-in" onClick={this.handleLogin.bind(this)}>{this.state.confirmLoading ? '登录中...' : '登录'}</div>
          <div className="login-close" onClick={this.props.onCancel}>X</div>
        </div>
      </div>
    )
  }
}
module.exports = exports['default']
