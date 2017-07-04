import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../../../store/actions'
import { bindActionCreators } from 'redux'
import * as Format from '../../../utils/Format'
import ValidateHelper from '../../../utils/ValidateHelper'
import Api from '../../../store/constants/Api'
import ApiCaller from '../../../utils/ApiCaller'
import classnames from 'classnames'
import CardBindForm from '../../../components/CardBindForm'
import RechargeConfirm from '../../../components/RechargeConfirm'
import { getDomain } from '../../../utils/Runtime'
import QRCode from '../../../utils/QRCode'
//import BankData from '../../../constants/BankData'
import { Row, Col, Form, Input, Button, Table, Checkbox, notification, message, Modal, Spin, Icon } from 'antd'
import BFBankLimitData from '../../../constants/BFBankLimitData'
const FormItem = Form.Item

const wechatLogo = "data:image/png;base64,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"

const alipayLogo = "data:image/png;base64,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"

const submitUrl = '//pay.' + getDomain() + '/fmsubmit'

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 6 },
}

// 校验充值金额
function checkAmount (rule, value, callback) {
  if (!ValidateHelper.amount(value) || !(value > 0))
    callback (new Error('请输入正确的充值金额'))
  else
    callback ()
}

//构造input数据
function setFormInput(form,value,name){
  const newElement = document.createElement("input")
  newElement.setAttribute("name",name)
  newElement.setAttribute("type","hidden")
  newElement.setAttribute("value",value)
  form.appendChild(newElement)
  return form
}

function getRechargeApi(type){
  const apiOld = Api.user.getRecharge
  const api = {
    url: Api.user.getRecharge.url + type,
    type: apiOld.type,
    xform: apiOld.xform
  }
  return api
}

class Recharge extends Component {
  constructor (props) {
    super(props)
    this.state = {
      handleSubmit: ()=>{},
      handleReset: ()=>{},
      payType: 0,
      loading: false,
      scModal: {
        visible: false,
        clientType: '',
        qrcode: '',
        rechargeId: '',
        paySuccess: false
      }
    }
  }

  componentDidMount() {
    this.props.actions.addIMEvent("14", this.handleSCRechargeMsg.bind(this))
  }

  componentWillUnmount() {
    this.props.actions.removeIMEvent("14")
  }

  handleSCRechargeMsg(message) {
    if (message.ext.payStatus == 'pay_success') {
      const scModal = this.state.scModal
      if (scModal.visible && message.ext.rechargeId == scModal.rechargeId) {
        this.onSCRechargeSuccess()
      }
      // notification
      notification.success({
        message: '充值成功',
        description: message.data
      })
    }
  }

  onSCRechargeSuccess() {
    const scModal = this.state.scModal
    scModal.paySuccess = true
    this.setState({ scModal })

    // 3秒后关闭modal
    setTimeout(()=>{
      const scModal = {
        visible: false,
        clientType: '',
        qrcode: '',
        rechargeId: '',
        paySuccess: false
      }
      this.setState({ scModal })
      // 跳转到充值记录
      this.context.router.push('/center/assets')
    }, 3000);
  }

  switchPayType(type){
    const state = this.state
    state.payType = type
    this.setState(state)
  }

  // 实名认证表单方法注册
  handleRegMethods (funcSubmit, funcReset) {
    this.setState({
      handleSubmit: funcSubmit,
      handleReset: funcReset
    })
  }

  reloadInfo () {
    // 重新加载用户信息
    this.props.actions.loadUserInfo()
    // 重新加载用户资产
    this.props.actions.loadUserAssets()
    // 重置表单
    this.props.form.resetFields()
    // 充值实名认证表单
    this.state.handleReset()
  }

  // 快捷支付
  goRecharge (data) {
    const api = getRechargeApi('51')
    //api.url += '51'
    ApiCaller.call(api,{
      realName: encodeURIComponent(data.realName),
      bankNo: data.bankCard,
      idCard: data.idCard,
      amount: data.amount
    },(res) => {
      if(res.code == 0){
        //提交form
        const data = res.data
        //解析risk对象
        let newForm = document.createElement("form")
        document.body.appendChild(newForm)
        newForm.method = 'post'
        newForm.action = submitUrl
        data['_action'] = data.req_url
        //newForm.target = '_blank'
        //构造隐藏表单
        delete data['req_url']
        for (var key in data) {
          if(key == 'risk_item'){
            data[key] = JSON.stringify(data[key])
            var temp = data[key].replace(/\\/g, '').substr(1)
            temp = temp.substr(0, temp.length - 1)
            data[key] = temp
          }
          newForm = setFormInput(newForm, data[key], key)
        }
        //提交
        newForm.submit()
        //确认窗口
        //RechargeConfirm.show(this.reloadInfo.bind(this))
      }else{
        message.error(res.msg)
      }
    })
  }

