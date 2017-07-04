import React, { Component } from 'react'
import Runtime from '../../../utils/Runtime'

const domain = Runtime.getDomain()

export default class Stock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dlOpenIndex:0
    }
  }

  dlClickHandle(index,e){
    e = e || window.event
    let obj = e.target
    let value = 0
    while (obj.tagName != 'DL') {
      obj = obj.parentNode
    }
    if(obj.offsetHeight == 35){
      value = index
    }else{
      value = 0
    }
    this.setState({dlOpenIndex:value})
  }

  render (){
    const state = this.state
    return (
      <div className='stock'>
        <span className='center-head'>常见问题</span>
        <div className='center-main'>
          <div className='title'>注册与实名认证</div>
          <div className="stock-content">
            <dl style={{height:state.dlOpenIndex == 1?126:35}} onClick={this.dlClickHandle.bind(this,1)}>
              <dt className={state.dlOpenIndex == 1?'open-icon':''}>为什么收不到验证码？</dt>
              <dd>无法获取验证码，可能会是延迟、信号不好、运营商屏蔽或安装了屏蔽短信的相关软件等原因导致。建议您等待60s，不要重复点击发送验证码，若倒计时结束后仍然收不到相关验证码，可尝试重新获取验证码。如仍无法解决，请直接联系网络在线QQ客服，或致电客服400-7111-288进行询问。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 3?95:35}} onClick={this.dlClickHandle.bind(this,3)}>
              <dt className={state.dlOpenIndex == 3?'open-icon':''}>如何修改实名认证信息？</dt>
              <dd>为保障您的账户安全，目前我们暂不支持自主修改实名认证信息，您可联系我们的客服人员并提供相关资料，由客服进行修改。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 4?95:35}} onClick={this.dlClickHandle.bind(this,4)}>
              <dt className={state.dlOpenIndex == 4?'open-icon':''}>为什么要选择理财顾问，选择理财顾问会收费吗？</dt>
              <dd>点点盈平台理财顾问具有专业的金融理财知识与经验，免费为客户推荐投资方向，提供理财咨询等服务，针对客户需求制订合理的资金分配方案并进行指导。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 5?70:35}} onClick={this.dlClickHandle.bind(this,5)}>
              <dt className={state.dlOpenIndex == 5?'open-icon':''}><span style={{color:'#f20'}}>注册时邀请人手机号必须要填吗？该怎么填写？</span></dt>
              <dd><span>邀请人手机号为选填项。若您为其他用户推荐注册，可填写该用户的手机号。</span></dd>
            </dl>
          </div>
          <div className='title'>充值</div>
          <div className="stock-content">
            <dl style={{height:state.dlOpenIndex == 6?170:35}} onClick={this.dlClickHandle.bind(this,6)}>
              <dt className={state.dlOpenIndex == 6?'open-icon':''}>如何充值？</dt>
              <dd>1）<span>在充值前，需要先开通银行卡的网上支付功能；</span><br/>
                  2）登录（未注册请先注册）点点盈账户，进入“个人中心”，点击“充值”；<br/>
                  3）输入充值金额，选择您的开户银行；<br/>
                  4）在新打开的网络银行页面上进行支付；<br/>
                  5）网银支付成功后，会弹出易宝支付界面提示支付成功，然后跳转到点点盈界面，即充值成功。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 7?220:35}} onClick={this.dlClickHandle.bind(this,7)}>
              <dt className={state.dlOpenIndex == 7?'open-icon':''}>在线充值时，为什么银行金额已扣，但充值金额未入帐？</dt>
              <dd>出现这种情况可能有以下原因：<br/>
                  1）网络速度不稳定；<br/>
                  2）由于同一时间充值的人数较多，可能会造成网银交易页面与点点盈账户金额不同步。在充值过程中，须耐心等待约6秒钟时间的页面跳转，请勿在无提示关闭或无提示交易成功的情况下关闭页面，这样操作可能导致充值资金延迟到账或掉单。<br/>
                  3）您可以将网银交易成功页面截图，并尝试对点点盈账户页面进行刷新。<br/>
                  如还未能解决问题，请您致电客服400-7111-288（服务时间：8:30-22:00）。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 8?95:35}} onClick={this.dlClickHandle.bind(this,8)}>
              <dt className={state.dlOpenIndex == 8?'open-icon':''}>为什么会充值失败？</dt>
              <dd>充值失败情况可能由于充值过程中填写的银行信息有误，建议您仔细核对并重试；也有可能是因为您所使用的银行卡设置了网上交易的限额。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 9?220:35}} onClick={this.dlClickHandle.bind(this,9)}>
              <dt className={state.dlOpenIndex == 9?'open-icon':''}>为什么充值时看不到网银页面或者无法弹出银行支付界面？</dt>
              <dd>遇到这种情况，可能是由于您的电脑安装了上网助手之类的软件，拦截了网银支付页面。您可以尝试用其他浏览器进行支付，也可以对浏览器进行相关设置。<br/>
                  常用浏览器拦截页面处理办法：<br/>
                  <span>IE浏览器：工具选项-&gt;弹出窗口阻止程序-&gt;关闭弹出窗口阻止程序；<br/>
                  谷歌浏览器：右上角工具栏菜单-&gt;设置-&gt;显示高级设置-&gt;内容设置-&gt;允许所有网站显示弹出式窗口；<br/>
                  360浏览器：工具-&gt;选项-&gt;广告过滤-&gt;取消勾选开启拦截；<br/>
                  QQ浏览器：右上角工具栏菜单-&gt;QQ浏览器设置-&gt;广告过滤-&gt;取消勾选开启页面弹窗拦截。</span>
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 10?95:35}} onClick={this.dlClickHandle.bind(this,10)}>
              <dt className={state.dlOpenIndex == 10?'open-icon':''}>通过支付宝转账充值，支付宝已支付成功，但账户余额没有增加？</dt>
              <dd>支付宝转账充值到账时间为：08:30 - 20:30 支付（30分钟内到账） 20:30 后支付（次日09:00前到账）。如在规定时间内未到账，请联系客服400-7111-288。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 11?95:35}} onClick={this.dlClickHandle.bind(this,11)}>
              <dt className={state.dlOpenIndex == 11?'open-icon':''}>扫描支付宝二维码无法识别？</dt>
              <dd>首先必须使用支付宝手机客户端的“扫一扫”功能扫描该二维码。如无法识别，请调整角度多试几次。若您多次扫描仍旧无法识别，可保存该二维码至手机相册。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 12?70:35}} onClick={this.dlClickHandle.bind(this,12)}>
              <dt className={state.dlOpenIndex == 12?'open-icon':''}>支付宝转账充值时，支付宝账户真实姓名必须和本网站实名认证姓名一致吗？</dt>
              <dd>为了保障充值的安全性，建议您使用真实姓名和本网站实名认证姓名一致的支付宝帐号进行转账充值。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 13?95:35}} onClick={this.dlClickHandle.bind(this,13)}>
              <dt className={state.dlOpenIndex == 13?'open-icon':''}>支付宝转账充值申请后，充值记录里的充值金额显示为0元？</dt>
              <dd>支付宝转账充值未到账时，金额默认显示为0元。充值资金到账后该记录会自动变更为您支付宝转账充值的金额。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 14?95:35}} onClick={this.dlClickHandle.bind(this,14)}>
              <dt className={state.dlOpenIndex == 14?'open-icon':''}>支付宝转账充值可以通过支付宝网页版转账吗？</dt>
              <dd>除了可以通过手机支付宝扫描二维码转账外，登录支付宝网页版向收款人帐号ddyzfb@ddy98.com（杭州点点盈互联网金融服务有限公司）转账，也可完成转账充值。
              </dd>
            </dl>
         </div>
         <div className='title'>提现</div>
         <div className="stock-content">
            <dl style={{height:state.dlOpenIndex == 15?145:35}} onClick={this.dlClickHandle.bind(this,15)}>
              <dt className={state.dlOpenIndex == 15?'open-icon':''}>如何进行提现？</dt>
              <dd>1）<span>在提现前，需在“个人中心”进行实名认证并设置交易密码；</span><br/>
                  2）登录点点盈账户，进入“个人中心”，点击“提现”；<br/>
                  3）输入提现金额和交易密码；<br/>
                  4）点击【提交】，申请提现，等待点点盈后台审核。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 16?70:35}} onClick={this.dlClickHandle.bind(this,16)}>
              <dt className={state.dlOpenIndex == 16?'open-icon':''}>提现有什么限制？</dt>
              <dd>提现金额必须小于等于账户余额，并且单笔最多为500000元。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 17?120:35}} onClick={this.dlClickHandle.bind(this,17)}>
              <dt className={state.dlOpenIndex == 17?'open-icon':''}>提现后，点点盈账户余额减少，但实际并未到账？</dt>
              <dd>用户申请提现后，点点盈的工作人员会在1个工作日内审核您的请求，审核通过后，提现金额会转入您所绑定的银行账户内。<br/>
                  如果提现出现任何问题，请尽快联系客服400-7111-288。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 18?70:35}} onClick={this.dlClickHandle.bind(this,18)}>
              <dt className={state.dlOpenIndex == 18?'open-icon':''}>提现是否收手续费，如何收取手续费？</dt>
              <dd>提现不收取任何手续费。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 19?70:35}} onClick={this.dlClickHandle.bind(this,19)}>
              <dt className={state.dlOpenIndex == 19?'open-icon':''}>请问我的提现申请处于处理中，是什么意思？</dt>
              <dd>提现处理中是指点点盈后台财务正在审核，并提交第三方支付平台易宝处理，具体到账时间以各银行为准。</dd>
            </dl>
          </div>
          <div className='title'>账户与银行卡</div>
          <div className="stock-content">
            <dl style={{height:state.dlOpenIndex == 20?70:35}} onClick={this.dlClickHandle.bind(this,20)}>
              <dt className={state.dlOpenIndex == 20?'open-icon':''}>什么是账户充值总额？</dt>
              <dd><span>账户充值总额是指该账户历史累计充值金额总和。</span></dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 21?95:35}} onClick={this.dlClickHandle.bind(this,21)}>
              <dt className={state.dlOpenIndex == 21?'open-icon':''}>什么是账户可用余额？</dt>
              <dd>账户可用余额包括未购买产品的充值资金以及赎回产品产生的资金。账户余额可以用于购买理财产品以及提现。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 22?70:35}} onClick={this.dlClickHandle.bind(this,22)}>
              <dt className={state.dlOpenIndex == 22?'open-icon':''}>如何确定已经成功绑定银行卡？</dt>
              <dd>可通过查看个人中心的提现页面，查看提现银行卡号是否存在；若存在，则成功绑定银行卡。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 23?95:35}} onClick={this.dlClickHandle.bind(this,23)}>
              <dt className={state.dlOpenIndex == 203?'open-icon':''}>如何解绑银行卡？</dt>
              <dd>目前点点盈平台不支持银行卡解绑，如由于银行卡遗失、被盗、过期等原因需要更换绑定的银行卡，请直接拨打客服热线：400-7111-288，与我们的工作人员联系。</dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 24?95:35}} onClick={this.dlClickHandle.bind(this,24)}>
              <dt className={state.dlOpenIndex == 24?'open-icon':''}>如何提高账户安全性？</dt>
              <dd>您可以登录点点盈账户， 在“个人中心-账户安全 ”里，通过经常性修改登录密码、设置交易密码的方式增加账户安全系数，保证账户安全。</dd>
            </dl>
          </div>
          <div className='title'>账户安全</div>
          <div className="stock-content">
            <dl style={{height:state.dlOpenIndex == 25?120:35}} onClick={this.dlClickHandle.bind(this,25)}>
              <dt className={state.dlOpenIndex == 25?'open-icon':''}>忘记登录密码怎么办？</dt>
              <dd>1）登录点点盈网站，点击首页的【忘记密码】，<a href={"//user." + domain + "/forgot.html"} target="_blank">点此直接进入</a>；<br/>
                  2）输入手机号与收到的验证码，输入新的登录密码；<br/>
                  3）点击【修改密码】，成功后页面跳转到登录界面即可正常登录。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 26?145:35}} onClick={this.dlClickHandle.bind(this,26)}>
              <dt className={state.dlOpenIndex == 26?'open-icon':''}>怎么修改登录密码？</dt>
              <dd>1）登录点点盈网站，选择个人中心网页，<a href={"//user." + domain + "/center/accountsafety"} target="_blank">点此直接进入</a>；<br/>
                  2）点击页面左侧【账户安全】，点击【登录密码】中的【修改】；<br/>
                  3）输入原登录密码与新登录密码；<br/>
                  4）点击【确认】，登录密码修改成功。
              </dd>
            </dl>
            <dl style={{height:state.dlOpenIndex == 27?145:35}} onClick={this.dlClickHandle.bind(this,27)}>
              <dt className={state.dlOpenIndex == 27?'open-icon':''}>忘记交易密码怎么办？</dt>
              <dd>1）登录点点盈网站，选择个人中心网页，<a href={"//user." + domain + "/center/accountsafety"} target="_blank">点此直接进入</a>；<br/>
                  2）点击页面左侧【账户安全】，点击【交易密码】中的【忘记密码】；<br/>
                  3）输入验证码；<br/>
                  4）设置6位纯数字的交易密码，点击【确认】，交易密码设置成功。
              </dd>
            </dl>
            <dl  style={{height:state.dlOpenIndex == 28?145:35}} onClick={this.dlClickHandle.bind(this,28)}>
              <dt className={state.dlOpenIndex == 28?'open-icon':''}>怎么修改交易密码？</dt>
              <dd>1）登录点点盈网站，选择个人中心网页，<a href={"//user." + domain + "/center/accountsafety"} target="_blank">点此直接进入</a>；<br/>
                  2）点击页面左侧【账户安全】，点击【交易密码】中的【修改】；<br/>
                  3）输入原交易密码和新交易密码；<br/>
                  4）点击【确定】，交易密码修改成功。
              </dd>
            </dl>
        </div>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
