import React, { Component } from 'react'

export default class Recharge extends Component {
  render (){
    return (
      <div className='recharge'>
        <span className='center-head'>充值提现</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、如何充值</h2>
          您可以通过快捷支付、网银充值、银行转账四种方式进行充值。<br/>推广期间，用户在线充值及提现，点点盈不收取用户任何费用<p></p>
          <p><br/></p>
          <h2>2、为什么充值成功帐号里面的余额没有增加？</h2>
          在充值过程中会遇到各种问题可能导致充值数据未同步。此时请您稍后片刻进行刷新页面，查看是否充值已到账。如果刷新未能解决问题，请您及时致电客服 4007-111-288，或者与在线客服及时联系，我们会尽快处理。<p></p>
          <p><br/></p>
          <h2>3、提现到账时间</h2>
          点点盈工作人员会在1个工作日内审核您的申请，并将您的提现资金转入所绑定的银行账户内。一般当天即可到账，如遇到提款数量多，处理时间需要1个工作日左右，节假日可能会出现延迟。<p></p>
          <p></p>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
