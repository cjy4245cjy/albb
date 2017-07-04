import React, { Component } from 'react'

export default class Product extends Component{
  render (){
    return (
      <div className='center'>
        <span className='center-head'>产品介绍</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、什么是点点投顾？</h2>
          投顾是指平台注册用户中，有股票操作需求、并提供股票策略和止盈止损的股票投资人。
          <p></p>
          <p><br/></p>
          <h2>2、什么是T+1？</h2>
          1）履约信用金500起（500-4万），单笔最高可以买入32万股票市值（4万信用金）；<br/>
          2）持仓时间在2交易日内，操作免服务费，持仓超过2交易日时，对持仓市值，按19.9元/万元/天的标准收取延期补偿金；<br/>
          3）策略盈利与资方8:2分成。
          <p></p>
          <p><br/></p>
          <h2>3、什么是T+D？</h2>
          1）履约信用金3万起（3万-10万），单笔最高可以买入50万股票市值（10万信用金）；<br/>
          2）持仓时间在5交易日内免服务费，策略盈利与资方9:1分成；<br/>
          3）持仓超过5交易日时，对持仓市值，按13.8元/万元/天的标准收取延期补偿金，策略盈利与资方8:2分成；<br/>
          <p></p>
       </div>
      </div>
    )
  }
}

module.exports = exports['default']
