import React, { Component } from 'react'

export default class Register extends Component {
  render (){
    return (
      <div className='recharge'>
        <span className='center-head'>注册相关</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、如何注册为点点盈会员？</h2>
          1）输入手机号码获取短信验证码，并且填写数字字母混合密码（6·16位），进行注册；<br/>
          PS：需填写推荐好友的邀请码<br/>
          2）如需更改注册的手机号码，请拨打点点盈官方客服400-7111-288解决；
          <p></p>
          <p><br/></p>
          <h2>2、如何实名认证？</h2>
          1）进入个人中心，点击立即绑卡，输入您的真实姓名、身份证号及快捷支付银行卡号，并通过验证完成实名认证及绑卡；<br/>
          2）点击充值完成第一次充值即可认证与绑卡；<br/>
          3）如需更改绑卡，请使用注册手机拨打点点盈官方客服400-7111-288，说明原因并申请修改；
          <p></p>
          <p><br/></p>
          <h2>3、为什么获取不到验证码？</h2>
          点点盈短信验证码是通过短信运营商的接口发送的，延迟、信号不好、运营商屏蔽或安装了屏蔽短信的相关软件等原因都会导致无法获取验证码。建议您稍作等待，若60s倒计时结束后仍未收到到相关验证码，可尝试点击重新获取。如仍无法解决，可联系在线QQ客服，或致电客服400-7111-288进行询问
          <p></p>
          <p></p>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
