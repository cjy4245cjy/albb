import React from 'react'
import classnames from 'classnames'

export default class Card extends React.Component {
  render () {
    const cardClass = classnames({
      'card': true,
      'notb': !!this.props.noBorderTop,
      'nobb': !!this.props.noBorderBottom,
      'hide': !!this.props.hide
    })

    let cardStyle = {
      marginTop: this.props.marginTop || '0',
      height: this.props.height || 'auto'
    }

    let titleClass = 'title'
    titleClass += this.props.showTitle == false ? ' hide' : ''

    let bodyStyle = {
      minHeight: this.props.bodyHeight || 'auto',
      position: this.props.position || ''
    }
    return (
      <div className={cardClass} style={cardStyle}>
        <div className={titleClass}>
          <span>{this.props.title}</span>
        </div>
        <div className="body" style={bodyStyle}>{this.props.children}</div>
      </div>
    )
  }
}
