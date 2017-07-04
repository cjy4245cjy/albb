import React from 'react'
import { Form, Input } from 'antd'
import ValidateHelper from '../utils/ValidateHelper'
const FormItem = Form.Item

class CardBindForm extends React.Component {

  componentDidMount () {
    const { resetFields } = this.props.form
    this.props.onRegMethods(this.handleSubmit.bind(this), resetFields)
  }

  handleSubmit (callback) {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return
      }
      callback(values)
    })
  }

  // 真实姓名校验
  checkRealName (rule, value, callback) {
    if (/^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/.test(value))
      callback()
    else
      callback([new Error('姓名格式不正确')])
  }

  // 身份证号码校验
  checkIDCard (rule, value, callback) {
    if (ValidateHelper.idCard(value))
      callback()
    else
      callback([new Error('身份证号码不正确')])
  }

  // 银行卡号校验
  checkBankCard (rule, value, callback) {
    if (ValidateHelper.bankCard(value))
      callback()
    else
      callback([new Error('银行卡号不正确')])
  }

  render () {
    const { getFieldProps } = this.props.form
    let formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    let dot = "："
    if(this.props.type == 'layout'){
      formItemLayout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 6 },
      }
      dot = ""
    }
    const realNameProps = getFieldProps('realName', {
      rules: [
        { required: true, message: '请填写您的真实姓名' },
        { validator: this.checkRealName.bind(this) }
      ]
    })
    const idCardProps = getFieldProps('idCard', {
      rules: [
        { required: true, message: '请填写您的身份证号码' },
        { validator: this.checkIDCard.bind(this) }
      ]
    })
    const bankCardProps = getFieldProps('bankCard', {
      rules: [
        { required: true, message: '请填写您的银行卡号码' },
        { validator: this.checkBankCard.bind(this) }
      ]
    })
    return (
      <Form horizontal form={this.props.form}>
        <FormItem
        {...formItemLayout}
        hasFeedback
        label={"真实姓名" + dot}>
          <Input {...realNameProps} placeholder="请输入您的真实姓名" />
        </FormItem>
        <FormItem
        {...formItemLayout}
        hasFeedback
        label={"身份证号" + dot}
        style={{ marginTop:20 }}>
          <Input {...idCardProps} placeholder="请输入您的身份证号码" />
        </FormItem>
        <FormItem
        {...formItemLayout}
        hasFeedback
        label={"银行卡号" + dot}
        style={{ marginTop:20 }}>
          <Input {...bankCardProps} placeholder="请输入您要绑定的银行卡号码" />
        </FormItem>
      </Form>
    )
  }
}
CardBindForm = Form.create()(CardBindForm)
export default CardBindForm
