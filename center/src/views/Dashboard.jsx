import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import Card from '../components/common/Card'
import PBTransfer from '../components/PBTransfer'
import * as Format from '../utils/Format'
import Runtime from '../utils/Runtime'
import classnames from 'classnames'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      transfer: {
        type: 1,
        visible: false
      }
    }
  }

  openTransferIn () {
    this.setState({
      transfer: {
        type: 1,
        visible: true
      }
    })
  }

  openTransferOut() {
    this.setState({
      transfer: {
        type: 2,
        visible: true
      }
    })
  }

  closeTransfer () {
    const state = this.state
    state.transfer.visible = false
    this.setState(state)
  }

  componentDidMount() {
    this.props.actions.loadUserAssets()
    this.props.actions.loadUserStrategyAssets()
  }

  render () {
    const assets = this.props.user.get('assets')
    const strategyAssets = this.props.user.get('strategyAssets')
    const loginInfo = this.props.user.get('loginInfo')
    const pbLink = "//pb." + Runtime.getDomain()
    const financialClass = classnames({
      'financial': true,
      'show': parseFloat(assets.get('totalInvested')) > 0
    })
    const available = strategyAssets.get('available')
    return (
      <div className="dashboard">
        <div className="strategy-row">
          <div className="row-icon"><i className="iconfont icon-qiandai" style={{ fontSize:'30px' }}/></div>
          <div className="row-value">
            <p>点点盈钱包</p>
            <p className="red-value">{ Format.fixed(assets.get('available')) }元</p>
          </div>
          <div className="row-btn">
            <Link className="button recharge" to="/center/assets/recharge">充值</Link>
            <Link className="button withdraw" to="/center/assets/withdraw">提现</Link>
          </div>
        </div>
        <div className={ available ? "other-row" : "other-row" }>
          <div className="row-icon"><i className="iconfont icon-renminbi" style={{ fontSize:'30px' }}/></div>
          <div className="row-value">
            <p>策略余额</p>
            <p className="red-value">{ Format.fixed(available) }元</p>
          </div>
          <div className="row-btn">
            <a className="value-to-strategy" onClick={this.openTransferIn.bind(this)} style={{ marginRight: 10 }}>转入</a>
            <a className="value-to-strategy" onClick={this.openTransferOut.bind(this)}>转出</a>
          </div>
        </div>
        <div className="data-row">
          <div className="data-row-child">
            <div>
              <span>当前冻结</span>
              <span className='red-value' style={{marginLeft:10}}>{this.props.user.get('strategyAssets').get('actualFreeze') || 0 }</span>
              <span>元</span>
              <a href={'//pb.' + Runtime.getDomain() + '/real/trade/sell'}>查看详情></a>
            </div>
          </div>
          <div className="data-row-child">
            <div>
              <span>抵用金余额</span>
              <span className='red-value' style={{marginLeft:10}}>{this.props.user.get('strategyAssets').get('deduction') || 0 }</span>
              <span>元</span>
              <a href={'//pb.' + Runtime.getDomain() + '/real/trade/buy/t1'}>前去使用></a>
            </div>
          </div>
          <div className="data-row-child">
            <div>
              <span>您当前剩余使用的红包</span>
              <span className='red-value' style={{marginLeft:10}}>{this.props.user.get('strategyAssets').get('bonusCount')}</span>
              <span>个</span>
              <a href={'//pb.' + Runtime.getDomain() + '/real/trade/buy/t1'}>前去使用></a>
            </div>
          </div>
          <div className="data-row-child" style={{ border:0, display: "none" }}>
            <div>
              <span>您当前剩余1000元使用次数</span>
              <span className='red-value' style={{marginLeft:10}}>{this.props.user.get('strategyAssets').get('expCount')}</span>
              <span>次</span>
              <a href={'//pb.' + Runtime.getDomain() + '/real/trade/buy/experience'}>前去使用></a>
            </div>
          </div>
        </div>
        <div className="base-info-row">
          <div className="row-icon"><i className="iconfont icon-shenfenzheng" style={{ fontSize:'30px' }}/></div>
          <span style={{ fontSize:'14px',color:"#666" }}>基本信息</span>
        </div>
        <div className="login-info-row">
          <div style={{ width:274 }}>用户名：{ loginInfo.get('userName') }</div>
        </div>
        <PBTransfer type={this.state.transfer.type} onCancel={this.closeTransfer.bind(this)} visible={this.state.transfer.visible} />
      </div>
    )
  }
}
export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Dashboard)
module.exports = exports['default']
