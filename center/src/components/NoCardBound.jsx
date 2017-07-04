import React from 'react'

export default class NoCardBound extends React.Component {
  handleClick() {
    this.props.onBindClick(true)
  }
  render() {
    const noCardBoundStyle = {
      display: this.props.visible == true ? 'block' : 'none'
    }
    return (
      <div className="no_card_bound" style={noCardBoundStyle}>
        <i className="ui-icon-warn"></i> 您还未绑定银行卡，将影响功能使用&nbsp;&nbsp;&nbsp;&nbsp;<a onClick={this.handleClick.bind(this)}>立即绑定</a>
      </div>
    )
  }
}
