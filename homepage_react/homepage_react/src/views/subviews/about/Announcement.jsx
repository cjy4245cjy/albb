import React, { Component } from 'react'
import ApiCaller from '../../../utils/ApiCaller'
import Api from '../../../store/constants/Api'
import * as Format from '../../../utils/Format'
import {Pager} from '../../../components/common'
import { RaisedButton, FlatButton, Dialog } from 'material-ui'
import Immutable, { Map } from 'immutable'

class ShowDialog extends Component{
  render (){
    const actions = [
      <FlatButton
        label="关闭"
        style={{width:'100%'}}
        primary={true}
        onTouchTap={this.props.closeHandle}
      />,
    ]

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.closeHandle}
          autoScrollBodyContent={true}
        >
          <div dangerouslySetInnerHTML={{__html:this.props.content}}/>
        </Dialog>
      </div>
    )
  }
}

export default class Announcement extends Component{
  constructor(props){
    super(props)
    this.state = {
      noticeList:{},
      pageSize:10,
      page:1,
      dialog:{
        open:false,
        closeHandle:null,
        content:'',
        title:''
      },
      notice:[]
    }
  }

  componentDidMount(){
    //获取公告信息
    this.fetch(1)
  }

  fetch(index){
    this.setState({page:index})
    ApiCaller.call(Api.activity.getNoticeList,{page:index,pageSize:this.state.pageSize},(res) => {
      if(res.code == 0){
        const state = this.state
        state.noticeList = res
        this.setState(state)
      }
    })
  }

  getTime(time = ''){
    return Format.date(time * 1000,'yyyy-MM-dd HH:mm:ss')
  }

  onPageChange(index){
    this.fetch(index)
  }

  showNoticeHandle(id){
    const state = this.state
    const notice = state.notice
    //查看缓存数据
    for(let item in notice){
      if(notice[item].id == id){
        this.ShowDialogHandle(notice[item].content,notice[item].title)
        return
      }
    }
    //未缓存，请求数据
    ApiCaller.call(Api.activity.getNoticeDetail, { id:id }, (res) => {
      if(res.code == 0){
        const state = this.state
        state.notice.push(res.notice)
        this.setState(state)
        this.ShowDialogHandle(res.notice.content,res.notice.title)
      }
    })
  }

  ShowDialogHandle (content,title){
    const state = this.state
    state.dialog = {
      open:true,
      closeHandle:() => {
        const state = this.state
        state.dialog.open = false
        this.setState(state)
      },
      content:content,
      title:title
    }
    this.setState(state)
  }

  render (){
    const state = this.state
    const noticeList = state.noticeList.datas || []
    const html = noticeList.map((item,index) => {
      return <li key={index}><span className='notice-span-title' onClick={this.showNoticeHandle.bind(this,item.id)}>{item.title}</span><span style={{float:'right'}}>{this.getTime(item.createTimes)}</span></li>
    })
    return (
      <div>
        <span className='center-head'>平台公告</span>
        <div className='announcement'>
          <ul style={{marginTop:30}}>
            {html}
          </ul>
        </div>
        <Pager style={{position:'absolute',bottom:0,right:0}} currentPage={state.page} totalPages={state.noticeList.totalPage} pageSize={state.pageSize} onPageChange={this.onPageChange.bind(this)}/>
        <ShowDialog open={this.state.dialog.open} closeHandle={this.state.dialog.closeHandle} content={this.state.dialog.content} title={this.state.dialog.title}/>
      </div>
    )
  }
}

module.exports = exports['default']