  // 网银支付
  handleSubmitInWang () {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        this.showSubmitError(errors)
        return
      }
      const baseInfo = this.props.user.get('baseInfo')
      const api = getRechargeApi('52')
      ApiCaller.call(api,{
        realName: encodeURIComponent(baseInfo.get('realName')),
        //bankNo: 'PSBC',
        idCard: baseInfo.get('idCard'),
        amount: values.amount
      },(res) => {
        if(res.code == 0){
          //提交form
          const data = res.data
          let newForm = document.createElement("form")
          document.body.appendChild(newForm)
          newForm.method = 'post'
          newForm.action = submitUrl
          data['_action'] = data.nodeAuthorizationURL
          //newForm.target = '_blank'
          //构造隐藏表单
          delete data['req_url']
          delete data['nodeAuthorizationURL']
          for (var key in data) {
            newForm = setFormInput(newForm, data[key], key)
          }
          //提交
          newForm.submit()
          //确认窗口
          //RechargeConfirm.show(this.reloadInfo.bind(this))
        }else{
          message.error(res.msg)
        }
      })
    })
  }

  // 宝付支付
  handleSubmitInBao() {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        this.showSubmitError(errors)
        return
      }
      const baseInfo = this.props.user.get('baseInfo')
      const api = getRechargeApi('42')
      ApiCaller.call(api,{
        realName: encodeURIComponent(baseInfo.get('realName')),
        //bankNo: this.props.user.get('bankCardList').get(0).bankNo,
        idCard: baseInfo.get('idCard'),
        amount: values.amount
      },(res) => {
        if(res.code == 0){
          //提交form
          const data = res.data
          let newForm = document.createElement("form")
          document.body.appendChild(newForm)
          newForm.method = 'post'
          newForm.action = submitUrl
          data['_action'] = data.PayUrl
          //newForm.target = '_blank'
          //构造隐藏表单
          delete data['req_url']
          for (var key in data) {
            newForm = setFormInput(newForm, data[key], key)
          }
          //提交
          newForm.submit()
          //确认窗口
          //RechargeConfirm.show(this.reloadInfo.bind(this))
        }else{
          message.error(res.msg)
        }
      })
    })
  }

  // 易宝充值
  goYiBao(data){
    const api = getRechargeApi('42')
    //api.url += '51'
    ApiCaller.call(api,{
      realName: encodeURIComponent(data.realName),
      bankNo: data.bankCard,
      idCard: data.idCard,
      amount: data.amount
    },(res) => {
      if(res.code == 0){
        //提交form
        const data = res.data
        //解析risk对象
        let newForm = document.createElement("form")
        document.body.appendChild(newForm)
        newForm.method = 'post'
        newForm.action = submitUrl
        data['_action'] = data.nodeAuthorizationURL
        //newForm.target = '_blank'
        //构造隐藏表单
        delete data['nodeAuthorizationURL']
        for (var key in data) {
          newForm = setFormInput(newForm, data[key], key)
        }
        //提交
        newForm.submit()
        //确认窗口
        //RechargeConfirm.show(this.reloadInfo.bind(this))
      }else{
        message.error(res.msg)
      }
    })
  }

  goSCPay(qrType) {
    this.props.form.validateFields((errors, values)=>{
      if (errors)
        return

      const api = getRechargeApi('80')
      this.setState({ loading: true })
      ApiCaller.call(api, { amount: values.amount, qrType }, (res)=>{
        this.setState({ loading: false })
        if (res.code == 0) {
          const elQRCode = document.createElement('div')
          elQRCode.innerHTML = ''
          const qrcode = new QRCode(elQRCode, {
            width : 300,
            height : 300
          })
          qrcode.makeCode(res.data.dimensionUrl)
          // 生成二维码
          elQRCode.children[1].onload = () =>{
            const scModal = {
              visible: true,
              clientType: qrType == 1 ? '支付宝' : '微信',
              qrcode: elQRCode.children[1].getAttribute('src'),
              rechargeId: res.data.rechargeId,
              paySuccess: false,
              rechargeAmount: res.data.amount,
              rechargeFee: res.data.qrFee
            }
            this.setState({ scModal })
          }
        } else {
          message.error(res.msg || '未知错误')
        }
      })
    })
  }

  handleSubmit (callback) {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        this.showSubmitError(errors)
        return
      }

      const rechargeData = {
        amount: values.amount
      }

      const bankCardList = this.props.user.get('bankCardList')
      const baseInfo = this.props.user.get('baseInfo')
      if (bankCardList.size > 0) {
        const bankCard = bankCardList.get(0)
        rechargeData.bankCard = bankCard.bankNo
        rechargeData.realName = bankCard.cardUserName
        rechargeData.idCard = baseInfo.get('idCard')
        rechargeData.realName = baseInfo.get('realName')
        callback(rechargeData)
      }
      else {
        this.state.handleSubmit((fieldsVal) => {
          rechargeData.bankCard = fieldsVal.bankCard
          rechargeData.realName = fieldsVal.realName
          rechargeData.idCard = fieldsVal.idCard
          callback(rechargeData)
        })
      }
    })
  }

  showSubmitError(errors){
    for(let error in errors){
      Modal.error({
       title: '错误',
       content: errors[error].errors[0].message
      })
      return
    }
  }

  handleSubmitBindType(){
    const state = this.state
    switch (state.payType) {
      case 0:
        this.handleSubmit(this.goRecharge.bind(this))
        break
      case 1:
        this.handleSubmitInWang()
        break
      case 2:
        //this.handleSubmitInBao()
        this.handleSubmit(this.goYiBao.bind(this))
        break
      case 3:
        this.goSCPay(1)
        break
      case 4:
        this.goSCPay(2)
        break
    }
  }

  handleSCPayCheck(rechargeId) {
    ApiCaller.call(Api.user.querySCRecharge, { rechargeId }, (res)=>{
      if (res.code == 0 && res.data.status == 1) {
        // 充值成功
        this.onSCRechargeSuccess()
      } else {
        // 充值失败
        this.handleCloseSCModal()
        message.error('您未完成充值，已取消该充值订单')
      }
    })
  }

  handleCloseSCModal() {
    const scModal = {
      visible: false,
      clientType: '',
      qrcode: '',
      rechargeId: '',
      paySuccess: false,
      rechargeAmount: 0,
      rechargeFee: 0
    }
    this.setState({ scModal })
  }

  render () {
    const columnsInFast = [
      {
        title: '单笔限额（元）',
        dataIndex: 'singleLimit',
        key: 'singleLimit'
      },
      {
        title: '每日限额（元）',
        dataIndex: 'dayLimit',
        key: 'dayLimit'
      },
      {
        title: '每月限额（元）',
        dataIndex: 'monthLimit',
        key: 'monthLimit'
      },
      {
        title: '备注',
        dataIndex: 'remarks',
        key: 'remarks'
      }
    ]
    const columnsInBao = [
      {
        title: '银行名称',
        dataIndex: 'bankName',
        key: 'bankName',
        render(value, row, index){
          let obj = {
            children:value,
            props:{}
          }
          //行合并
          obj.props.rowSpan = data[index].rowNum
          return obj
        },
        width:'20%'
      },
      {
        title: '卡类型',
        dataIndex: 'cardType',
        key: 'cardType',
        render(value, row, index){
          let obj = {
            children:value,
            props:{}
          }
          //行合并
          obj.props.rowSpan = data[index].rowNum
          return obj
        },
        width:'10%'
      },
      {
        title: '客户类型',
        dataIndex: 'customerType',
        key: 'customerType',
        width:'30%'
      },
      {
        title: '单笔限额(元)',
        dataIndex: 'singleQuota',
        key: 'singleQuota',
        width:'20%'
      },
      {
        title: '日累计限额(元)',
        dataIndex: 'dailyLimit',
        key: 'dailyLimit',
        width:'20%'
      }
    ]
    const assets = this.props.user.get('assets')
    const userBankCardList = this.props.user.get('bankCardList')
    const strategyAssets = this.props.user.get('strategyAssets')
    const bankNo = userBankCardList.size > 0 ? userBankCardList.get(0).bankNo.substr(-4) : ''
    const bankImg = userBankCardList.size > 0 ? '//static.ddy98.com/front/1.0.0/images/banks/' + userBankCardList.get(0).alias + '.png' : ''
    const cardSelectClass = classnames({
      'item': true,
      'hide': userBankCardList.size == 0
    })
    const infoFormClass = classnames({
      'item': true,
      'hide': userBankCardList.size > 0
    })
    const { getFieldProps } = this.props.form
    const amountProps = getFieldProps('amount', {
      rules: [
        { validator: checkAmount.bind(this) }
      ]
    })
    // 充值方式选择
    const payType = this.state.payType
    const fastClass = classnames({
      "pay-fast": true,
      'active': payType == 0
    })
    const wangyinClass = classnames({
      "pay-wangyin": true,
      'active': payType == 1
    })
    const baofuClass = classnames({
      //"pay-baofu": true,
      "pay-yibao": true,
      'active': payType == 2
    })
    const scAlipayClass = classnames({
      'pay-alipay': true,
      'active': payType == 3
    })
    const scWechatClass = classnames({
      'pay-wechat': true,
      'active': payType == 4
    })
    const fastTabsClass = classnames({
      "recharge-tabs": true,
      "hide": payType != 0 && payType != 2
    })
    // 限额说明
    let data,colums
    if(payType == 0){
      data = [{
        key: 1,
        singleLimit: '5万',
        dayLimit: ' 5万',
        monthLimit: '20万',
        remarks: '若充值金额超限可选择网银支付进行充值'
      }]
      colums = columnsInFast
    }else if(payType == 2){
      data = BFBankLimitData
      colums = columnsInBao
    }else{
      data = []
      colums = []
    }
    const scModal = this.state.scModal
    return (
      <div className="recharge fast">
        <Spin spining={this.state.loading}>
          <div className="item value-input" style={{ paddingBottom: 0, borderBottom: 'none'}}>
            <Form horizontal form={this.props.form} >
              <FormItem
                {...formItemLayout}
                label="充值金额">
                <Input {...amountProps} placeholder="请输入您要充值的金额" addonAfter="元" />
              </FormItem>
            </Form>
            <div className="item-input-desc">
              <span style={{ marginLeft:200 }}>点点盈钱包余额 <span className="red-value">{Format.fixed(assets.get('available'))}</span></span>
            </div>
            <p className="input-desc">充值有问题？在线<a className="red-value" href="//wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAxNTM4MF8zMTM5MDdfNDAwNzExMTI4OF8yXw" target="_blank">联系客服</a>或拨打400-7111-288咨询</p>
            <div className="pay-methods">
              <div className="pay-desc">充值方式</div>
              <div className="pay-choice">
                <div className={fastClass} onClick={this.switchPayType.bind(this,0)}><i className="ui-icon-select-right-top"/></div>
                <div className={scAlipayClass} onClick={this.switchPayType.bind(this,3)}><div /><i className="ui-icon-select-right-top"/></div>
                <div className={scWechatClass} onClick={this.switchPayType.bind(this,4)}><div /><i className="ui-icon-select-right-top"/></div>
                <div className={wangyinClass} onClick={this.switchPayType.bind(this,1)}><div /><i className="ui-icon-select-right-top"/></div>
                <div className={baofuClass} onClick={this.switchPayType.bind(this,2)}><i className="ui-icon-select-right-top"/></div>
              </div>
            </div>
          </div>
          <div className={fastTabsClass}>
            <div className={cardSelectClass}>
              <div className="use_card">
                <div className="uc_title">使用银行卡：</div>
                <div className="uc_bankcard">
                  <i className="ui-icon-select-right-top"></i>
                  <img src={bankImg} alt="bank card" />
                  <div>尾号 {bankNo}</div>
                </div>
              </div>
              <div className="use-desc">
                <p>快捷支付暂时只支持已绑定的银行卡</p>
                <p>如需换绑银行卡，请联系客服：400-7111-288</p>
              </div>
            </div>
            <div className={infoFormClass} style={{ paddingTop: 0 }}>
              <CardBindForm onRegMethods={this.handleRegMethods.bind(this)} type="layout"/>
            </div>
          </div>
          <div className="recharge-submit-btn" onClick={this.handleSubmitBindType.bind(this)}>提交</div>
          <div className={ payType != 0 && payType != 2 ? "hide" : "item spec"}>
            <p>请关注您的充值金额是否超限</p>
            <Table columns={colums} dataSource={data} pagination={false} bordered />
          </div>
        </Spin>
        <Modal
          visible={scModal.visible}
          title={scModal.clientType + '扫码充值'}
          footer={scModal.paySuccess ? null : (<Button type="primary" onClick={this.handleSCPayCheck.bind(this, scModal.rechargeId)}>已完成充值</Button>)}
          onCancel={this.handleCloseSCModal.bind(this)}>
          {scModal.paySuccess ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '150px', color: '#00a854' }}><Icon type="check-circle" /></p>
              <p style={{ fontSize: '16px' }}>您已完成充值，3秒后自动关闭...</p>
            </div>
          ) : (
            <div>
              <div style={{ width: '100%', textAlign: 'center', fontSize: '16px' }}>
                请使用{scModal.clientType}客户端扫描下面的二维码完成充值<br />
              支付金额：<span style={{ color: 'red' }}>{scModal.rechargeAmount}</span>元（含手续费：<span style={{ color: 'red' }}>{scModal.rechargeFee}</span>元）
              </div>
              <div style={{ padding: 10, textAlign: 'center', position: 'relative' }}>
                <img src={scModal.qrcode} width="300" />
                <div style={{ position: 'absolute', left: '50%', top: '50%', margin: '-24px 0 0 -24px' }}><img src={scModal.clientType == '支付宝' ? alipayLogo : wechatLogo} width="48" height="48" /></div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    )
  }
}
Recharge.contextTypes = {
  router: React.PropTypes.object.isRequired
}
Recharge = Form.create()(Recharge)
Recharge = connect(state => ({
  user: state.user,
  im: state.im
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Recharge)

export default Recharge
module.exports = exports['default']
