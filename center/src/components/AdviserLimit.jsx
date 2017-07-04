import React from 'react'
import Runtime from '../utils/Runtime'

export default class AdviserLimit extends React.Component {
  render () {
    const adviserLimitStyle = {
      display: this.props.visible ? 'block' : 'none'
    }
    const url = '//tg.' + Runtime.getDomain() + '/adviser/apply'
    return (
      <div className="adviser_limit" style={adviserLimitStyle}>
        <div>仅认证投顾才可使用此功能哦</div>

      </div>
    )
  }
}
