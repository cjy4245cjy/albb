import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import Api from '../store/constants/Api'
import ApiCaller from '../utils/ApiCaller'
import { bindActionCreators } from 'redux'
import { Modal, message } from 'antd'
import CardBindForm from './CardBindForm'
import RechargeConfirm from './RechargeConfirm'
import { getDomain } from '../utils/Runtime'

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


class CardBindDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      handleSubmit: () => {},
      handleReset: () => {}
    }
  }

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
  }

  handleComfirm () {
    this.state.handleSubmit((values) => {
      // 构造跳转数据
      const payData = {
        sid: this.props.sid,
        amount: 1,
        bankNo: values.bankCard,
        source: 1,
        realName: values.realName,
        idcardNo: values.idCard
      }
      //console.log(payData)
      // 跳转
      //window.open('//' + getDomain() + ':8082/ddy-llpay/lianlian/recharge?ddydata=' + encodeURIComponent(JSON.stringify(payData)))
      //构造充值
      const api = getRechargeApi('51')
      //api.url += '51'
      ApiCaller.call(api,{
        realName: encodeURIComponent(values.realName),
        bankNo: values.bankCard,
        idCard: values.idCard,
        amount: 1
      },(res) => {
        if(res.code == 0){
          //提交form
          const data = res.data
          let newForm = document.createElement("form")
          document.body.appendChild(newForm)
          newForm.method = 'post'
          newForm.action = '//pay.' + getDomain() + '/fmsubmit'
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
          this.handleCancel()
          //RechargeConfirm.show(this.reloadInfo.bind(this))
        }else{
          message.error(res.msg)
        }
      })
    })
  }

  handleCancel () {
    this.state.handleReset()
    this.props.onCancel()
  }

  render () {
    return (
      <Modal
        title="绑定银行卡"
        onOk={this.handleComfirm.bind(this)}
        onCancel={this.handleCancel.bind(this)}
        visible={this.props.visible}
        className="card-bind-dialog">
        <CardBindForm onRegMethods={this.handleRegMethods.bind(this)} />
      </Modal>
    )
  }
}
export default connect(state => ({
  global: state.global,
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(CardBindDialog)
