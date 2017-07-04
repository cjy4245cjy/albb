import React, { Component } from 'react'

export default class FriendLink extends Component{

  openWindow(url){
    window.open(url,'_blank')
  }

  render (){
    return (
      <div>
        <span className='center-head'>合作伙伴</span>
        <div className="friend-link">
          <ul style={{marginTop:30,lineHeight:'30px',color:'#000'}}>
            <li className="cooperation-item" onClick={this.openWindow.bind(this,'http://www.codi.cc')}>
              <div className="item-logo">
                  <a href="javascript:void(0);">
                      <img src="//static.ddy98.com/front/1.0.0/images/about/kedi-logo.png" alt="科地财富"/>
                  </a>
              </div>
              <div className="item-content">
                  <p className="name">
                      <a href="javascript:void(0);">科地财富</a>
                  </p>
                  <p>
                      杭州科地财富金融服务有限公司（CODI FORTUNE），隶属于科地资本集团（CODI GROUP）旗下，成立于2009年，是致力于财富管理和投融资解决方案的金融服务商，通过创新金融产品的开发与设计，以及多维度的产品筛选与风险控制体系，专注地为中国高净值人士提供全方位的财富管理服务。科地财富成立6年来，服务于3000位高净值客户，累计资产管理规模超过60亿元，帮助客户收益5亿元，所推荐项目100%到期足额兑付。
                  </p>
              </div>
            </li>
            <li className="cooperation-item" onClick={this.openWindow.bind(this,'http://www.tyzq.com.cn')}>
              <div className="item-logo">
                  <a href="javascript:void(0);">
                      <img src="//static.ddy98.com/front/1.0.0/images/about/jz-logo.png" alt="九州证券"/>
                  </a>
              </div>
              <div className="item-content">
                  <p className="name">
                      <a href="javascript:void(0);">九州证券</a>
                  </p>
                  <p>
                      九州证券有限公司（以下简称“九州证券”）是经中国证监会批准，由国内顶尖PE机构九鼎投资控股的中国首家PE系证券公司。九州证券致力于打造综合证券服务提供商，目前已具备承销与保荐、资产管理、证券经纪、做市等多项业务资质，迅速跻身综合型券商阵营。
                  </p>
              </div>
            </li>
            <li className="cooperation-item" onClick={this.openWindow.bind(this,'http://www.cnht.com.cn')}>
              <div className="item-logo">
                  <a href="javascript:void(0);">
                      <img src="//static.ddy98.com/front/1.0.0/images/about/ht-logo.png" alt="恒泰证券"/>
                  </a>
              </div>
              <div className="item-content">
                  <p className="name">
                      <a href="javascript:void(0);">恒泰证券</a>
                  </p>
                  <p>
                      恒泰证券股份有限公司（以下简称“公司”）前身为内蒙古自治区呼和浩特证券公司，成立于1988年，2009年7月恒泰证券注册资本增至21.95亿元。恒泰证券在自治区及北京、上海、深圳等国内主要城市设有64家证券营业部，另外还拥有恒泰长财证券有限责任公司、恒泰期货有限公司、恒泰先锋投资有限公司和恒泰资本投资有限责任公司等4家全资子公司，分别负责经营投资银行业务、期货业务、另类投资业务和直接投资业务。
                  </p>
              </div>
             </li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
