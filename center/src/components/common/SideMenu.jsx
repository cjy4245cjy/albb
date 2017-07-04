import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions'
import { bindActionCreators } from 'redux'
import { Link, IndexLink } from 'react-router'

class UserHeadNick extends Component {
  render () {
    const headImgStyle = {
      backgroundImage: 'url(' + this.props.userHeadImage + ')'
    }
    const authFlag = this.props.user.get('baseInfo').get('authStatus') == 1
    return (
      <div className="head_nick">
        <div className="headimg" style={this.props.userHeadImage ? headImgStyle : {}} onClick={this.props.openHeadPicDialog}></div>
        <div className="nickname">{ this.props.userNickName || '未设置昵称' } <a onClick={this.props.openNickNameDialog}><i className="iconfont icon-bianji"  style={{ color:"#666" }}/></a></div>
        <div className="info-icon hide">
          <span style={{ background:authFlag ? '#fc7852' : '#999' }}><i className="iconfont icon-geren"/></span>
          <span style={{ background:'#54b5fc' }}><i className="iconfont icon-shouji"/></span>
          <span style={{ background:authFlag ? '#908af7' : '#999' }}><i className="iconfont icon-bankcard"/></span>
        </div>
      </div>
    )
  }
}

class SideMenuItem extends Component {
  render () {
    return (
      <li style={this.props.style}>
        <i className={this.props.hot ? 'ui-icon-hot hot-flag' : 'hide'}/>
        {this.props.index ? <IndexLink activeClassName="actived" to={this.props.to}>{this.props.text}</IndexLink> : <Link activeClassName="actived" to={this.props.to}>{this.props.text}</Link>}
      </li>
    )
  }
}

class SideMenuGroup extends Component {
  render () {
    return (
      <ul className="menus">{this.props.children}</ul>
    )
  }
}

class SideMenu extends Component {
  render () {
    return (
      <div className="side_menu">
        <UserHeadNick
          userHeadImage={this.props.userHeadImage}
          userNickName={this.props.userNickName}
          openNickNameDialog={this.props.openNickNameDialog}
          openHeadPicDialog={this.props.openHeadPicDialog}
          {...this.props} />
        <SideMenuGroup>
          <SideMenuItem text="我的账户" to="/center" index={true} bordered />
          <SideMenuItem text="资产明细" to="/center/assets" />
          <SideMenuItem text="我的卡券" to="/center/redpacket" />
        </SideMenuGroup>
        <SideMenuGroup>
          <SideMenuItem text="我的推广" to="/center/spread"/>
          <SideMenuItem text="相关协议" to="/center/protocol" />
          <SideMenuItem text="密码设置" to="/center/accountsafety" />
          <SideMenuItem text="隐私设置" to="/center/privacy" />
        </SideMenuGroup>
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user
}), dispath => ({
  actions: bindActionCreators(Actions, dispath)
}))(SideMenu)
