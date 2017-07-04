import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import Card from '../components/common/Card'
import ApiCaller from '../utils/ApiCaller'
import Api from '../store/constants/Api'
import Security from '../utils/Security'
import { QueueAnim, Modal, Form, Input, Button, Col, message, notification } from 'antd'
const FormItem = Form.Item

function validPwdByRegex (pwd) {
  if (/^[0-9]{6}$/.test(pwd))
    return true
  else
    return false
}

function validPwdCharAndNum(pwd) {
  if (/[a-zA-Z]/.test(pwd) && /[0-9]/.test(pwd) && pwd.length > 5 && pwd.length < 17)
    return true
  else
    return false
}

// 修改登录密码
class EditLoginPassword extends Component {
  constructor(props){
    super(props)
    this.state = {
      sending: false,
      waitting: false,
      curWaitTime: maxWaitTime,
      waitingText: defSendText
    }
  }
  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (!error){
        if(!this.props.form.getFieldsValue().imgCode){
          message.error('图形验证码不能为空')
          return
        }
        this.props.onOk(this.props.form.getFieldsValue(), this.props.form.resetFields)
      }
    })
  }

  checkPass(rule, value, callback) {
    if (validPwdCharAndNum(value))
      callback()
    else
      callback([new Error('密码由6-16位数字和字母组成')])
  }

  checkNewPass(rule, value, callback) {
    const { getFieldValue, setFields } = this.props.form
    if (validPwdCharAndNum(value)) {
      const reNewPass = getFieldValue('reNewPass')
      if (value !== reNewPass)
        setFields({
          'reNewPass': {
            errors: [new Error('两次输入的密码不一致')],
            value: reNewPass
          }
        })
      callback()
    }
    else
      callback([new Error('密码由6-16位数字和字母组成')])
  }

  checkReNewPass(rule, value, callback) {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('newPass'))
      callback([new Error('两次输入的密码不一致')])
    else
      callback()
  }

  timerWaitTick() {
    let curWaitTime = this.state.curWaitTime
    if (curWaitTime == 0) {
      this.setState({
        waitting: false,
        waitingText: defSendText,
        curWaitTime: maxWaitTime
      })
    } else {
      this.setState({
        curWaitTime: curWaitTime - 1,
        waitingText: curWaitTime + ' 秒后重置'
      })

      // 递归计时
      setTimeout(()=> {
        this.timerWaitTick()
      }, 1000)
    }
  }

  // 发送短信验证码
  handleSend () {
    if (this.state.waitting)
      return
    const verifyCode = this.props.form.getFieldValue('imgCode')
    if(!verifyCode || verifyCode == ''){
      message.error('请输入图形验证码')
      return
    }
    this.setState({
      sending: true,
      waitingText: '发送中'
    })
    ApiCaller.call(Api.system.sendCode, {
      //phone: this.props.phone,
      phone: this.props.phone,
      type: 2,  // 找回交易密码
      token:this.props.token,
      code:verifyCode
    }, (res) => {
      const state = this.state
      state.sending = false
      if (res.code == 0) {
        state.waitting = true
        this.timerWaitTick()
        message.success('短信验证码已发送，请注意查收！')
      } else {
        state.waitingText = defSendText
        message.error(res.msg)
      }
      this.setState(state)
      this.imgCodeHandle()
    })
  }

  imgCodeHandle(){
    this.props.imgCodeChange()
  }

  render () {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const { getFieldProps } = this.props.form
    const imgCodeProps = getFieldProps('imgCode', {
      rules: [
        { required: false, message: '请输入图形验证码' }
      ],
    })
    const verifyCodeProps = getFieldProps('verifyCode', {
      rules: [
        { required: true, message: '请输入您收到的短信验证码' }
      ],
    })
    const oldPassProps = getFieldProps('oldPass', {
      // rules: [
      //   { required: true, whitespace: true, message: '请填写原登录密码' },
      //   { validator: this.checkPass.bind(this) }
      // ]
    })
    const newPassProps = getFieldProps('newPass', {
      rules: [
        { required: true, whitespace: true, message: '请填写新密码' },
        { validator: this.checkNewPass.bind(this) },
      ],
    })
    const reNewPassProps = getFieldProps('reNewPass', {
      rules: [
        { required: true, whitespace: true, message: '请再次输入新密码' },
        { validator: this.checkReNewPass.bind(this) },
      ],
    })
    const src = (this.props.token)?Api.user.getImgCode.url + '?token=' + this.props.token + '&t=' + this.props.time + '&width=80&height=30':''
    return (
      <div>
        <Modal title="修改登录密码"
          visible={this.props.visible}
          onOk={this.handleSubmit.bind(this)}
          confirmLoading={this.props.loading}
          onCancel={this.props.onCancel}>
          <Form horizontal form={this.props.form}>
          <FormItem
            {...formItemLayout}
            label="图形验证码：">
            <Col span="16">
              <Input hasFeedback placeholder="请输入图形验证码" {...imgCodeProps} />
            </Col>
            <Col span="4">
              <img onClick={this.imgCodeHandle.bind(this)} style={{marginLeft:10}} src={src}/>
            </Col>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机号码：">
            <Col span="16">
              <p className="ant-form-text" id="phone" name="phone">{this.props.phone}</p>
            </Col>
            <Col span="4">
              <Button loading={this.state.sending} disabled={this.state.waitting} onClick={this.handleSend.bind(this)}>{this.state.waitingText}</Button>
            </Col>
          </FormItem>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="短信验证码：">
            <Input hasFeedback placeholder="请输入您收到的短信验证码" {...verifyCodeProps} />
          </FormItem>
            <FormItem
              {...formItemLayout}
              label="原登录密码："
              hasFeedback
              className='hide'>
              <Input {...oldPassProps} type="password" placeholder="请输入您当前的登录密码" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="新登录密码：">
              <Input type="password" placeholder="登录密码由数字与字母组成 6-16位" {...newPassProps} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="确认登录密码：">
              <Input type="password" placeholder="请再次输入新密码" {...reNewPassProps} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
EditLoginPassword = Form.create()(EditLoginPassword)

// 修改交易密码
class EditTradePassword extends Component {
  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (!error)
        this.props.onOk(this.props.form.getFieldsValue(), this.props.form.resetFields)
    })
  }

  checkPass(rule, value, callback) {
    if (validPwdByRegex(value))
      callback()
    else
      callback([new Error('交易密码由6位数字组成')])
  }

  checkNewPass(rule, value, callback) {
    const { getFieldValue, setFields } = this.props.form
    if (validPwdByRegex(value)) {
      const reNewPass = getFieldValue('reNewPass')
      if (value !== reNewPass)
        setFields({
          'reNewPass': {
            errors: [new Error('两次输入的密码不一致')],
            value: reNewPass
          }
        })
      callback()
    }
    else
      callback([new Error('交易密码由6位数字组成')])
  }

  checkReNewPass(rule, value, callback) {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('newPass'))
      callback([new Error('两次输入的密码不一致')])
    else
      callback()
  }

  render () {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const { getFieldProps } = this.props.form
    const oldPassProps = getFieldProps('oldPass', {
      // rules: [
      //   { required: true, whitespace: true, message: '请输入您当前的登录密码' },
      //   { validator: this.checkPass.bind(this) },
      // ],
    })
    const newPassProps = getFieldProps('newPass', {
      rules: [
        { required: true, whitespace: true, message: '请输入新密码' },
        { validator: this.checkNewPass.bind(this) },
      ],
    })
    const reNewPassProps = getFieldProps('reNewPass', {
      rules: [
        { required: true, whitespace: true, message: '请再次输入新密码' },
        { validator: this.checkReNewPass.bind(this) },
      ],
    })
    return (
      <div>
        <Modal title="修改交易密码"
          visible={this.props.visible}
          onOk={this.handleSubmit.bind(this)}
          confirmLoading={this.props.loading}
          onCancel={this.props.onCancel}>
          <Form horizontal form={this.props.form}>
            <FormItem
              {...formItemLayout}
              label="原交易密码："
              className='hide'
              hasFeedback>
              <Input {...oldPassProps} type="password" placeholder="交易密码由6位数字组成" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="新交易密码：">
              <Input type="password" placeholder="交易密码由6位数字组成" {...newPassProps} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="确认交易密码：">
              <Input type="password" placeholder="请再次输入新交易密码" {...reNewPassProps} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
EditTradePassword = Form.create()(EditTradePassword)


const maxWaitTime = 60  // 短信等待时间
const defSendText = '发送验证码'

// 重置交易密码
class ForgotTradePassword extends Component {

  constructor (props) {
    super(props)
    this.state = {
      sending: false,
      waitting: false,
      curWaitTime: maxWaitTime,
      waitingText: defSendText
    }
  }

  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (!error){
        if(!this.props.form.getFieldsValue().imgCode){
          message.error('图形验证码不能为空')
          return
        }
        this.props.onOk(this.props.form.getFieldsValue(), this.props.form.resetFields)
      }
    })
  }

  timerWaitTick() {
    let curWaitTime = this.state.curWaitTime
    if (curWaitTime == 0) {
      this.setState({
        waitting: false,
        waitingText: defSendText,
        curWaitTime: maxWaitTime
      })
    } else {
      this.setState({
        curWaitTime: curWaitTime - 1,
        waitingText: curWaitTime + ' 秒后重置'
      })

      // 递归计时
      setTimeout(()=> {
        this.timerWaitTick()
      }, 1000)
    }
  }

  // 发送短信验证码
  handleSend () {
    if (this.state.waitting)
      return
    const verifyCode = this.props.form.getFieldValue('imgCode')
    if(!verifyCode || verifyCode == ''){
      message.error('请输入图形验证码')
      return
    }
    this.setState({
      sending: true,
      waitingText: '发送中'
    })
    ApiCaller.call(Api.system.sendCode, {
      //phone: this.props.phone,
      phone: this.props.phone,
      type: 3,  // 找回交易密码
      token:this.props.token,
      code:verifyCode
    }, (res) => {
      const state = this.state
      state.sending = false
      if (res.code == 0) {
        state.waitting = true
        this.timerWaitTick()
        message.success('短信验证码已发送，请注意查收！')
      } else {
        state.waitingText = defSendText
        message.error(res.msg)
      }
      this.setState(state)
      this.imgCodeHandle()
    })
  }

  checkNewPass(rule, value, callback) {
    const { getFieldValue, setFields } = this.props.form
    if (validPwdByRegex(value)) {
      const reNewPass = getFieldValue('reNewPass')
      if (value !== reNewPass)
        setFields({
          'reNewPass': {
            errors: [new Error('两次输入的密码不一致')],
            value: reNewPass
          }
        })
      callback()
    }
    else
      callback([new Error('交易密码由6位数字组成')])
  }

  checkReNewPass(rule, value, callback) {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('newPass'))
      callback([new Error('两次输入的密码不一致')])
    else
      callback()
  }

  imgCodeHandle(){
    this.props.imgCodeChange()
  }

  render () {
    const { getFieldProps } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const imgCodeProps = getFieldProps('imgCode', {
      rules: [
        { required: false, message: '请输入图形验证码' }
      ],
    })
    const verifyCodeProps = getFieldProps('verifyCode', {
      rules: [
        { required: true, message: '请输入您收到的短信验证码' }
      ],
    })
    const newPassProps = getFieldProps('newPass', {
      rules: [
        { required: true, whitespace: true, message: '请输入新密码' },
        { validator: this.checkNewPass.bind(this) },
      ],
    })
    const reNewPassProps = getFieldProps('reNewPass', {
      rules: [
        { required: true, whitespace: true, message: '请再次输入新密码' },
        { validator: this.checkReNewPass.bind(this) },
      ],
    })
    const title = (this.props.tradePwdSetted ? '找回' : '设置') + '交易密码'
    const src = (this.props.token)?Api.user.getImgCode.url + '?token=' + this.props.token + '&t=' + this.props.time + '&width=80&height=30':''
    return (
      <div>
        <Modal title={title}
          visible={this.props.visible}
          onOk={this.handleSubmit.bind(this)}
          confirmLoading={this.props.loading}
          onCancel={this.props.onCancel}>
          <Form horizontal form={this.props.form}>
            <FormItem
              {...formItemLayout}
              label="图形验证码：">
              <Col span="16">
                <Input hasFeedback placeholder="请输入图形验证码" {...imgCodeProps} />
              </Col>
              <Col span="4">
                <img onClick={this.imgCodeHandle.bind(this)} style={{marginLeft:10}} src={src}/>
              </Col>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号码：">
              <Col span="16">
                <p className="ant-form-text" id="phone" name="phone">{this.props.phone}</p>
              </Col>
              <Col span="4">
                <Button loading={this.state.sending} disabled={this.state.waitting} onClick={this.handleSend.bind(this)}>{this.state.waitingText}</Button>
              </Col>
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="短信验证码：">
              <Input hasFeedback placeholder="请输入您收到的短信验证码" {...verifyCodeProps} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="新交易密码：">
              <Input type="password" placeholder="交易密码由6位数字组成" {...newPassProps} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="确认交易密码：">
              <Input type="password" placeholder="请再次输入新交易密码" {...reNewPassProps} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
ForgotTradePassword = Form.create()(ForgotTradePassword)

class AccountSafety extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editLoginPwd: {
        visible: false,
        loading: false
      },
      editTradePwd: {
        visible: false,
        loading: false
      },
      forgotTradePwd: {
        visible: false,
        loading: false
      }
    }
  }

  // 修改登录密码
  handleEditLoginPwd (fieldsVal, reset) {
    this.setState({
      editLoginPwd: {
        loading: true,
        visible: true
      }
    })
    ApiCaller.call(Api.user.setLoginPwd, {
      //oldPasswd: Security.encryptMd5(fieldsVal.oldPass),
      newPasswd: Security.encryptMd5(fieldsVal.newPass),
      newPasswdRepeat: Security.encryptMd5(fieldsVal.reNewPass),
      type: 1,
      code: fieldsVal.verifyCode,
      phone: this.props.user.get('baseInfo').get('phone')
    }, (res) => {
      const editLoginPwd = this.state.editLoginPwd;
      editLoginPwd.loading = false
      if (res.code == 0) {
        editLoginPwd.visible = false
        notification.success({
          message: '登录密码修改成功',
          description: '您的登录密码已修改，下次登录请使用新的密码'
        })
        reset()
      } else {
        message.error(res.msg)
        this.imgCodeHandleLogin()
      }
      this.setState({
        editLoginPwd: editLoginPwd
      })
    })
  }

  // 修改交易密码
  handleEditTradePwd (fieldsVal, reset) {
    this.setState({
      editTradePwd: {
        loading: true,
        visible: true
      }
    })
    ApiCaller.call(Api.user.setTransPwd, {
      //oldPasswd: Security.encryptMd5(fieldsVal.oldPass),
      newPasswd: Security.encryptMd5(fieldsVal.newPass),
      newPasswdRepeat: Security.encryptMd5(fieldsVal.reNewPass),
      type: 2
    }, (res) => {
      const editTradePwd = this.state.editTradePwd;
      editTradePwd.loading = false
      if (res.code == 0) {
        editTradePwd.visible = false
        notification.success({
          message: '交易密码修改成功',
          description: '您的交易密码已修改，为了您的资金安全，请妥善保管'
        })
        reset()
      } else {
        message.error(res.msg)
      }
      this.setState({
        editTradePwd: editTradePwd
      })
    })
  }

  // 忘记交易密码
  handleForgotTradePwd (fieldsVal, reset) {
    const tradePwdSetted = this.props.user.get('baseInfo').get('transPwd') ? true : false
    this.setState({
      forgotTradePwd: {
        loading: true,
        visible: true
      }
    })
    this.imgCodeHandle()
    ApiCaller.call(Api.user.setTransPwd, {
      //oldPasswd: '',
      newPasswd: Security.encryptMd5(fieldsVal.newPass),
      newPasswdRepeat: Security.encryptMd5(fieldsVal.reNewPass),
      type: 2,
      code: fieldsVal.verifyCode
    }, (res) => {
      const forgotTradePwd = this.state.forgotTradePwd;
      forgotTradePwd.loading = false
      const setText = tradePwdSetted ? '设置' : '重置'
      if (res.code == 0) {
        forgotTradePwd.visible = false
        notification.success({
          message: '交易密码' + setText + '成功',
          description: '您的交易密码已' + setText + '，为了您的资金安全，请妥善保管'
        })
        reset()
        if (!tradePwdSetted)
          this.props.actions.firstSetTradePwd()
      } else {
        message.error(res.msg)
        this.imgCodeHandle()
      }
      this.setState({
        forgotTradePwd: forgotTradePwd
      })
    })
  }

  imgCodeHandle(){
    const time = new Date().getTime()
    const token = Security.encryptMd5(this.props.phone + '.' + time)
    const state = this.state
    state.forgotTradePwd.token = token
    state.forgotTradePwd.time = time
    state.forgotTradePwd.visible = true
    this.setState(state)
  }

  imgCodeHandleLogin(){
    const time = new Date().getTime()
    const token = Security.encryptMd5(this.props.phone + '.' + time)
    const state = this.state
    state.editLoginPwd.token = token
    state.editLoginPwd.time = time
    state.editLoginPwd.visible = true
    this.setState(state)
  }

  render () {
    const tradePwdSetted = this.props.user.get('baseInfo').get('isTransPwd') == 1 ? true : false
    return (
      <div className="accountsafety">
        <Card title="密码设置" bodyHeight="500">
          <QueueAnim delay={400}>
          <div className="item" key="a">
            <div className="icon"><i className="iconfont icon-denglumima" style={{ fontSize:'24px' }}></i></div>
            <div className="name">登录密码</div>
            <div className="status">已设置</div>
            <div className="tips">登录网站时需要输入的密码</div>
            <div className="operation">
              <a onClick={()=>{
                this.imgCodeHandleLogin()
              }}>修改</a>
            </div>
          </div>
          <div className="item" key="b">
            <div className="icon"><i className="iconfont icon-denglumima" style={{ fontSize:'24px' }}></i></div>
            <div className="name">交易密码</div>
            <div className="status">{ tradePwdSetted ? '已设置' : '未设置'}</div>
            <div className="tips">为了您的资金安全，请妥善保管好交易密码</div>
            <div className="operation">
              <a className={tradePwdSetted?'hide':'hide'} onClick={()=>this.setState({
                editTradePwd: {
                  visible: true
                }
              })}>修改&nbsp;&nbsp;</a>
              <a onClick={this.imgCodeHandle.bind(this)}>{tradePwdSetted ? '忘记密码' : '设置'}</a>
            </div>
          </div>
          </QueueAnim>
        </Card>
        <EditLoginPassword
          visible={this.state.editLoginPwd.visible}
          loading={this.state.editLoginPwd.loading}
          onOk={this.handleEditLoginPwd.bind(this)}
          onCancel={()=>this.setState({ editLoginPwd: { visible: false} })}
          imgCodeChange={this.imgCodeHandleLogin.bind(this)}
          token={this.state.editLoginPwd.token}
          time={this.state.editLoginPwd.time}
          phone={this.props.user.get('baseInfo').get('phone')}
        />
        <EditTradePassword
          visible={this.state.editTradePwd.visible}
          loading={this.state.editTradePwd.loading}
          onOk={this.handleEditTradePwd.bind(this)}
          onCancel={()=>this.setState({ editTradePwd: { visible: false} })}
        />
        <ForgotTradePassword
          phone={this.props.user.get('baseInfo').get('phone')}
          visible={this.state.forgotTradePwd.visible}
          loading={this.state.forgotTradePwd.loading}
          onOk={this.handleForgotTradePwd.bind(this)}
          tradePwdSetted={tradePwdSetted}
          imgCodeChange={this.imgCodeHandle.bind(this)}
          token={this.state.forgotTradePwd.token}
          time={this.state.forgotTradePwd.time}
          onCancel={()=>this.setState({ forgotTradePwd: { visible: false} })}
        />
      </div>
    )
  }
}
export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(AccountSafety)
module.exports = exports['default']
