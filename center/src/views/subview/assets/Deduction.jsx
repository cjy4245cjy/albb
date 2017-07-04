import React from 'react'
import { Row, Col, Select, DatePicker, Table, Button } from 'antd'
import * as Format from '../../../utils/Format'
import ApiCaller from '../../../utils/ApiCaller'
import Api from '../../../store/constants/Api'

const columns = [
  {
    title: '时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '类型',
    dataIndex: 'fundsTypeName',
    key: 'fundsTypeName'
  },
  {
    title: '抵用金',
    dataIndex: 'amount',
    key: 'amount',
    render (amount) {
      let amountClassName = "color_green"
      if (amount > 0)
        amountClassName = "color_orange"
      return <span className={amountClassName}>{Format.fixed(amount)}</span>
    }
  },{
    title: '抵用金余额',
    dataIndex: 'available',
    key: 'available',
    render (available){
      return <span>{Format.fixed(available)}</span>
    }
  }
]

export default class Deduction extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
      pagination: {
        pageSize: 20
      },
      loading: false
    }
  }

  componentDidMount(){
    this.fetch({
      page:1
    })
  }

  buildRowKey(record, index) {
    return index
  }

  fetch(para={}){
    para.pageSize = 20
    this.setState({ loading:true })
    ApiCaller.call(Api.user.getDeductionFunds,para,(res) => {
      const state = this.state
      if(res.code == 0){
        state.pagination.total = parseInt(res.totalRows)
        state.data = res.data
      }
      state.loading = false
      this.setState(state)
    })
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

  render(){
    return(
      <div>
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
