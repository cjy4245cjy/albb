import React, { Component } from 'react'
import Runtime from '../../../utils/Runtime'

const domain = Runtime.getDomain()

export default class Money extends Component {

  render (){
    return (
      <div className='stock'>
        <span className='center-head'>资金相关</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、什么是点点盈钱包？</h2>
          点点盈钱包是指通过点点盈平台充值的资金，充值资金将在个人账户模块下其他金额中提现。
          <p></p>
          <p><br/></p>
          <h2>2、什么是策略余额？</h2>
          策略余额是指在策略平台上留存的余额即未用于策略交易的资金。
          <p></p>
          <p><br/></p>
          <h2>3、如何充值？</h2>
          您可以通过快捷支付、网银充值、支付宝充值、微信充值的四种方式进行充值。
          <p></p>
          <p><br/></p>
          <h2>4、为什么充值成功帐号里面的余额没有增加？</h2>
          在充值过程中会遇到各种问题可能导致充值数据未同步。此时请您稍后片刻进行刷新页面，查看是否充值已到账。如果刷新未能解决问题，请您及时致电客服 4007-111-288，或者与在线客服及时联系，我们会尽快处理。
          <p></p>
          <p><br/></p>
          <h2>5、如何提现？</h2>
          1）在提现前，需在“个人中心”进行实名认证并设置交易密码；<br/>
          2）登录点点盈账户，进入“个人中心”，点击“提现”；<br/>
          3）输入提现金额和交易密码；<br/>
          4）点击【提交】，申请提现，等待点点盈后台审核；
          <p></p>
          <p><br/></p>
          <h2>6、提现有什么限制？</h2>
          提现金额必须小于等于账户余额，<span style={{color: "red"}}>单笔上限50万，单日200万元，单月500万</span>。
          <p></p>
          <p><br/></p>
          <h2>7、提现到账时间</h2>
          点点盈工作人员会在1个工作日内审核您的申请，并将您的提现资金转入所绑定的银行账户内。<br/>
          点点盈平台提现时间段调整为3个区间：<br/>
          上午：9:00-9:30 <br/>
          中午：11:00-11:30<br/>
          下午：15:30-18:00<br/>
          在这三个提现时间段之前提现，当天到账；下午18点以后提现次日9点到账，节假日以及周末不提现。建行银行、工商银行提现速度最快，建议您绑定这两家银行的银行卡，以便快速到账。当天即可到账，如遇到提款数量多，处理时间需要1个工作日左右，节假日可能会出现延迟。
          <p></p>
          <p><br/></p>
          <h2>8、如何修改银行预留号码？</h2>
          当前暂不支持，银行预留手机号码变更只能重新注册。
          <p></p>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
