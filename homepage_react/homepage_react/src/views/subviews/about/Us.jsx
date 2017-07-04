import React, { Component } from 'react'

export default class Us extends Component{
  render (){
    return (
      <div>
        <span className='center-head'>联系我们</span>
        <div className="us-style">
          <p className="img01" style={{marginTop:32}}>
            <img style={{float: 'left',paddingRight:24}} src="//static.ddy98.com/front/1.0.0/images/about/img006.jpg"/>
          </p>
          <div className="tmed">
            <ul>
              <li className="first"><span>公司地址:</span>浙江省杭州市上城区 钱江路58号 赞成.太和广场2号楼5楼</li>
              <li><span>邮&nbsp;&nbsp;&nbsp;&nbsp;编:</span>310000</li>
              <li className="last"><span>官网域名:</span><a href="//www.ddy98.com" target="_blank" style={{color:'#0088CC'}}>www.ddy98.com</a></li>
            </ul>
            <ul>
              <li className="first"><span>客户服务</span></li>
              <li><span>客服热线:</span>400-7111-288，每天9:00-18:00</li>
              <li className="last"><span>客服邮箱:</span>service@ddy98.com </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = exports['default']
