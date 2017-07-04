import React from 'react'
import Runtime from '../utils/Runtime'
import Api from '../store/constants/Api'
import ApiCaller from '../utils/ApiCaller'
import Card from '../components/common/Card'
import { QueueAnim, Switch } from 'antd'

class Privacy extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
    this.fetch()
  }

  fetch(){
    ApiCaller.call(Api.user.privacySelect,(res) => {
      if(res.code == 0){
        this.setState({ data:res.data })
      }
    })
  }

  handleOnChangeReal(index){
    ApiCaller.call(Api.user.privacySet,{
      realStatus: -1 * this.state.data.realStatus
    },(res) => {
      if(res.code == 0){
        this.fetch()
      }else{
        message.error(res.msg)
      }
    })
  }

  handleOnChangeSim(){
    ApiCaller.call(Api.user.privacySet,{
      simuStatus: -1 * this.state.data.simuStatus
    },(res) => {
      if(res.code == 0){
        this.fetch()
      }else{
        message.error(res.msg)
      }
    })
  }

  render(){
    const data = this.state.data
    return (
      <div className="privacy-layout">
        <Card title="隐私设置" bodyHeight="500px">
          <QueueAnim delay={400}>
            <div className="item" key='a'>
              <div className="icon"><i className="iconfont icon-denglumima" style={{ fontSize:'24px' }}></i></div>
              <div className="name">实盘信息是否开放</div>
              <div className="operation">
                <Switch checked={data.realStatus == 1} onChange={this.handleOnChangeReal.bind(this)} />
              </div>
            </div>
            <div className="item hide" key='b'>
              <div className="icon"><i className="iconfont icon-denglumima" style={{ fontSize:'24px' }}></i></div>
              <div className="name">模拟信息是否开放</div>
              <div className="operation">
                <Switch checked={data.simuStatus == 1} onChange={this.handleOnChangeSim.bind(this)} />
              </div>
            </div>
          </QueueAnim>
        </Card>
      </div>
    )
  }
}

export default Privacy
module.exports = exports['default']
