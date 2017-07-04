import React, { PropTypes } from 'react'
import ApiCaller from '../../utils/ApiCaller'
import Api from '../../store/constants/Api'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions'
import { bindActionCreators } from 'redux'
import Runtime from '../../utils/Runtime'
import Cookie from '../../utils/Cookie'
import TweenOne from 'rc-tween-one'
import classnames from 'classnames'

const domain = Runtime.getDomain()
const cookieOptions = {
  path: '/',
  domain: Runtime.getDomain()
}
const blackLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAxCAMAAADHqkpQAAABJlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////80KishFxn6+fnz8vLq6eng3t3T0NDFwsG3srGXkZCHgH92bm1lXV1WTU1IPj4UCg6no6SnoJ1mVfuTAAAAT3RSTlMAu0R3cCyZzd0QM2Yi7lQCq9Y5iAYEqD1qfR9bwZGMYEkZFdO0sZ1PrnJtV0EpCgjqooV69tnKlV5MLg7mxaQcDIJ1YzAlEqCJubf88eTi0PWkuAAABrZJREFUWMPM1IeymkAYBeCDBa+FIhEQKSqI3Sv2XmKLpm16b+//FMFcvUk0IWUm5RvY8u/szJmd2cUPVET8D1Ykg//AprS7i/9AMwOi45/L8BxYEsPf8B7flQgJALodePgbORq34MqSJf6ChziRwEHm7gZ7CgnjoI4/5gFO8J34FdLHFevuoXI/8FXgOeomgGx9n7Am4soqhYMYsBaBOdw/8cs5+uQghIMgOVoDqNCNad79kvVudGhzyoYfANh0j6dInBQQ3hrGQqsKGrK83lMlZdq8hKd3ONUlV2o4Mg4VBS5BUBk5rq98o0qA1XA/lfOt/Yse01z4g8DCihWsAtDlJ93b1ngcXDvbyQ1mS01MeHqLUwL5hMY1cUz2mDpc6XxCgzSs9Aa5yKTdsiRprTslY6wEnKYvThpsxSJUKslTLSFnF7KpeFMrMXnNDsPTG5zRiKs9x2cZslfCXtYJ8OI0HY9yaWusXTCkvaF1hLuAbvjUWGa8q8aWKX8+Jw1uNwoZuRNtUlJf00bw9BpnVsSl4ku0W3G4w3UmPAzGAmT/zfyw0+/M9PYNm5FutHtgk8sLalmq4WZRu7Vk7kQrZlot3B1ErT68vcI5mxBN0Ecwmw274GsBqjIm189I4gaFnp0FnGByitDoVjWSHqodXzAtY0Eqt7dlUkMuv5MS3Tsm3ETd4m1pF4G3lzgXa5NVkZSxIrteVSJAJ+c7Xh+xvGy1/Y6kRtn4gIlw46BW2W+5EAGYwoW/qOeKwRqvX1ChVoGw2fFNypgGprQJTx/wDW1+FrIt1AhrIs8AEwoMdcixUPxJpVxqJct+XQdXGPVkALXdBoDc29LForSla4AyoYGbNGs3+KnUkPgMPL3AuSRJGMVLYoaJNRGaDqCFUCVDnLrEHvepGXGnizP8iuc4d4eGw0gkLZLKLJFvA6EOQFn4k57hTIBAJWlWYyKkClRJTyEBYEN82DODv2cOT09xhiiI+oGUsdquAVRzdgUufwd7QuD3pODpCU4t2vg2q48/5zFOiPdkfFstx+HajLserc0NvjDKApiLEDmIAOoz/IxHONF0asKVWOogIsiyXK1GJgpcahG4zKoYuV0CkPOyT0YYx7m5GqCO1hDqAH43zzyNEQfuEt7u4EQxZMU/6ZCje13KntKGUs7A1YrPMvSQDevR4S0jCDb3kfl6WW0QiMIA/DNj0las04rRsRIvIdFqLpK4qAZKa0sR0oKb3nd9/5eoxk1AMFmJH8PAcGbxw1zgPPiKrdmPFideNuCCqbhaKogITcS+FhOiWME2yzlaFY1zgVpb3Re1NxcHxKm30XdUMHd5EHCjzLE1eCBTPlvfJfbMiiidnw1DEQJXgzi0b+0hoesgyU/M0SQVNQeHeLjaLLxMt6c01RUTvoxEdiQiTOnzQJcFnqT8is+XkKyxThTRcPRxSPxleOr9aDKKyqzxiTJ3ghEmERhj2A9Wr8sZ0qisg1U7X1CVRriJoIIdey8tzssYry668I4WizLHEzrxgTZacY1ufKKNe+mgG19o5avoxjf64Q/98IN++EXXLlCSjvUv/32YDY7rIAyEZ8YS/0GROFjuf5tXDC+7aasdpULBgD/GtGqiWw2WgYFcUOuKEbfGtdbzkcxQAKqZNdlLK00lXB64u1MHQF+xEEDM357nSB5xXqyoqYEQYfbOYdF8vlIISf0EBdAUZSZFeZZXDC6apNWdZUmyqAJgDAB2fn++BTWvKeHmmFsKaW+qncyoST5YlI1XSJsjkocco2CDUHcj7nUIIFW+FEl+PO+fbXOM3g3q7L5HMOz5SdkOW/s9BcZIeURzTJJpJeyxAAhujadaeLLtKwFdWVsf7z9sbI6j5WDDGDvj5BD2fFVWMh5kMLofO7L8iO5HDjv3eTCj+BHwRmnNJQFekBuW8gdHS4ujnwByFC0wnA+Ox1mh2XJ6e1YjmmIpBrlaludeeviheCGnPK378n4sdudgB1rpOnNne9YFus8KwBAmxzVvpqxAVpF1q/zK/fCjlgsI1T+fHDYosCZgHU+IeONo1mVRMmHXxQ536WBKPBgNhdzpOJyjh8WR22Yq68/g9P3I+FRedZmh0HH2zeG15S6yESI0PY0jHAOpRLy0iCFbzlaoAvD7wTbjlT+AzoHkKMAf39uUlfD19yNIxFkAi8OIYBjhybHczrHCPVCqPFXwXOfCHvghu37UUp52l/HGUX72NLw3TIbIyv91SUR+tbwupgq0Sno5qDeOOx3+UO4QXFptc/DnGZyc8t6Ch7oH0QzltAaX7F7HZcDWP7gVzk3ATfiYAAAAAElFTkSuQmCC'
const redLogo = 'data:image/png;base64,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'
const dianDianYingLogoRed =
'data:image/png;base64,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'
const dianDianYingLogoWhite =
    'data:image/png;base64,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'
