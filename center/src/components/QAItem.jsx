import React, { Component } from 'react'
import Api from '../store/constants/Api'
import ApiCaller from '../utils/ApiCaller'
import classnames from 'classnames'

function setLikeStatus(id, cate) {
  ApiCaller.call(Api.user.like, {rid: id, cate: cate }, (res)=>{})
}

// 我的提问
class MyQuestion extends Component {
  render () {
    const data = this.props.data
    data.adviser = data.adviser || {}
    const hasAnswered = data.answerContent ? true : false
    const answerClass = classnames({
      'answer': true,
      'hide': !hasAnswered
    })
    const userClass = classnames({
      'user': true,
      'hide': !hasAnswered
    })
    return (
      <div className="qaitem">
        <div className="question">
          <div className="icon">问</div>
          <div className="text">
            { data.content }
          </div>
        </div>
        <div className="user">
          <span className="time">{ data.createTime }</span>
        </div>
        <div className={answerClass}>
          <div className="icon">答</div>
          <div className="text">{ data.answerContent }</div>
        </div>
        <div className={userClass}>
          <img src={data.adviser.headPhoto} />
          <span className="name">{ data.adviser.nickName }</span>
          <span className="time">{ data.answerTime }</span>
        </div>
      </div>
    )
  }
}

class PubAnswer extends Component {
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
    const isDynamicMode = data.title ? true : false
    let question = data.content || data.head
    let answer = data.answerContent || data.body
    if (isDynamicMode) {
      question = data.title
      answer = data.content
    }

    const hasAnswered = answer ? true : false
    const answerClass = classnames({
      'answer': true,
      'hide': !hasAnswered
    })
    const likeClass = classnames({
      'ui-icon-heart': true,
      'color_orange': this.state.likeStatus == 1
    })
    return (
      <div className="qaitem">
        <div className="question">
          <div className="icon">问</div>
          <div className="text">
            { question }
          </div>
        </div>
        <div className="user">
          <img src={ data.headImage } />
          <span className="name">{ data.nickName }</span>
          <span className="time">{ data.createTime }</span>
        </div>
        <div className={answerClass}>
          <div className="icon">答</div>
          <div className="text">{ answer }</div>
        </div>
        <div className="user">
          <img src={ data.adviser ? data.adviser.headPhoto : '' } />
          <span className="name">{ data.adviser ? data.adviser.nickName : data.name }</span>
          <span className="time">{ data.answerTime }</span>
          <i className={likeClass} onClick={this.handleLike.bind(this)}> { this.state.likeCount }</i>
          <i className="ui-icon-eye"> { data.readCount }</i>
        </div>
      </div>
    )
  }
}

// 我的回答
class MyAnswer extends Component {
  handleAnswerClick() {
    this.props.onAnswerClick(this.props.data)
  }

  render () {
    const data = this.props.data
    const isDynamicMode = data.title ? true : false
    let question = data.content
    let answer = data.answerContent
    if (isDynamicMode) {
      question = data.title
      answer = data.content
    }

    const hasAnswered = answer ? true : false
    const answerClass = classnames({
      'answer': true,
      'hide': !hasAnswered
    })
    const answerButtonClass = classnames({
      'hide': hasAnswered
    })
    return (
      <div className="qaitem">
        <div className="question">
          <div className="icon">问</div>
          <div className="text">
            { question }
          </div>
        </div>
        <div className="user">
          <img src={ data.headImage } />
          <span className="name">{ data.nickName }</span>
          <span className="time">{ data.createTime }</span>
          <a className={answerButtonClass} onClick={this.handleAnswerClick.bind(this)} style={{ right: 120 }}>回答</a>
        </div>
        <div className={answerClass}>
          <div className="icon">答</div>
          <div className="text">{ answer }</div>
        </div>
      </div>
    )
  }
}

export default class QAItem extends Component {
  render () {
    switch (this.props.type) {
      case 1:
        return (<MyQuestion {...this.props} />)
      case 3:
        return (<MyAnswer {...this.props} />)
      default:
        return (<PubAnswer {...this.props} />)
    }
  }
}
