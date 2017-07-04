import React, { Component } from 'react'
import { SelectField, MenuItem, TextField } from 'material-ui'
import ApiCaller from '../../../utils/ApiCaller'
import Api from '../../../store/constants/Api'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../store/actions'
import { Dialog } from '../../../components/common'
import Runtime from '../../../utils/Runtime'

class FeedbackSubmit extends Component{
  constructor (props) {
    super(props)
    this.state = {
      imgFileSrc:'',
      srcDisplay:'none',
      type:2,
      phone:'',
      content:'',
      dialog:{
        open:false,
        title:'',
        content:'',
        handleClose:null
      }
    }
  }

  ShowDialog(para={}){
    const state = this.state
    state.dialog = {
      open:true,
      title:para.title || '',
      content:para.content || '',
      handleClose:() => {
        this.setState({dialog:{open:false}})
      }
    }
    this.setState(state)
  }

  typeChangeHandle(e){
    this.setState({type:e.target.value})
  }

  phoneHandle(e){
    this.setState({phone:(e || window.event).target.value})
  }

  contentHandle(e){
    this.setState({content:(e || window.event).target.value})
  }

  fileHandle(){
    const state = this.state
    const docObj = this.refs.picFile
    if(state.imgFileSrc && state.imgFileSrc != '')
      window.URL.revokeObjectURL(state.imgFileSrc)
    if (docObj.files && docObj.files[0]) {
      state.imgFileSrc = window.URL.createObjectURL(docObj.files[0])
      state.srcDisplay = 'block'
    } else {
       //IE下，使用滤镜
       docObj.select()
       var imgSrc = document.selection.createRange().text
       var localImagId = this.refs.localImag
       //必须设置初始大小
       localImagId.style.width = "100px"
       localImagId.style.height = "100px"
       //图片异常的捕捉，防止用户修改后缀来伪造图片
       try {
           localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"
           localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc
       } catch(e) {
           this.ShowDialog({title:'提示',content:'您上传的图片格式不正确，请重新选择!'})
           return false
       }
       imgObjPreview.style.display = 'none'
       document.selection.empty()
       state.imgFileSrc = imgSrc
       state.srcDisplay = 'block'
    }
    this.setState(state)
  }

  onSubmitHandle(){
    if(!this.props.user.get('cookieInfo').get('sid')){
      location.href = '//user.' + Runtime.getDomain() + '/login.html?url=' + location.href
      return
    }
    const state = this.state
    const type = state.type
    const phone = state.phone
    const content = state.content

    if(!content || content == ''){
      this.ShowDialog({title:'提示',content:'请输入提问内容'})
      return
    }
    ApiCaller.call(Api.activity.setQuestions,{content:content},(res) => {
      if(res.code == 0){
        const state = this.state
        state.phone = ''
        state.content = ''
        state.imgFileSrc = ''
        state.srcDisplay = 'none'
        this.setState(state)
        this.ShowDialog({title:'成功',content:'提交成功，我们会尽快处理'})
      }else{
        this.ShowDialog({title:'提示',content:res.msg})
      }
    })
  }

  render (){
    const state = this.state
    return (
      <div className='submit-form'>
        <div className='feedback-title'>
          <span>尊敬的点点盈用户您好！感谢您给我们提出的宝贵意见。</span>
          <span className='after-saying'>（以下<b style={{ color: '#f00',margin: '0 3px'}}>*</b>号标记为必填项）</span>
        </div>
        <form action="//www.ddy98.com/api/activity/opinion/ask" ref="askForm" method="post" encType="multipart/form-data">
          <div className='line hide'>
            <span style={{marginRight:10,display:'inline-block'}}><b style={{ color: '#f00',margin: '0 3px'}}>*</b>留言类型：</span>
            <span style={{display:'inline-block'}}>
              <select value={state.type} style={{width:200,display:'inline-block !important'}} onChange={this.typeChangeHandle.bind(this)}>
                <option value='2'>意见反馈</option>
                <option value='1'>我要投诉</option>
                <option value='3'>其他咨询</option>
              </select>
            </span>
            <span style={{marginRight:10,marginLeft:30,display:'inline-block'}}><b style={{ color: '#f00',margin: '0 3px'}}>*</b>联系方式：</span>
            <span style={{display:'inline-block'}}>
              <TextField style={{top:-5,display:'inline-block !important'}} value={state.phone} onChange={this.phoneHandle.bind(this)}/>
            </span>
          </div>
          <div className='line'>
            <span style={{marginRight:10}}><b style={{ color: '#f00',margin: '0 3px'}}>*</b>留言内容：</span>
            <textarea onChange={this.contentHandle.bind(this)} value={state.content} placeholder='在使用我们产品的过程中您有任何不满，都可以在这里提出您的意见和建议。我们会据此改善我们的服务，为您提供更好的体验'/>
          </div>
          <div className='line'>
            <label className='line-label'>
              <input type='file' style={{width:0}} onChange={this.fileHandle.bind(this)} ref='picFile'/>
              <i className='icon-file'></i>
              <span>请选择上传问题截图</span>
            </label>
            <span ref='localImag'>
              <img src={state.imgFileSrc} className='file-img' width='100%' height='200%' style={{display:state.srcDisplay}}/>
            </span>
            <span className='submit-btn' onClick={this.onSubmitHandle.bind(this)}>{this.props.user.get('cookieInfo').get('sid') ? '提交' : '登录'}</span>
          </div>
        </form>
        <Dialog {...this.state.dialog}/>
      </div>
    )
  }
}

