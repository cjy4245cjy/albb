import React from 'react'
import { Row, Col, Select, DatePicker, Table, Button } from 'antd'
import * as Format from '../../../utils/Format'
import ApiCaller from '../../../utils/ApiCaller'
import Api from '../../../store/constants/Api'
const Option = Select.Option
const RangePicker = DatePicker.RangePicker

const typeDataSource = [
  { type: 1, text: '账户充值' },
  { type: 100, text: '余额提现' },
  { type: 28, text: '从策略账户转出' },
  { type: 29, text: '转入策略账户' },
  { type: 2, text: '支付信用金' },
  { type: 3, text: '追加信用金' },
  { type: 4, text: '支付管理费' },
  { type: 5, text: '支付利息' },
  { type: 6, text: '盈利提取' },
  { type: 7, text: '股票盈亏' },
  { type: 8, text: '提现手续费' },
  { type: 10, text: '理财产品收入' },
  { type: 11, text: '理财产品付款' },
  { type: 12, text: '理财本金' },
  { type: 22, text: '管理费回款' },
  { type: 23, text: '利息回款' },
  { type: 24, text: '退还信用金' },
  { type: 25, text: '红包返现' }
]

const columns = [
  {
    title: '交易时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '交易类型',
    dataIndex: 'type',
    key: 'type',
    render (type, record) {
      return record.labelMap.fundsType
    }
  },
  {
    title: '交易金额',
    dataIndex: 'amount',
    key: 'amount',
    render (amount) {
      let amountClassName = "color_green"
      if (amount > 0)
        amountClassName = "color_orange"
      return <span className={amountClassName}>{Format.fixed(amount)}</span>
    }
  },
  {
    title: '账户余额',
    dataIndex: 'availableNew',
    key: 'availableNew'
  }
  // {
  //   title: '交易状态',
  //   dataIndex: 'status',
  //   key: 'status',
  //   render (status, record) {
  //     return record.labelMap.status
  //   }
  // }
]

export default class TradeHis extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      searchFilter: {
        type: '0'
      },
      filter: {
        type: '0',
        startDate:'',
        endDate: ''
      },
      pagination: {
        pageSize: 15
      },
      loading: false,
      typeData: []
    }
  }

  componentDidMount () {
    this.fetch()
    //获取类型
    this.fetchType()
  }

  fetchType(){
    ApiCaller.call(Api.user.dataField,{ key:'funds_type' },(res) => {
      if(res.code == 0){
        const state = this.state
        state.typeData = res.dataFields
        this.setState(state)
      }
    })
  }

  buildRowKey(record, index) {
    return index
  }

  handleTableChange (pagination) {
    const pager = this.state.pagination
    pager.current = pagination.current
    this.setState({
      pagination: pager
    })
    this.fetch({
      page: pagination.current
    })
  }

  handleTypeChange (value) {
    const state = this.state
    state.filter.type = value
    this.setState(state)
  }

  handleDateChange (value) {
    const state = this.state
    state.filter.rangeDate = value
    state.filter.startDate = value[0] ? Format.date(value[0].getTime(), 'yyyy-MM-dd') : ''
    state.filter.endDate = value[1] ? Format.date(value[1].getTime(), 'yyyy-MM-dd') + " 23:59:59" : ''
    this.setState(state)
  }

  handleSearch() {
    const state = this.state
    // 复制搜索条件
    state.searchFilter = {
      type: state.filter.type,
      startDate: state.filter.startDate,
      endDate: state.filter.endDate
    }
    state.pagination.current = 1
    this.setState(state)
    this.fetch()
  }

  handleReset () {
    const state = this.state
    state.searchFilter = {
      type: '0',
      startDate:'',
      endDate: ''
    }
    state.filter = {
      type: '0',
      startDate:'',
      endDate: '',
      rangeDate: []
    }
    state.pagination.current = 1
    this.setState(state)
    this.fetch()
  }

  fetch(params = {}) {
    const filter = this.state.searchFilter
    if (filter.type != '0')
      params.type = [parseInt(filter.type)]
    if (filter.startDate)
      params.startTime = parseInt(new Date(filter.startDate.replace(/-/g,"/")).getTime()) / 1000
    if (filter.endDate)
      params.endTime = parseInt(new Date(filter.endDate.replace(/-/g,"/")).getTime()) / 1000
    params.pageSize = this.state.pagination.pageSize
    this.setState({ loading: true })
    ApiCaller.call(Api.user.getTradeList, params, (res) => {
      const pagination = this.state.pagination
      pagination.total = parseInt(res.total)
      this.setState({
        loading: false,
        data: res.datas,
        pagination
      })
    })
  }

  render () {
    return (
      <div className="tradehis">
        <Row style={{ paddingTop: '30px' }}>
          <Col span="24">
            <Select defaultValue="0" value={this.state.filter.type} style={{ width: '160px' }} onChange={this.handleTypeChange.bind(this)}>
              <Option value="0" key="0">全部类型</Option>
              { this.state.typeData.map((item)=>{
                return (<Option value={item.code} key={item.code}>{item.text}</Option>)
              })}
            </Select>
            &nbsp;&nbsp;
            <RangePicker style={{ width: 184 }} value={this.state.filter.rangeDate} onChange={this.handleDateChange.bind(this)} />
            &nbsp;&nbsp;
            <Button type="primary" onClick={this.handleSearch.bind(this)}>查询</Button>
            &nbsp;&nbsp;
            <Button type="ghost" onClick={this.handleReset.bind(this)}>重置</Button>
          </Col>
        </Row>
        <Table
          style={{ paddingTop: 18 }}
          rowKey={this.buildRowKey}
          columns={columns}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange.bind(this)}  />
      </div>
    )
  }
}
module.exports = exports['default']
