import React, { Component } from 'react'
import Api from '../store/constants/Api'
import ApiCaller from '../utils/ApiCaller'
import Runtime from '../utils/Runtime'
import classnames from 'classnames'

function setLikeStatus(id, cate) {
  ApiCaller.call(Api.user.like, {rid: id, cate: cate }, (res)=>{})
}

class Normal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      likeStatus: 0,
      likeCount: 0
    }
  }

  componentDidMount () {
    const data = this.props.data
    this.setState({
      likeStatus: data.likeStatus,
      likeCount: data.likeCount || data.zan || 0
    })
  }

  handleLike () {
    if (this.state.likeStatus == 0) {
      const data = this.props.data
      setLikeStatus(data.relationId, data.relationType)
      this.setState({
        likeStatus: 1,
        likeCount: this.state.likeCount + 1
      })
    }
  }

  render () {
    const data = this.props.data
    const likeClass = classnames({
      'ui-icon-heart': true,
      'color_orange': this.state.likeStatus == 1
    })
    const detailUrl = '//tg.' + Runtime.getDomain() + '/view/detail/' + (data.relationId || data.id)
    return (
      <div className="vpitem">
        <div className="left">
          <div className="headimg">
            <img src={data.adviser ? data.adviser.headPhoto : ''} width="54" height="54" />
          </div>
          <div className="name">{ data.adviser ? data.adviser.nickName : data.name }<i className="ui-icon-vip"></i></div>
        </div>
        <div className="right">
          <div className="data">
            <h1><a href={detailUrl} target="_blank">{ data.title || data.head }</a></h1>
            <p>{ data.remark || data.content || data.body }</p>
          </div>
        </div>
        <div className="count">
          <i className={likeClass} style={{ cursor: 'pointer' }} onClick={this.handleLike.bind(this)}> { this.state.likeCount }</i>
          <i className="ui-icon-eye"> { data.readCount }</i>
          <span className="time">{ data.createTime }</span>
        </div>
      </div>
    )
  }
}

class Stock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      likeStatus: 0,
      likeCount: 0
    }
  }

  componentDidMount () {
    const data = this.props.data
    this.setState({
      likeStatus: data.likeStatus,
      likeCount: data.likeCount || data.zan || 0
    })
  }

  handleLike () {
    if (this.state.likeStatus == 0) {
      const data = this.props.data
      setLikeStatus(data.relationId, data.relationType)
      this.setState({
        likeStatus: 1,
        likeCount: this.state.likeCount + 1
      })
    }
  }

  render () {
    const data = this.props.data
    data.viewPloy = data.viewPloy || {}
    const tradeTime = new Date(parseInt(data.createTimes) * 1000)
    const wrapperClass = classnames({
      'wrapper': true,
      'sell': data.viewPloy.action != 1
    })
    const likeClass = classnames({
      'ui-icon-heart': true,
      'color_orange': this.state.likeStatus == 1
    })
    return (
      <div className="vpitem">
        <div className="left">
          <div className="headimg">
            <img src={ data.headImage || data.adviser.headPhoto } width="54" height="54" />
          </div>
          <div className="name">{ data.name || data.adviser.nickName }<i className="ui-icon-vip color_orange"></i></div>
        </div>
        <div className="right">
          <div className="data">
            <div className={wrapperClass}>
              <div>
                <span className="color">{tradeTime.getHours() + ':' + tradeTime.getMinutes()}</span><br />
                <span className="color"><b>{data.viewPloy.action == 1 ? '买入' : '卖出'}</b></span>
              </div>
              <div>
                <span className="color">{data.viewPloy.stockName}</span><br />
                <span>{data.viewPloy.stockCode}</span>
              </div>
              <div>
                <span className="color">{data.viewPloy.stockPrice ? data.viewPloy.stockPrice.toFixed(2) : ''}</span><br />
                <span>价格</span>
              </div>
              <div>
                <span className="color">{data.viewPloy.stockPercent ? data.viewPloy.stockPercent + '%' : ''}</span><br />
                <span>仓位</span>
              </div>
            </div>
            <span className="time" style={{ position: 'absolute', bottom: -24, color: '#a9a9a9', right: 0, fontSize: 12 }}>{ data.createTime }</span>
          </div>
        </div>
        <div className="count">
          <i className={likeClass} style={{ cursor: 'pointer' }} onClick={this.handleLike.bind(this)}> { this.state.likeCount }</i>
          <i className="ui-icon-eye"> { data.readCount }</i>
        </div>
      </div>
    )
  }
}

export default class ViewPointItem extends Component {
  render () {
    let comp
    if (this.props.data.viewCategory == 4 || this.props.data.relationType == 2)
      comp = <Stock data={this.props.data} />
    else
      comp = <Normal data={this.props.data} />
    return comp
  }
}