const certificateImg = 'data:image/png;base64,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'

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
  return ret
}

class UnLogined extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      fontColor: "#fc5146"
    }
  }

  render(){
    const loginedLiClass = classnames({
      'logined-li': true,
      'white': this.props.isWhite
    })
    return(
      <li className={loginedLiClass}>
        <a href={'//user.' + domain + '/login.html?url=' + location.href}>登录</a>
        <i>|</i>
        <a href={'//user.' + domain + '/reg.html'}>注册</a>
      </li>
    )
  }
}

class Logined extends React.Component{
  handleLogout() {
    this.props.handleLogout()
  }

  formatPhone(phone = ""){
    phone = phone.toString()
    if(phone.length != 11){
      return phone
    }
    phone = phone.substr(0,3) + '****' + phone.substr(7)
    return phone
  }

  render () {
    const exitClass = classnames({
      'logined-li': true,
      'white': this.props.isWhite
    })
    const cookieInfo = this.props.user.get('cookieInfo')
    const centerLink = '//user.' + domain + '/center/'
    const helpLink = '//www.' + domain + '/help/'
    return (
      <li className={exitClass} style={{minWidth:120}}>
        <span style={{ color:'#fff',marginRight:20 }}>|</span>
        <a href={'//user.' + domain + '/center'}>{this.props.data.nickName || this.formatPhone(this.props.data.phone)}</a>
        <a href='javascript:void(0)' onClick={this.handleLogout.bind(this)} style={{ fontSize:'14px' }}>退出</a>
      </li>
    )
  }
}
class Navigator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
      logined: false,
      opacity: 0,
      position: 'absolute',
      logo: blackLogo,
      bgColor: '',
      fontColor: '',
      isWhite: false,
      dianDianYingLogo: dianDianYingLogoRed,
      isDark: false
    }
  }

  componentDidMount(){
    const nickName = Cookie.get('nickName', cookieOptions)
    if(nickName){
      const state = this.state
      state.data.nickName = decodeURIComponent(nickName)
      state.data.phone = Cookie.get('phone', cookieOptions) || ''
      state.logined = true
      this.setState(state)
    }
    this.fetch()
    // 监听滚动
    this.onScroll()
    // 监听鼠标事件
    this.onMouserListener()
  }

  onScroll(){
    window.addEventListener('scroll', (e) => {
      const scrollTop = parseInt(getScroll(window, true))
      const state = this.state
      this.setState({
        bgColor: scrollTop >= 800 ? '#393e4b' : '',
        position: scrollTop >= 800 ? 'fixed' : 'absolute',
        isDark: scrollTop >=800 ? true : true,
        isWhite: scrollTop >=800 ? true : true,
        logo: scrollTop >=800 ? blackLogo : blackLogo,
        dianDianYingLogo: scrollTop >=800 ? dianDianYingLogoWhite : dianDianYingLogoWhite
      })
    })
  }

  getTarget(target){
    // if (this.state.isWhite)
    //   return null

    while (target.tagName != 'A' && target.className != 'top-list') {
      target = target.parentNode
    }
    return target.className == 'top-list' ? null : target
  }

  onMouserListener(){
    const links = document.getElementById('navigatorLinks')
    links.onmouseover = (e) => {
      const target = this.getTarget(e.target)
      const scrollTop = parseInt(getScroll(window, true))
      if(!target || target.parentNode.className == 'logined-li'){
        return
      }else{
        target.children[0].children[1].style.width = '100%'
      }
    }
    links.onmouseout = (e) => {
      const target = this.getTarget(e.target)
      if(!target || target.parentNode.className == 'logined-li'){
        return
      }
      target.style.backgroundColor = 'transparent'
      if (target.children.length > 0 && target.children[0].children.length > 1)
        target.children[0].children[1].style.width = '0'
    }
  }

  fetch(){
    ApiCaller.call(Api.user.getInfo,{
      uid: Cookie.get('uid', cookieOptions)
    },(res) => {
      const state = this.state
      if(res.code == 0){
        state.data = res.data
        state.logined = true
      }else if(res.code == -2){
        state.logined = false
      }
      this.setState(state)
    })
  }

  handleLogout(){
    Cookie.remove('uid', cookieOptions)
    Cookie.remove('sid', cookieOptions)
    Cookie.remove('userType', cookieOptions)
    this.props.actions.userSyncCookieInfo()
    this.fetch()
  }

  render () {
    const dianDianYingLogo = this.state.dianDianYingLogo
    const navClass = classnames({
      "navigator": true
    })
    let logo = this.state.logo
    const topListClass = classnames({
      'top-list': true,
      'dark': true
    })
    return (
      <TweenOne className={ navClass } style={{ background: (location.pathname == '/') ? this.state.bgColor : "#393e4b", position:this.state.position }}>
        <div className='main-page'>
          <TweenOne style={{ position:'relative' }} animation={{ x: -60, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}>
            <img style={{ float:'left', marginTop: '16px' }} src={dianDianYingLogoWhite}/>
          </TweenOne>
          <TweenOne animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}>
            <ul className={topListClass} id='navigatorLinks'>
              <li>
                <a href={'//www.' + domain}><span>首页<i/></span></a>
              </li>
              <li>
                <a href={'//pb.' + domain +'/real/trade'}><span>投资策略<i/></span></a>
              </li>
              <li>
                <a href={'//pb.' + domain + '/sim'}><span>炒股大赛<i/></span></a>
              </li>
              <li>
                <a href={'//pb.' + domain + '/sim/subscribe'}><span>高手跟踪<i/></span></a>
              </li>
              { this.state.logined ? <Logined {...this.props} isWhite={this.state.isWhite} data={this.state.data} handleLogout={this.handleLogout.bind(this)}/> : <UnLogined {...this.props} isWhite={this.state.isWhite} />}
            </ul>
          </TweenOne>
        </div>
      </TweenOne>
    )
  }
}

export default connect(state => ({
  global: state.global,
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(Navigator)
module.exports = exports['default']
