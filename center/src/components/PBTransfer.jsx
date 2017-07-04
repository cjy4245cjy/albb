import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import ValidateHelper from '../utils/ValidateHelper'
import ApiCaller from '../utils/ApiCaller'
import * as Format from '../utils/Format'
import Api from '../store/constants/Api'
import { Link } from 'react-router'
import { Modal, Form, Input, message, notification } from 'antd'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
}

class TransferIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  checkAmount (rule, value, callback) {
    if (ValidateHelper.amount(value))
    {
      const balance = this.props.user.get('assets').get('available')
      if (value > balance)
        callback (new Error('可用余额不足'))
      else
        callback ()
    }
    else
      callback (new Error('请输入有效的金额'))
  }

  handleSubmit () {
    this.props.form.validateFields((errors, values) => {
      if (!!errors)
        return

      const state = this.state
      state.loading = true
      this.setState(state)
      ApiCaller.call(Api.user.transfer, {
        amount: values.amount
      }, (res)=>{
        state.loading = false
        this.setState(state)
        if (res.code == 0) {
          notification.success({
            message: '余额转入策略账户成功'
          })
          this.props.onCancel()
          this.props.form.resetFields()
          // 刷新账户资金
          this.props.actions.loadUserAssets()
          this.props.actions.loadUserStrategyAssets()
        } else {
          message.error(res.msg)
        }
      })
    })
  }

  render () {
    const balance = this.props.user.get('assets').get('available')
    const { getFieldProps } = this.props.form
    const amountProps = getFieldProps('amount', {
      rules: [
        { required: true, message: '请输入转入金额' },
        { validator: this.checkAmount.bind(this) }
      ]
    })
    return (
      <Modal
        title="从点点盈钱包转入策略账户"
        visible={this.props.visible}
        confirmLoading={this.state.loading}
        onCancel={this.props.onCancel}
        onOk={this.handleSubmit.bind(this)}>
        <Form horizontal form={this.props.form}>
          <FormItem
            {...formItemLayout}
            label="点点盈钱包余额：">
            <p className="ant-form-text">{Format.money(balance, 2, '')}</p>
          </FormItem>
          <FormItem
            {...formItemLayout}>
            <p className="ant-text-recharge" style={{paddingLeft:60}}>如余额不足请先 <Link to="/center/assets/recharge">充值></Link></p>
          </FormItem>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="转入金额：">
            <Input {...amountProps} placeholder="请输入您要转入策略账户的金额" />
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
TransferIn = Form.create()(TransferIn)

class TransferOut extends Component {
  constructor (props) {
    super(props)
    this.state = {
      balance: this.props.user.get('strategyAssets').get('available') || 0,
      loading: false
    }
  }

  checkAmount (rule, value, callback) {
    if (ValidateHelper.amount(value))
    {
      const balance = this.props.user.get('strategyAssets').get('available')
      if (value > balance)
        callback (new Error('可用余额不足'))
      else
        callback ()
    }
    else
      callback (new Error('请输入有效的金额'))
  }

  handleSubmit () {
    this.props.form.validateFields((errors, values) => {
      if (!!errors)
        return

      const state = this.state
      state.loading = true
      this.setState(state)
      ApiCaller.call(Api.user.transfer, {
        amount: -values.amount
      }, (res)=>{
        state.loading = false
        this.setState(state)
        if (res.code == 0) {
          notification.success({
            message: '策略账户余额转出成功'
          })
          this.props.onCancel()
          this.props.form.resetFields()
          // 刷新账户资金
          this.props.actions.loadUserAssets()
          this.props.actions.loadUserStrategyAssets()
        } else {
          message.error(res.msg)
        }
      })
    })
  }

  render () {
    const balance = this.props.user.get('strategyAssets').get('available')
    const { getFieldProps } = this.props.form
    const amountProps = getFieldProps('amount', {
      rules: [
        { required: true, message: '请输入转出金额' },
        { validator: this.checkAmount.bind(this) }
      ]
    })
    return (
      <Modal
        title="从策略账户转出点点盈钱包"
        visible={this.props.visible}
        confirmLoading={this.state.loading}
        onCancel={this.props.onCancel}
        onOk={this.handleSubmit.bind(this)}>
        <Form horizontal form={this.props.form}>
          <FormItem
            {...formItemLayout}
            label="策略账户余额：">
            <p className="ant-form-text">{Format.money(balance, 2, '')}</p>
          </FormItem>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="转出金额：">
            <Input {...amountProps} placeholder="请输入您要从策略账户转出的金额" />
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
TransferOut = Form.create()(TransferOut)

class PBTransfer extends Component {
  render () {
    return this.props.type == 1 ? (<TransferIn {...this.props} />) : (<TransferOut {...this.props} />)
  }
}
export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(PBTransfer)
