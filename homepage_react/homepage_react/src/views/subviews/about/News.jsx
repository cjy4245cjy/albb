import React, { Component } from 'react'
import ApiCaller from '../../../utils/ApiCaller'
import Api from '../../../store/constants/Api'
import * as Format from '../../../utils/Format'
import {Pager} from '../../../components/common'
import { RaisedButton, FlatButton, Dialog } from 'material-ui'
import Immutable, { Map } from 'immutable'

const dlObjList = []

export default class News extends Component{
  constructor(props){
    super(props)
    this.state = {
      news:{},
      pageSize:5,
      page:1,
      openIndex:-2, //-2是加载数据时获取dl的全高，－1是关闭操作，不再获取dl高度
      height:0
    }
  }

  componentDidMount(){
    //获取新闻信息
    this.fetch(1)
  }

  componentDidUpdate(){
    const state = this.state
    const results = state.news.datas || []
    if(results.length == 0 || state.openIndex != -2){
      return
    }
    for(let i = 0;i < results.length;i ++){
      const obj = this.refs['dl' + i]
      let height = obj.offsetHeight
      dlObjList.push(height)
      obj.style.height = '96px'
    }
  }

  headClickHandle(index){
    if(dlObjList.length <= index){
      return
    }
    const state = this.state
    state.openIndex = (state.openIndex == index)?-1:index
    state.height = dlObjList[index]
    this.setState(state)
  }

  fetch(index){
    this.setState({page:index})
    ApiCaller.call(Api.activity.getNewsList,{page:index,pageSize:this.state.pageSize},(res) => {
      if(res.code == 0){
        const state = this.state
        state.news = res
        state.openIndex = -2
        this.setState(state)
      }
    })
  }

  getTime(time = ''){
    return Format.date(time * 1000,'yyyy-MM-dd')
  }

  onPageChange(index){
    this.fetch(index)
  }

  render (){
    const state = this.state
    const results = state.news.datas || []
    const html = results.map((item,index) => {
      const style = state.openIndex == index?{height:state.height}:(state.openIndex == -2)?{}:{height:96}
      return (
        <dl key={index} className='dl-content' ref={'dl' + index} onClick={this.headClickHandle.bind(this,index)} style={style}>
          <dt className={state.openIndex == index?'open-icon':''}>
            <span>{item.keywords}</span>
            <b>{this.getTime(item.createTimes)}</b>
          </dt>
          <div className='dl-title'>{item.title}</div>
          <div className='dl-text'>
            <div>{item.desc || ''}</div>
            <a href={item.link} target='_blank'>点击详情>></a>
          </div>
        </dl>
      )
    })
    return (
      <div>
        <span className='center-head'>新闻报道</span>
        <div className='news' style={{paddingBottom:100}}>
          <div style={{marginTop:30}}>
            {html}
          </div>
        </div>
        <Pager style={{position:'absolute',bottom:0,right:0}} currentPage={state.page} totalPages={state.news.totalPage} pageSize={state.pageSize} onPageChange={this.onPageChange.bind(this)}/>
      </div>
    )
  }
}

module.exports = exports['default']
