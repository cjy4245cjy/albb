import React from 'react'
import Runtime from '../../utils/Runtime'

const domain = Runtime.getDomain()

export default class Footer extends React.Component {
  render () {
    return (
      <div
        className='bottom-content'
      >
        <div className='main-page'>
          <div style={{overflow:'hidden',marginTop:0}}>
            <div style={{float:'left',width:538}}>
              <ul className='bottom-contact-list'>
                <li key={2}>电话：<span style={{ fontSize:'22px' }}>400-7111-288</span>（工作日 9:00-18:00）</li>
                <li key={3}>网址：www.hdclzx.com</li>
                <li key={4}>地址：浙江省杭州市滨江区滨盛路1505号银丰大厦</li>
                <li key={5}>浙江先启网络科技有限公司  版权所有 </li>
              </ul>
            </div>
            <div className='bottom-desc-groups'>
              <div style={{ float:'left',paddingTop:45 }} key='desc'>
                <p className='bottom-p' key={1}>近在咫尺的市场，触手可及的机遇</p>
                <p className='bottom-p hide' key={2}>商务加盟：<span style={{ fontSize:'22px',letterSpacing:0 }}>15990037540&nbsp;&nbsp;&nbsp;18814883178</span></p>
                <p className='bottom-p hide' key={3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize:'22px',letterSpacing:0 }}>18069763567&nbsp;&nbsp;&nbsp;18069805883</span></p>
                <p className='bottom-p' key={4}>期待您的加盟，金融界新时代的创富机会</p>
              </div>
              <div key={4} style={{overflow:'hidden'}}>
                <div style={{float:'left',margin:'60px 0 0 36px'}}>
                  <div style={{color:'#fff'}}>
                    <span style={{fontSize:'14px'}}>微信扫一扫</span>
                  </div>
                  <div style={{marginTop:10,overflow:'hidden',color:'#fff'}}>
                    <img style={{display:'block'}} src='data:image/png;base64,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'/>
                  </div>
                </div>
                <div style={{float:'right',margin:'60px 0 0 36px'}}>
                  <div style={{color:'#fff',fontSize:'14px'}}>
                    <span>微博</span>
                    <span style={{ color:'#fc5146' }}> + 关注</span>
                  </div>
                  <div style={{marginTop:10,overflow:'hidden',color:'#fff'}}>
                    <img style={{display:'block'}} src='data:image/png;base64,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'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
module.exports = exports['default']
