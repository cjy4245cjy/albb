import React, { Component } from 'react'

export default class Introduce extends Component{
  render (){
    return (
      <div className='introduce'>
        <span className='center-head'>公司介绍</span>
        <div className='main-content'>
          <p>
            <br/>
            <img style={{float:'left',paddingRight:24}} src="//static.ddy98.com/front/1.0.0/images/about/img002.png"/>
          </p>
          <p style={{lineHeight:'24px'}}>
            <span style={{fontFamily:'微软雅黑',fontWeight:'bold',fontSize:'16px'}}>公司介绍：</span>
          </p>
          <p style={{textIndent:'32px',lineHeight:'24px'}}>
            <span style={{fontFamily:'微软雅黑',fontSize:'16px'}}>点点盈互联网金融服务（杭州）有限公司是一家专业的在线投资管理平台，公司高级管理团队及顾问由黄晓捷、陈宇、陈刚等资深的金融行业和互联网行业的专家组成。&nbsp;</span>
          </p>
          <p style={{lineHeight:'24px'}}>
            <span style={{fontFamily:'微软雅黑',fontSize:'16px'}}>&nbsp;&nbsp;&nbsp;&nbsp;作为专业的在线投资管理平台，点点盈将以互联网券商为主要发展方向，将成功的个人或专业投资者每天的真实投资交易实时展现，并对成功投资者按风险偏好和业绩排名。根据投资风险偏好，广大的投资者可以跟投自己偏好的成功投资者，实现普通投资者和专业成功投资者、精英基金经理无缝对接、同步投资。</span>
          </p>
          <p></p>
        </div>
        <div style={{lineHeight:'24px',fontFamily:'微软雅黑',fontSize:'16px',color:'#111'}}>
          <p>
            <span style={{fontWeight:'bold'}}>我们的定位：</span>
            <span>让投资更简单！通过在线跟投，让千千万万的普通投资者拥有成功投资者一样的投资策略，获得超额回报！</span>
          </p>
          <p>
            <span style={{fontWeight:'bold'}}>我们的运营模式：</span>
            <span>改变把钱交给基金公司管理的传统模式，让自己对自己的钱当家作主！</span>
          </p>
          <p>
            <span style={{fontWeight:'bold'}}>我们的价值：</span>
            <span>点点盈借鉴了MOM模式的投资理念，采用“跟随投资”这一模式，挖掘业余或职业的投资高手（种子人选），将他们的投资业绩和持仓情况晒出来，点点盈从众多的“种子选手”中挑选出真正业绩出色、操作稳定的投资管理人，让大家可以模仿高手进行操作。点点盈致力为广大投资者提供专业的投资咨询服务，让投资更简单，更便捷，更高效！</span>
          </p>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
