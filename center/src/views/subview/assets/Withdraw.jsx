import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../../../store/actions'
import { bindActionCreators } from 'redux'
import { shouldComponentUpdate } from 'react-immutable-render-mixin'
import Api from '../../../store/constants/Api'
import ApiCaller from '../../../utils/ApiCaller'
import ValidateHelper from '../../../utils/ValidateHelper'
import * as Format from '../../../utils/Format'
import Security from '../../../utils/Security'
import { Form, Input, Button, Select, Row, Col, message, notification, Modal} from 'antd'
import classnames from 'classnames'
const FormItem = Form.Item
const Option = Select.Option

function bankNoHide(bankNo) {
  return (!!bankNo)?bankNo.substr(0, 4) + ' **** ' + bankNo.substr(bankNo.length - 4):''
}

/**
  * 提现
**/
class Withdraw extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }

  // 绑定银行卡
  handleBindCardClick () {
    this.props.actions.showCardBindDialog(true)
  }

  // 验证提现金额有效性
  checkAmount (rule, value, callback){
    if(ValidateHelper.amount(value) && value != 0)
    {
      if (value > this.props.user.get('assets').get('available'))
        callback('余额不足')
      else
        callback()
    }
    else
      callback(new Error('请输入有效的金额'))
  }

  handleSubmit (e) {
    e.preventDefault()
    const fieldsVal = this.props.form.getFieldsValue()
    this.props.form.validateFields((errors, values) => {
      if(!!errors){
        for(let error in errors){
          Modal.error({
           title: '错误',
           content: errors[error].errors[0].message
          })
          return
        }
      }
      if (!errors) {
        if(this.props.user.get('baseInfo').get('authStatus') != 1){
          Modal.error({
           title: '错误',
           content: '请先绑定银行卡',
          })
          return
        }
        this.setState({
          loading: true
        })
        ApiCaller.call(Api.user.getWithdraw, {
          //passwd: Security.encryptMd5(fieldsVal.tradePwd),
          //bankNo: fieldsVal.bankNo,
          transPwd: Security.encryptMd5(fieldsVal.tradePwd),
          amount: fieldsVal.amount
        }, (res)=> {
          this.setState({
            loading: false
          })
          if (res.code == 0) {
            this.props.actions.loadUserStrategyAssets()
            this.props.form.resetFields()
            Modal.success({
              title: '成功',
              content: '提现申请已提交',
            })
          }
          else {
            Modal.error({
             title: '错误',
             content: res.msg,
            });
          }
        })
      }
    })
  }

  render () {
    const { getFieldProps } = this.props.form
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 7 },
    }
    const hasBoundCard = this.props.user.get('baseInfo').get('authStatus') == 1
    const tradePwdSetted = this.props.user.get('baseInfo').get('transPwd') ? true : false
    const cardHelpClass = classnames({
      hide: !hasBoundCard
    })
    const cardSelectClass = classnames({
      "withdraw-card-container": true,
      hide: !hasBoundCard
    })
    const goBindCardClass = classnames({
      "bind-card-desc": true,
      hide: hasBoundCard
    })
    const tradePwdInputClass = classnames({
      hide: !tradePwdSetted
    })
    const goSetTradePwdClass = classnames({
      hide: tradePwdSetted
    })
    const amountProps = getFieldProps('amount', {
      rules: [
        { required: true, whitespace: true, message: '请输入您要提现的金额' },
        { validator: this.checkAmount.bind(this) },
      ],
    })
    const tradePwdProps = getFieldProps('tradePwd', {
      rules: [
        { required: true, whitespace: true, message: '请输入您的交易密码' }
      ]
    })
    const userBankCardList = this.props.user.get('bankCardList')
    const bankImg = userBankCardList.size > 0 ? '//static.ddy98.com/front/1.0.0/images/banks/' + userBankCardList.get(0).alias + '.png' : ''
    const bankNo = userBankCardList.size > 0 ? userBankCardList.get(0).bankNo.substr(-4) : ''
    // const bankCards = this.props.user.get('bankCardList').toArray().map((item, index)=>{
    //   const cardText = `${item.bankName} ${item.bankNo}`
    //   return (<Option key={index} value={index}>{cardText}</Option>)
    // })
    const bankCard = this.props.user.get('bankCardList').get(0) || {}
    return (
      <div className="withdraw">
        <div className="item">
          <Form horizontal form={this.props.form} onSubmit={this.handleSubmit.bind(this)}>
            <FormItem
              { ...formItemLayout }
              label="钱包余额">
              <p className="ant-form-text">{Format.fixed(this.props.user.get('assets').get('available'))}</p>
            </FormItem>
            <FormItem
              { ...formItemLayout }
              label="提现金额"
              style={{ marginTop:20 }}>
              <Input {...amountProps} placeholder="请输入您要提现的金额" addonAfter="元" />
            </FormItem>
            <p className="input-desc">提现有问题？在线<a className="red-value" href="//wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAxNTM4MF8zMTM5MDdfNDAwNzExMTI4OF8yXw" target="_blank">联系客服</a>或拨打400-7111-288咨询</p>
            <FormItem
              {...formItemLayout}
              label="提现银行卡"
              style={{ marginTop:20 }}
              help={<b className={cardHelpClass} style={{fontSize: 12}}>更换银行卡，请联系客服 400-7111-288</b>}>
              <div className={cardSelectClass}>
                <img src={bankImg}/>
                <span>尾号 {bankNo}</span>
              </div>
              <p className={goBindCardClass}>未绑定银行卡<a onClick={this.handleBindCardClick.bind(this)} style={{ marginLeft:44 }}>立即绑定></a></p>
            </FormItem>
            <FormItem
              {...formItemLayout}
              className={tradePwdInputClass}
              hasFeedback
              label="交易密码"
              style={{ marginTop:30 }}>
              <Input {...tradePwdProps} type="password" placeholder="请输入交易密码" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              className={goSetTradePwdClass}
              label="交易密码"
              style={{ marginTop:30 }}>
              <p className="bind-card-desc">未设置交易密码<Link to="/center/accountsafety">前去设置></Link></p>
            </FormItem>
            <Row style={{ margin: '30px 0' }}>
              <Col span="1" offset="3">
                <Button type="primary" htmlType="submit" loading={this.state.loading}>确认提现</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="item remarks">
          <h2>关于提现手续费</h2>
          <p>1.为防止频繁非正常投资为目的的资金充提行为（套现、洗钱、匿名转账等），充值后24小时内未投资的金额提现将收取0.5%的手续费作为第三方支付平台的服务费用。</p>
          <p>2..免费提现额度将根据您的充值提现时间计算，正常投资回款的提现基本不会受影响，敬请投资者放心。以上最终解释权归本平台所有。</p>
          <div className="middle">
            <div className="box">
              <h2>提款T+0到账</h2>
              <p>最快30分钟，一般情况T+0(当天)到账<br />法定节假日或银行特殊原因除外</p>
            </div>
            <div className="box">
              <h2>支持银行达10多家</h2>
              <p>推荐您使用工商银行、建设银行、<br />招商银行、农业银行进行提现，到账最快</p>
            </div>
          </div>
          <p>温馨提示：禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</p>
        </div>
      </div>
    )
  }
}
Withdraw = Form.create()(Withdraw)

export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Withdraw)
module.exports = exports['default']