class Datas extends Component{
  constructor (props) {
    super(props)
    this.state = {
      showIndex:1,
      suggestionList:{},
      compiaintList:{},
      questionList:{}
    }
  }

  componentDidMount(){
    //获取意见
    this.fetchNotice()
    //获取投诉
    this.fetComplaint()
    //获取资讯
    this.fetQuestions()
  }

  fetchNotice(){
    ApiCaller.call(Api.activity.getSuggestions,{page:1,pageSize:4},(res) => {
      if(res.code == 0){
        const state = this.state
        state.suggestionList = res
        this.setState(state)
      }
    })
  }

  fetComplaint(){
    ApiCaller.call(Api.activity.getComplaint,{page:1,pageSize:4},(res) => {
      if(res.code == 0){
        const state = this.state
        state.compiaintList = res
        this.setState(state)
      }
    })
  }

  fetQuestions(){
    ApiCaller.call(Api.activity.getQuestions,{page:1,pageSize:4},(res) => {
      if(res.code == 0){
        const state = this.state
        state.questionList = res
        this.setState(state)
      }
    })
  }

  topBarHandle(index){
    this.setState({showIndex:index})
  }

  render(){
    const state = this.state
    let html = ''
    if(state.showIndex == 1){
      html = (state.suggestionList.results || []).map((item,index) =>{
        return (
          <li key={index}>
            <div style={{lineHeight:'36px',padding:'10px 0',cursor:'pointer'}}>
              <i className='i-img-ask'/>
              <div className="list-content">
                <i></i>
                <span>{item.content}</span>
                <b></b>
              </div>
              <div className="list-date">{item.createTime}</div>
            </div>
          </li>
        )
      })
    }else if(state.showIndex == 2){
      html = (state.compiaintList.results || []).map((item,index) =>{
        return (
          <li key={index}>
            <div style={{lineHeight:'36px',padding:'10px 0',cursor:'pointer'}}>
              <i className='i-img-ask'/>
              <div className="list-content">
                <i></i>
                <span>{item.content}</span>
                <b></b>
              </div>
              <div className="list-date">{item.createTime}</div>
            </div>
          </li>
        )
      })
    }else if(state.showIndex == 3){
      html = (state.questionList.results || []).map((item,index) =>{
        return (
          <li key={index}>
            <div style={{lineHeight:'36px',padding:'10px 0',cursor:'pointer'}}>
              <i className='i-img-ask'/>
              <div className="list-content">
                <i></i>
                <span>{item.content}</span>
                <b></b>
              </div>
              <div className="list-date">{item.createTime}</div>
            </div>
          </li>
        )
      })
    }
    return (
      <div>
        <div className='top-list-bar'>
          <div className={state.showIndex == 1?'active':''} onClick={this.topBarHandle.bind(this,1)}>意见<i></i></div>
          <div className={state.showIndex == 2?'active':''} onClick={this.topBarHandle.bind(this,2)}>投诉<i></i></div>
          <div className={state.showIndex == 3?'active':''} onClick={this.topBarHandle.bind(this,3)}>咨询<i></i></div>
        </div>
        <div className='main-content'>
          <ul style={{marginTop:30}}>
            {html}
            <li className={html==''?'':'hide'} style={{textAlign:'center',color:'red',fontSize:'14px'}}>暂无数据</li>
          </ul>
        </div>
      </div>
    )
  }
}

class Feedback extends Component{
  render (){
    return (
      <div className='feedback'>
        <span className='center-head'>意见反馈</span>
        <FeedbackSubmit {...this.props}/>
      </div>
    )
  }
}

export default connect(state => ({
  global: state.global,
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Feedback)

module.exports = exports['default']
