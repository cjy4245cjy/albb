import React from 'react'
import Runtime from '../../utils/Runtime'
import classnames from 'classnames'

const domain = Runtime.getDomain()

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function stopMouseWheel(e){
  e = e || window.event;

  if (e.stopPropagation)
    e.stopPropagation()
  else
    e.cancelBubble = true

  if (e.preventDefault)
    e.preventDefault()
  else
    e.returnValue = false
}

export default class Circle extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      position: 'absolute',
      top: 555,
      backTopVisible: false,
      downloadVisiable: false,
      bankImgVisiable: false,
    }
  }

  // componentDidMount () {
  //   window.onscroll = (e)=>{
  //     const scrollTop = parseInt(getScroll(window, true))
  //     if (scrollTop > 554)
  //       this.setState({ position: 'fixed', top: 0, backTopVisible: true })
  //     else
  //       this.setState({ position: 'absolute', top: 555, backTopVisible: false })
  //   }
  // }

  handleBackTop() {
    //禁用滚轮事件
    const isFF = /FireFox/i.test(navigator.userAgent)
    if(isFF){
      document.body.addEventListener('DOMMouseScroll', stopMouseWheel, false)
    }else{
      document.body.onmousewheel = stopMouseWheel
    }
    //键盘上下事件
    document.onkeydown = (e) => {
      e = e || window.event
      if(e && (e.keyCode == 38 || e.keyCode == 40)){
        stopMouseWheel(e)
      }
    }

    const timer = setInterval(function(){
      let top = document.body.scrollTop > 0 ? document.body.scrollTop : document.documentElement.scrollTop
      if(top <= 0){
        clearInterval(timer)
        //回复滚轮事件
        if(isFF){
          document.body.removeEventListener('DOMMouseScroll', stopMouseWheel )
        }else{
          document.body.onmousewheel = null
        }
        document.onkeydown = null
        return
      }
      let scrollTop = top / 6

      if(document.body.scrollTop > 0){
        document.body.scrollTop -= scrollTop
      }
      if(document.documentElement.scrollTop > 0){
        document.documentElement.scrollTop -= scrollTop
      }
    },6)
  }

  handleShowQRCode() {
    const state = this.state
    state.downloadVisiable = true
    this.setState(state)
  }

  handleHideQRCode() {
    const state = this.state
    state.downloadVisiable = false
    this.setState(state)
  }



  render () {
    const backTopVisible = this.props.backTopVisible
    const boxHeight = 158
    const downloadClass = classnames({
      'download': true,
      'hide': !this.state.downloadVisiable
    })
    const bankImgClass = classnames({
      'bank-img': true,
      'hide': !this.state.bankImgVisiable
    })
    return (
      <div>
        <div className={bankImgClass}>
          <div className="bank-img-close"  onClick={()=>{this.setState({ bankImgVisiable: false })}}></div>
          <img onClick={()=>{window.open('http://hd.ddy98.com/bank/')}} src="data:image/png;base64,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"/>
        </div>
        <div className="box" style={{ position: this.props.position, height: boxHeight, top: 100 }}>
  	      <div className="lump weixin-code" onMouseMove={this.handleShowQRCode.bind(this)} onMouseOut={this.handleHideQRCode.bind(this)}><i></i></div>
          <div className={downloadClass}></div>
  	      <div className="lump content-kefu" onClick={()=>{window.open('http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAxNTM4MF8zMTM5MDdfNDAwNzExMTI4OF8yXw')}}></div>
          <div className="lump content-gonggao" onClick={()=>{ window.open('http://www.' + domain + '/about/announcement')}}></div>
          <div className="lump back-top"></div>
  	      { backTopVisible ? <div className="lump back-top" onClick={this.handleBackTop.bind(this)}></div> : null}
        </div>
      </div>
    )
  }
}
module.exports = exports['default']
