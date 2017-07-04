import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import Api from '../store/constants/Api'
import ApiCaller from '../utils/ApiCaller'
import { Modal, Upload, Icon, Button, Spin, message, notification } from 'antd'

class HeadPicDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      uploading: false,
      imageUrl: ''
    }
  }

  handleUpload () {
    this.setState({
      loading: true
    })
    const imageUrl = this.state.imageUrl
    ApiCaller.call(Api.user.setHeadPic, {headImage:imageUrl}, (res)=>{
      this.setState({
        loading: false
      })
      if (res.code == 0) {
        notification.success({
          message: '头像上传成功',
          description: '您的头像已更新!'
        })
        this.props.actions.setHeadPic(imageUrl)
        this.props.onCancel()
      } else {
        message.error(res.msg)
      }
    })
  }

  handleBeforeUpload () {
    this.setState({
      uploading: true
    })
  }

  handleChange (info) {
    if (info.file.status == 'done') {
      this.setState({
        uploading: false
      })
      const res = info.file.response
      if (res.code == 0) {
        notification.success({
          message: '头像上传成功',
          description: '您的头像已更新!'
        })
        this.props.actions.setHeadPic(res.data)
        this.props.onCancel()
        // this.setState({
        //   imageUrl: res.data
        // })
        // message.success('图片上传成功!')
      } else {
        message.error('图片上传失败:' + res.msg)
      }
    }
  }

  render () {
    const props = {
      name: 'headImage',
      showUploadList: false,
      action: Api.system.uploadImage.url,
      headers: ApiCaller.getCommonHeader()
    }
    return (
      <Modal
        title="头像设置"
        onOk={this.props.onCancel}
        onCancel={this.props.onCancel}
        confirmLoading={this.state.loading}
        visible={this.props.visible}
        footer=''>
          <Spin spining={this.state.uploading}>
            <div style={{ margin: '0 auto', width: 200, height: 200, backgroundColor: '#e6f2fa' }}>
              <img width="200" height="200" src={this.state.imageUrl || this.props.userHeadImage} />
            </div>
            <div style={{ margin: '10px auto', width: 105 }}>
              <Upload {...props} onChange={this.handleChange.bind(this)} beforeUpload={this.handleBeforeUpload.bind(this)}>
                <Button type="ghost">
                  <Icon type="upload" /> 点击上传
                </Button>
              </Upload>
            </div>
          </Spin>
      </Modal>
    )
  }
}
export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(HeadPicDialog)
