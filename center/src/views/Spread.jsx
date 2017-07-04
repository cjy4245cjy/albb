import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import Card from '../components/common/Card'
import QRCode from '../utils/QRCode'
import Runtime from '../utils/Runtime'
import Api from '../store/constants/Api'
import ApiCaller from '../utils/ApiCaller'
import * as Format from '../utils/Format'
import { Alert, Input, Button, message, Row, Col, Table, Tooltip } from 'antd'
import { shouldComponentUpdate } from 'react-immutable-render-mixin'

const ZeroClipboard = window.ZeroClipboard
const columns = [
  {
    title: '用户名',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '推广时间',
    dataIndex: 'promoteDate',
    key: 'promoteDate'
  },
  {
    title: '策略笔数',
    dataIndex: 'countDM',
    key: 'countDM',
    render (countDM) {
      return (countDM || 0) + ' 笔'
    }
  },
  {
    title: '策略最后发布时间',
    dataIndex: 'lastTime',
    key: 'lastTime',
    render (lastTime) {
      return lastTime || '该用户未发布过策略'
    }
  },
  // {
  //   title: '详情',
  //   dataIndex: 'x',
  //   key: 'x',
  //   render (detail, item) {
  //     return (<a>查看</a>)
  //   }
  // }
]
class Spread extends React.Component {

  constructor (props) {
    super(props)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
    this.state = {
      spreadCount: {},
      data: [],
      pagination: {
        pageSize: 15
      },
      loading: false
    }
  }

  componentDidMount () {
    ApiCaller.call(Api.user.getSpreadCount, (res)=>{
      this.setState({
        spreadCount: res.data
      })
    })

    this.fetch()

    ZeroClipboard.config({
      swfPath: '//cdn.bootcss.com/zeroclipboard/2.2.0/ZeroClipboard.swf'
    })
    var clip = new ZeroClipboard(document.getElementById('btnCopy'))
    clip.on('ready', ()=>{
      clip.on('copy', (e)=>{
        const myInviteUrl = 'user.' + Runtime.getDomain() + '/reg.html?inviterCode=' + this.props.user.get('cookieInfo').get('phone')
        e.clipboardData.setData("text/plain", myInviteUrl);
      })
      clip.on('aftercopy', ()=>{
        message.success('邀请网址已复制到剪贴板')
      })
      clip.on('error', ()=>{
        message.error('自动复制失败，请手动复制')
      })
    })
  }

  handleTableChange(pagination) {
    const pager = this.state.pagination
    pager.current = pagination.current
    this.setState({
      pagination: pager
    })
    this.fetch({
      currentPage: pagination.current
    })
  }

  fetch(params={}) {
    params.pageSize = this.state.pagination.pageSize
    params.currentPage = params.currentPage || this.state.pagination.current || 1
    this.setState({ loading: true })
    ApiCaller.call(Api.user.getSpreadInvitedList, params, (res) => {
      const pagination = this.state.pagination
      pagination.total = parseInt(res.data.totalRows)
      this.setState({
        loading: false,
        data: res.data.resultList,
        pagination
      })
    })
  }

