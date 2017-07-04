import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import { bindActionCreators } from 'redux'
import Card from '../components/common/Card'
import { Table } from 'antd'

const columns = [
  {
    title: '协议名称',
    dataIndex: 'name',
    key: 'name',
    render (name, item, i) {
      return (<a href={'//static.ddy98.com/img/pb/protocol_' + (i + 1) + '.png'} target="_blank">{name}</a>)
    }
  },
  {
    title: '版本号',
    dataIndex: 'version',
    key: 'version'
  },
  {
    title: '发布日期',
    dataIndex: 'publishDate',
    key: 'publishDate'
  },
  {
    title: '签署日期',
    dataIndex: 'signDate',
    key: 'signDate'
  }
]

class Protocol extends React.Component {
  render () {
    const userRegTime = this.props.user.get('loginInfo').createTime
    let signDate = '2016-02-16'
    if (new Date(userRegTime).getTime() > new Date('2016-02-16').getTime())
      signDate = userRegTime.split(' ')[0]
    const data = [
      {
        key: '1',
        name: '《（股票）投顾策略交易居间服务协议》',
        version: '160216-1',
        publishDate: '2016-02-16',
        signDate: signDate
      },
      {
        key: '2',
        name: '《（股票）投顾策略交易合作协议》',
        version: '160216-2',
        publishDate: '2016-02-16',
        signDate: signDate
      },
      {
        key: '3',
        name: '《（股票）投顾策略交易合作协议（T+D）》',
        version: '161021-3',
        publishDate: '2016-10-21',
        signDate: '2016-10-21'
      }
    ]

    return (
      <div className="protocol">
        <Card title="相关协议" bodyHeight="744px">
          <Table columns={columns} dataSource={data} style={{ marginTop: 25 }} />
        </Card>
      </div>
    )
  }
}
export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Protocol)
module.exports = exports['default']
