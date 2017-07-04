import React from 'react'
import Card from '../components/common/Card'
import classnames from 'classnames'
import Runtime from '../utils/Runtime'
import ApiCaller from '../utils/ApiCaller'
import Api from '../store/constants/Api'
import { Pagination, Spin, Tabs } from 'antd'

const TabPane = Tabs.TabPane

class CardItem extends React.Component{

  handleClick () {
    if (!this.props.usedFlag)
      window.open(this.props.href)
  }

  render(){
    const cardClass = classnames({
      "card-item": true,
      "used": this.props.usedFlag
    })
    return(
      <div className={cardClass} onClick={this.handleClick.bind(this)}>
        <div className="left-page">
          <span className="front">{this.props.front || ''}</span>
          <span className="amount">{this.props.amountF}</span>
          <span className="back">{this.props.amountB}</span>
        </div>
        <div className="right-page">
          <p className="title">{this.props.title}</p>
          <p className="use-desc">{this.props.useDesc}</p>
          <p className="use-date">{this.props.dateLine}</p>
        </div>
      </div>
    )
  }
}

class Stamps extends React.Component {
  render () {
    return (
      <div className="stamps">
        <ul>
          {this.props.data.map((item)=>{
            const usedFlag = item.TimeStatus == -1 && item.status == 1
            const amount = item.amount
            const amountString = amount.toString()
            let amountF,amountB
            if(amountString.indexOf('.') > -1){
              amountF = parseInt(amount)
              amountB = amountString.substr(amountString.indexOf('.'))
            }else{
              amountF = amount
              amountB = '.0'
            }
            let useDesc = "-A股策略" + item.depositAmount + "元以上支付可用"
            if(item.depositAmount == 0){
              useDesc= "-A股策略1元以上支付可用"
            }
            const dateLine = "-有效期" + item.deadLine.substr(0,10)
            const href = '//pb.' + Runtime.getDomain() + '/real/trade/buy/t1'
            return (
              <CardItem front="￥" title="现金券" usedFlag={usedFlag} amountF={amountF} amountB={amountB} useDesc={useDesc} dateLine={dateLine} key={item.recordId} href={href}/>
            )
          })}
        </ul>
      </div>
    )
  }
}

class CardLimit extends React.Component{
  render(){
    return(
      <div className='stamps'>
        <ul>
          {
            this.props.data.map((item,index) => {
              const href = '//pb.' + Runtime.getDomain() + '/real/trade/buy/experience'
              return (<CardItem title='涨停卡' usedFlag={item.status != -1} amountF={item.bennfitsValue} amountB="%" useDesc="-限1元体验可用" dateLine="-有效期 长期有效" key={item.recordId} href={href}/>)
            })
          }
        </ul>
      </div>
    )
  }
}

class CardDouble extends React.Component{
  render(){
    return(
      <div className='stamps'>
        <ul>
          {
            this.props.data.map((item,index) => {
              const href = '//pb.' + Runtime.getDomain() + '/real/trade/history'
              return (<CardItem title='翻倍卡' usedFlag={item.status != -1} amountF={item.bennfitsValue} amountB="倍" useDesc="-限1元体验可用" dateLine="-有效期 长期有效" key={item.recordId} href={href}/>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default class RedPacket extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pagination: {
        pageSize: 18
      },
      loading: false,
      data1: [],
      pagination1: {
        pageSize: 18
      },
      loading1: false,
      data2: [],
      pagination2: {
        pageSize: 18
      },
      loading2: false,
    }
  }

  componentDidMount () {
    //获取红包
    this.fetch()
    //涨停卡
    this.fetchCard()
    //翻倍卡
    this.fetchCardDouble()
  }

  fetch (params = {}) {
    params.pageSize = this.state.pagination.pageSize
    params.page = params.page || 1
    params.available = 1
    this.setState({ loading: true })
    ApiCaller.call(Api.user.getReadPacketList, params, (res) => {
      const pagination = this.state.pagination
      pagination.total = parseInt(res.total)
      this.setState({
        loading: false,
        data: res.data,
        pagination
      })
    })
  }

  fetchCard(params={}){
    params.pageSize = this.state.pagination1.pageSize
    params.page = params.page || 1
    params.type = 2
    this.setState({ loading1: true })
    ApiCaller.call(Api.user.getCard, params, (res) => {
      const pagination1 = this.state.pagination1
      pagination1.total = parseInt(res.totalRows)
      this.setState({
        loading1: false,
        data1: res.data || [],
        pagination1
      })
    })
  }

  fetchCardDouble(params={}){
    params.pageSize = this.state.pagination2.pageSize
    params.page = params.page || 1
    params.type = 1
    this.setState({ loading2: true })
    ApiCaller.call(Api.user.getCard, params, (res) => {
      const pagination2 = this.state.pagination2
      pagination2.total = parseInt(res.totalRows)
      this.setState({
        loading2: false,
        data2: res.data || [],
        pagination2
      })
    })
  }

  handlePageChange (nextPage) {
    this.fetch({
      page: nextPage
    })
  }

  handlePageChange1(nextPage){
    this.fetchCard({
      page: nextPage
    })
  }

  handlePageChange2(nextPage){
    this.fetchCardDouble({
      page: nextPage
    })
  }

  render () {
    return (
      <div className="redpacket" style={{background:'#fff',minHeight:794}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="我的红包" key="1">
            <div className="tab_content">
              <Spin spining={this.state.loading}>
                {this.state.data.length == 0 ? <div className="none">您还没有红包哦！</div> : <Stamps data={this.state.data} />}
              </Spin>
              <div className="page-container">
                <Pagination
                  defaultCurrent={1}
                  onChange={this.handlePageChange.bind(this)}
                  defaultPageSize={this.state.pagination.pageSize}
                  total={this.state.pagination.total} />
              </div>
            </div>
          </TabPane>
          <TabPane tab="翻倍卡" key="3">
            <div className="tab_content">
              <Spin spining={this.state.loading2}>
                {this.state.data2.length == 0 ? <div className="none">您还没有翻倍卡哦！</div> : <CardDouble data={this.state.data2} />}
              </Spin>
              <div className="page-container">
                <Pagination
                  defaultCurrent={1}
                  onChange={this.handlePageChange2.bind(this)}
                  defaultPageSize={this.state.pagination2.pageSize}
                  total={this.state.pagination2.total} />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
module.exports = exports['default']
