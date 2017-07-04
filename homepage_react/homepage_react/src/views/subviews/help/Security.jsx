import React, { Component } from 'react'
import Runtime from '../../../utils/Runtime'

const domain = Runtime.getDomain()

export default class Security extends Component {

  render (){
    return (
      <div className='stock'>
        <span className='center-head'>账号安全</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、如何修改登录密码？</h2>
          1）登录点点盈网站，点击首页的【忘记密码】，点此直接进入；<br/>
          2）输入手机号与收到的验证码，输入新的登录密码；<br/>
          3）点击【修改密码】，成功后页面跳转到登录界面即可正常登录。
          <p></p>
          <p><br/></p>
          <h2>2、如何修改交易密码？</h2>
          1）登录点点盈网站，选择个人中心网页，点此直接进入；<br/>
          2）点击页面左侧【账户安全】，点击【交易密码】中的【修改】；<br/>
          3）输入原交易密码和新交易密码；<br/>
          4）点击【确定】，交易密码修改成功。
          <p></p>
          <p><br/></p>
          <h2>3、如何修改银行卡？</h2>
          当前暂不支持客户自行修改银行卡，如客户银行卡有变更必须修改，需联系客户经理视频认证。需提供客户本人身份证、原、新银行卡信息（新银行卡需客户本人），以确保客户为本人后可提交修改申请，经平台服务人员审核后修改。
          <p></p>
          <p><br/></p>
          <h2>4、平台安全保障？</h2>
          点点盈互联网金融服务（杭州）有限公司是杭州最后一批拿下互联网金融牌照的公司，有资深金融行业及互联网行业大咖，上市公司卫星石化（002648）的股东背景支持，与九州证券、恒泰证券等在业务合作及市场拓展上有着深度的合作。<br/>
          平台资金通过连连支付、易宝及宝付多个第三方支付平台合作，所有客户信用金<span style={{color: "red"}}>由宜宾商业银行监管</span>，所有信用金不会转入对方帐户（无跑路风险）、统一冻结在第三方支付帐户中，盈亏及结算等<span style={{color: "red"}}>资金流转均受第三方银行监管，确保安全</span>。
          <p></p>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
