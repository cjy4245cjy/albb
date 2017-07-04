import React, { Component } from 'react'
import Runtime from '../../../utils/Runtime'

const domain = Runtime.getDomain()

export default class Charge extends Component {

  render (){
    return (
      <div className='stock'>
        <span className='center-head'>收费标准</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、证券公司收费标准</h2>
          T+1：交易佣金万8<br/>
          T+D：交易佣金千1.5
          <p></p>
          <p><br/></p>
          <h2>2、T+1佣金收费标准</h2>
          1）交易佣金为万8（买、卖双向收费）；<br/>
          2）持仓2个交易日内，免服务费，持仓超过2交易日时，对持仓市值，按19.9元/万元/天的标准收取延期补偿金；<br/>
          3）卖出时交易所会统一收取印花税千1（单向、交易所收取）
          <p></p>
          <p><br/></p>
          <h2>3、T+1盈利分配标准</h2>
          策略盈利与资方8：2分成；
          <p></p>
          <p><br/></p>
          <h2>4、T+D佣金收费标准</h2>
          1）交易佣金为千1.5；<br/>
          2）持仓5个交易日内，免服务费，持仓超过5个交易日，对持仓市值，按13.8元/万元/天的标准收取延期补偿金；<br/>
          3）卖出时交易所会统一收取印花税千1（单向、交易所收取）；
          <p></p>
          <p><br/></p>
          <h2>5、T+D盈利分配标准</h2>
          1）持仓5个交易日内，策略盈利与资方9：1分成；<br/>
          2）持仓超过5个交易日，策略盈利与资方8：2分成；
          <p></p>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
