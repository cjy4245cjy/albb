import React, { Component } from 'react'
import Runtime from '../../../utils/Runtime'

const domain = Runtime.getDomain()

export default class Risk extends Component {

  render (){
    return (
      <div className='stock'>
        <span className='center-head'>风控规则</span>
        <div className='center-main'>
          <p><br/></p>
          <h2>1、什么是策略止盈？</h2>
          策略止盈：投顾自行设定卖出价格，在计划盈利多少的情况下卖出股票。<br/>
          发起策略时，默认止盈为现价的20%，止盈最高可上调至30%。策略买入后，除遇股票涨停（上调15%）外，止盈不可自行修改。如遇复牌后涨停（上调25%），需联系客户经理走流程申请修改；
          <p></p>
          <p><br/></p>
          <h2>2、什么是策略止损？</h2>
          策略止损：投顾自行设定卖出价格，当股价跌至可承受价位时卖出股票。<br/>
          发起策略时，止损默认为最大值，可不调，策略买入后客户可根据需要，通过补保的方式自行修改。<br/>
          达到跌幅触发止损：当T+1股票当日跌幅超过9.5%，且当前信用金亏损大于40%时会止损平仓，如当日已完成递延则不会触发跌幅止损。
          <p></p>
          <p><br/></p>
          <h2>3、股票停牌怎么处理？</h2>
          停牌有2种方式可选：<br/>
          1）投顾按买入的市值买断，复牌结算后盈亏客户自行承担，不再分成；<br/>
          2）投顾缴纳延期补偿金递延到复牌，复牌卖出后仍按8:2分成，信用金多退少补；<br/>
          PS:停牌期间，延期补偿金按正常5折（万9.95)系统自动收取，如递延期内，某一日或某一时间段未正常缴纳，补缴时按全价收取。如客户连续5个交易日未能交纳延期补偿金，将视为客户违约，默认按自动放弃处理，信用金不再退回。<br/>
          <p></p>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
