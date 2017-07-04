import React from 'react'
import Api from '../store/constants/Api'
import ApiCaller from '../utils/ApiCaller'
import { Modal, Form, Input, message, notification } from 'antd'
const FormItem = Form.Item

class NickNameDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  handleSubmit() {
    this.props.form.validateFields((error, value) => {
      if (!error)
        this.setNickName(value.nickName)
    })
  }

  setNickName (nickName) {
    this.setState({
      loading: true
    })
    ApiCaller.call(Api.user.setInfo, {nickName: encodeURIComponent(nickName)}, (res)=>{
      this.setState({
        loading: false
      })
      if (res.code == 0) {
        notification.success({
          message: '昵称已修改',
          description: '您的昵称已更新'
        })
        this.props.onOk(nickName)
      } else {
        message.error(res.msg)
      }
    })
  }

  checkNickName (rule, value, callback) {
    callback()
  }

  render () {
    const { getFieldProps, setFieldsValue } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const nickNameProps = getFieldProps('nickName', {
      rules: [
        { required: true, whitespace: true, max:7, message: '请填写您的昵称，最多7个字符' },
        { validator: this.checkNickName.bind(this) },
      ],
      initialValue: this.props.nickName || ''
    })
    return (
      <Modal
        title="昵称设置"
        onOk={this.handleSubmit.bind(this)}
        onCancel={this.props.onCancel}
        confirmLoading={this.state.loading}
        visible={this.props.visible}>
        <Form horizontal form={this.props.form}>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="昵称：">
            <Input {...nickNameProps} placeholder="请输入您要设置的昵称" />
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
NickNameDialog = Form.create()(NickNameDialog)

export default NickNameDialog
