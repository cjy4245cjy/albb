import React, { Component } from 'react'

export default class Team extends Component{
  render (){
    return (
      <div>
        <span className='center-head'>管理团队</span>
        <div className='main-content'>
          <ul style={{marginTop:30}}>
            <div className="management-title">股东背景</div>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 0'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        陈刚
                    </p>
                    <p>
                        亚洲（澳门）国际公开大学MBA毕业<br/>
                        杭州科地资本集团    董事长<br/>
                        杭州市政协委员<br/>
                        杭州市下城区人大代表<br/>
                        公羊会全国委员会执行副主席
                    </p>
                </div>
             </li>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -100px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        陈宇
                    </p>
                    <p>
                        中国人民银行直属院校中国金融学院毕业<br/>
                        德弘资产管理有限公司创始人<br/>
                        仁和智本资产管理集团合伙人<br/>
                        中国网银联盟首席金融专家<br/>
                        刘鸿儒基金研究会研究员
                    </p>
                </div>
            </li>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -200px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        黄晓捷
                    </p>
                    <p>
                        中国人民银行研究生部毕业<br/>
                        昆吾九鼎投资管理有限公司 总裁、创始合伙人
                    </p>
                </div>
            </li>
            <div className="management-title" style={{marginTop:30}}>高管团队</div>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -300px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        徐磊 　 副总裁
                    </p>
                    <p>
                        ＡＭＵ商学院MBA毕业<br/>
                        曾任职于世界500强企业<br/>
                        现任杭州科地集团  副总裁<br/>
                        10年金融行业从业经历，保监会/银监会/证监会认证高管，主管集团旗下互联<br/>
                        网金融平台，拥有丰富的金融企业管理经验和互联网行业实践经验。
                    </p>
                </div>
            </li>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -400px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        张晓芬 　 副总裁
                    </p>
                    <p>
                        曾任职5173集团、658金融网、818医药网高管<br/>
                        多年的互联网服务行业从业经验，完整的互联网服务产品设计，<br/>
                        电子交易流程架构与优化，客户服务体系建设与团队管理，人力资源发展培训<br/>
                        履历，对互联网金融行业运营与服务体系建设有独到见解。
                    </p>
                </div>
            </li>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -500px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        张宇杰 　 首席风控官
                    </p>
                    <p>
                        浙江大学毕业<br/>
                        曾任职华西证券、德邦证券、高工产研高管<br/>
                        现任科地资产管理有限公司  副总经理<br/>
                        10年金融产品开发及股权投融资经验，参与投资基金设立、企业境内外上市、<br/>
                        结构化资金资产池设立。
                    </p>
                </div>
            </li>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -600px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        姚海栋 　 首席技术官
                    </p>
                    <p>
                        曾任UT斯达康系统工程师，阿里巴巴技术专家（手机淘宝客户端负责人），车乐通汇CTO。<br/>
                        10多年的软件开发经验，多年的互联网研发团队管理经验，技术基础扎实，产品意识突出，对于如何打造和培养高效率技术团队有独到之处，对各种互联网产品的研发管理有丰富经验。
                    </p>
                </div>
            </li>
            <li className="cooperation-item">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -700px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        吴海燕 　 客服总监
                    </p>
                    <p>
                        浙江师范大学毕业<br/>
                        曾任职于5173集团、658金融网高管<br/>
                        多年的互联网服务行业从业经验和教学经验，有完整电商交易服务流程架构与优<br/>
                        化，客户服务体系建设，销售客服团队建议及团队组建管理经验，对互联网金融<br/>
                        行业销售与服务体系建设有成功的经验。
                    </p>
                </div>
            </li>
            <li className="cooperation-item last">
                <div className="item-photo">
                    <i style={{backgroundPosition:'0 -800px'}}></i>
                </div>
                <div className="item-content">
                    <p className="name">
                        周用斌 　 销售总监
                    </p>
                    <p>
                        湖北理工学院毕业<br/>
                        曾任职东海证券、银河证券、658金融网高管<br/>
                        多年的券商从业经验，金融产品互联网化设计，销售客服团队建设及有丰富的团队管理经验。
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
