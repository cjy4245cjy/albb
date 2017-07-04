import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import Card from '../components/common/Card'

class AssetsTab extends Component {
  render () {
    return (
      <div className="tabs">
        <IndexLink activeClassName="actived" to="/center/assets">钱包流水</IndexLink>
        <Link activeClassName="actived" to="/center/assets/strategy">策略交易流水</Link>
        <Link activeClassName="actived" to="/center/assets/deduction">抵用金明细</Link>
        <Link activeClassName="actived" to="/center/assets/recharge">充值</Link>
        <Link activeClassName="actived" to="/center/assets/withdraw">提现</Link>
      </div>
    )
  }
}

class Assets extends Component {
  componentDidMount () {
    this.props.actions.loadUserAssets()
    this.props.actions.loadUserStrategyAssets()
  }

  render () {
    return (
      <div className="assets">
        <AssetsTab />
        <div style={{ padding:'0 33px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Assets)
module.exports = exports['default']