  handleShareClick (e) {
    const clsName = e.target.className
    const myInviteUrl = '//user.' + Runtime.getDomain() + '/reg.html?inviterCode=' + this.props.user.get('cookieInfo').get('phone')
    const title = '我正在点点盈玩合作炒股，快来和我一起赚钱吧！'
    switch (clsName) {
      case 'iconfont icon-xinlang':
        window.open('http://s.jiathis.com/?webid=tsina&url=' + encodeURIComponent(myInviteUrl) + '&title=' + encodeURIComponent(title) + '&uid=1626433&summary=%E7%82%B9%E7%82%B9%E7%9B%88&su=1')
        break
      case 'iconfont icon-weixin':
        break
      case 'iconfont icon-qq':
        window.open('http://s.jiathis.com/?webid=cqq&url=' + encodeURIComponent(myInviteUrl) + '&title=' + encodeURIComponent(title) + '&uid=1626433&summary=%E7%82%B9%E7%82%B9%E7%9B%88&su=1')
        break
      case 'iconfont icon-tengxunweibo':
        window.open('http://share.v.t.qq.com/index.php?c=share&a=index&title=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(myInviteUrl) + '&appkey=ce15e084124446b9a612a5c29f82f080&site=www.jiathis.com&pic=')
        break
    }
  }

  buildRowKey(item,index){
    return index
  }

  render () {
    const myInviteUrl = 'user.' + Runtime.getDomain() + '/reg.html?inviterCode=' + this.props.user.get('cookieInfo').get('phone')
    if (!this.props.user.get('spreadQRCode')) {
      const elQRCode = document.createElement('div')
      elQRCode.innerHTML = ''
      const qrcode = new QRCode(elQRCode, {
        width : 90,
        height : 90
      })
      qrcode.makeCode('http://user.m.' + Runtime.getDomain() + '/reg.html?inviterCode=' + this.props.user.get('cookieInfo').get('phone'))
      elQRCode.children[1].onload = () =>{
        this.props.actions.setSpreadQRCode(elQRCode.children[1].getAttribute('src'))
      }
    }
    return (
      <div className="spread">
        <Card title="我的推广">
          <div className="tips clearfix">
            <div className="circle">
              <i className="iconfont icon-gerenxuanzhong" />
            </div>
            <div className="desc">
              <p>通过以下方式邀请好友注册</p>
            </div>
            <div className="arrow"><i className="iconfont icon-youjiantou" /></div>
            <div className="circle"><i className="iconfont icon-tablet" /></div>
            <div className="desc">被邀请人操作点策略</div>
            <div className="arrow"><i className="iconfont icon-youjiantou" /></div>
            <div className="circle"><i className="iconfont icon-iconfonticon01" /></div>
            <div className="desc">获得提成</div>
          </div>
        </Card>

        <div className="spread-content">
          <div className="clearfix">
            <div className="share">
              <p>方式一：分享链接给好友</p>
              <ul className="clearfix">
                <Tooltip title="分享到新浪微博">
                  <li className="weibo" onClick={this.handleShareClick.bind(this)} style={{marginLeft: 0}}><i className="iconfont icon-xinlang" /></li>
                </Tooltip>
                <Tooltip title="请扫描或保存右侧二维码图片">
                  <li className="wechat"><i className="iconfont icon-weixin" /></li>
                </Tooltip>
                <Tooltip title="分享给QQ好友">
                  <li className="qq" style={{ lineHeight:'45px' }} onClick={this.handleShareClick.bind(this)}><i className="iconfont icon-qq" /></li>
                </Tooltip>
              </ul>
              <button id="btnCopy" className="share-button">点击复制链接</button>
              <p style={{color: "#ff503f"}}>提示：您的邀请码为您的手机号码。</p>
            </div>
            <div className="spread-content-sepLine"></div>
            <div className="shareRight">
              <div>方式二： 分享二维码给好友</div>
              <div id="qrcode" className="qrcode">
                <img src={this.props.user.get('spreadQRCode')} width="90" />
              </div>
              <div style={{marginTop: 15, color: "#54b5fc"}}>微信扫一扫，分享给好友</div>
            </div>
          </div>
        </div>

        <Card  bodyHeight="336" marginTop="20" position="relative">
          <div className="listTitle">推广列表</div>
          <div className="invited_count">已推广：<span className="color_orange">{this.state.spreadCount.userCount}</span> 人</div>
          <Row style={{ fontSize: 14, padding: '15px 0 0 0' }}>
            <Col className="clearfix" span="12">
              昨日提成：<span className="color_orange">{Format.money(this.state.spreadCount.lastCommission, 2, '￥')}</span>&nbsp;元
            </Col>
            <Col span="12">
              <div style={{marginLeft: 200}}>
                昨日策略：<span className="color_orange">{this.state.spreadCount.yesStrategy || 0}</span>&nbsp;笔
              </div>
            </Col>
          </Row>
          <Row style={{ fontSize: 14, padding: '15px 0 15px 0' }}>
            <Col span="12">提成总计：<span className="color_orange">{Format.money(this.state.spreadCount.sumCommission, 2, '￥')}</span>&nbsp;元</Col>
            <Col span="12">
              <div style={{marginLeft: 200}}>
                策略总计：<span className="color_orange">{this.state.spreadCount.strategyCount}</span>&nbsp;笔
              </div>
            </Col>
          </Row>
          <Table
            style={{ marginTop: 20 }}
            rowKey={this.buildRowKey}
            columns={columns}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange.bind(this)} />
        </Card>
      </div>
    )
  }
}
export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Spread)
module.exports = exports['default']
