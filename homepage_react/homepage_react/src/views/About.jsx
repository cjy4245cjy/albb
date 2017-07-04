import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../store/actions'
import { Link, IndexLink } from 'react-router'

class About extends Component{
  render (){
    return (
      <div className='about'>
        <div style={{background:'#108ec8',height:420,paddingTop:80}}>
          <div style={{width:1000,height:340,margin:'0 auto'}}>
            <img src='//static.zjqycf.com/front/1.0.0/images/helps/bai00.png'/>
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
}))(About)

module.exports = exports['default']
