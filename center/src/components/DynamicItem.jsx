import React from 'react'
import ViewPointItem from './ViewPointItem'
import QAItem from './QAItem'

// 关注动态单项 整合观点策略和问答
export default class DynamicItem extends React.Component {
  render () {
    const data = this.props.data
    return data.type == 1 || data.relationType < 3 ? <ViewPointItem data={data} /> : <QAItem type={2} data={data} />
  }
}
