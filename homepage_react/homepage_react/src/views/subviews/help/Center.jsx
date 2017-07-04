import React, { Component } from 'react'

export default class Center extends Component{
  render (){
    return (
      <div className='center'>
        <span className='center-head'>会员中心</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、如何注册成为点点盈会员？</h2>
          输入您的常用手机号，设置安全密码并确认，然后获取短信验证码，输入验证码后就可以注册成功。如果您有邀请人推荐，可输入邀请人手机号或邀请ID。注册成功您可以直接选择进行实名认证和银行卡认证。
          <p></p>
          <p><br/></p>
          <h2>2、如何绑定银行卡？</h2>点点盈需要您提供合法可用的本人银行卡作为保证金和收益提取的转账卡。确保后续您的收益能及时转入到您的卡中，请准确填写卡号相关信息。点点盈对您的银行卡审核后，即可完成银行卡绑定。
          <p></p>
          <p><br/></p>
          <h2>3、修改密码</h2>为了您的在点点盈的账户安全，请不定期修改登录密码。
          <p></p>
       </div>
      </div>
    )
  }
}

module.exports = exports['default']
