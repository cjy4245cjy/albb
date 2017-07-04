import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../store/actions'
import { Link, IndexLink } from 'react-router'


class Help extends Component{
  render (){
    return (
      <div className='help'>
        <div style={{background:'#108ec8',height:420,paddingTop:80}}>
          <div style={{width:1000,height:340,margin:'0 auto'}}>
            <img src='//static.ddy98.com/front/1.0.0/images/helps/bai00.png'/>
          </div>
        </div>
        <div style={{width:'100%',background:'#fff',padding:'54px 0'}}>
          <div style={{width:980,margin:'0 auto',minHeight:600,overflow:'hidden'}}>
            <div style={{float:'left',width:200}}>
              <ul className='left-nav'>
                <li><Link activeClassName='active' to='/help/register'>注册相关</Link></li>
                <li><Link activeClassName='active' to='/help/business'>交易相关</Link></li>
                <li><Link activeClassName='active' to='/help/charge'>收费标准</Link></li>
                <li><Link activeClassName='active' to='/help/security'>帐号安全</Link></li>
                <li><Link activeClassName='active' to='/help/money'>资金相关</Link></li>
                <li><Link activeClassName='active' to='/help/risk'>风控规则</Link></li>
                <li><Link activeClassName='active' to='/help/feedback'>意见反馈</Link></li>
              </ul>
            </div>
            <div style={{float:'left',width:690,marginLeft:68}}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  global: state.global,
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Help)

module.exports = exports['default']
