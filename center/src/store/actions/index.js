import Api from '../constants/Api'
import ApiCaller from '../../utils/ApiCaller'
import Cookie from '../../utils/Cookie'
import {
  GLOBAL_SET_CARD_BIND_DIALOG,
  USER_GET_COOKIE,
  USER_LOAD_INFO,
  USER_LOAD_ASSETS,
  USER_LOAD_STRATEGY_ASSETS,
  USER_LOAD_BANK_CARD,
  USER_LOAD_DATA_COUNT,
  USER_SET_DATA_COUNT,
  USER_SET_TRADE_PWD,
  USER_SET_NICK_NAME,
  USER_SET_HEAD_PIC,
  USER_SYNC_COOKIE_INFO,
  USER_SET_SPREAD_QRCODE,
  IM_ADD_EVENT,
  IM_REMOVE_EVENT
} from '../constants/ActionTypes'

// 打开/关闭银行卡绑定弹窗
export function showCardBindDialog(visible) {
  return {
    type: GLOBAL_SET_CARD_BIND_DIALOG,
    visible: visible
  }
}

// 异步加载个人信息
export function loadUserInfo(callback) {
  return dispath => {
    ApiCaller.call(Api.user.getInfo, (res) => {
      dispath({
        type: USER_LOAD_INFO,
        info: res.data
      })
      if (callback)
        callback(res.data)
    })
  }
}

// 异步加载资产
export function loadUserAssets() {
  return dispath => {
    ApiCaller.call(Api.user.getAssets, (res) => {
      dispath({
        type: USER_LOAD_ASSETS,
        assets: res.data
      })
    })
  }
}

// 异步加载策略账户资产
export function loadUserStrategyAssets() {
  return dispath => {
    ApiCaller.call(Api.user.getStrategyAssets, (res) => {
      dispath({
        type: USER_LOAD_STRATEGY_ASSETS,
        assets: res.data
      })
    })
  }
}

// 异步加载用户银行卡信息
export function loadUserBankCardList() {
  return dispath => {
    ApiCaller.call(Api.user.getBankCardList, (res) => {
      const bankCards = []
      for (var i in res.datas) {
        if (res.datas[i].status == 1)
          bankCards.push(res.datas[i])
      }
      dispath({
        type: USER_LOAD_BANK_CARD,
        list: bankCards
      })
    })
  }
}

// 异步加载用户数据统计
export function loadUserDataCount() {
  return dispath => {
    ApiCaller.call(Api.user.getDataCount, (res) => {
      dispath({
        type: USER_LOAD_DATA_COUNT,
        count: res.datas
      })
    })
  }
}

// 设置用户数据统计
export function setUserDataCount(dataCount) {
  return {
    type: USER_SET_DATA_COUNT,
    dataCount: dataCount
  }
}

// 首次设置交易密码
export function firstSetTradePwd() {
  return {
    type: USER_SET_TRADE_PWD
  }
}

// 设置昵称
export function setNickName(nickName) {
  return {
    type: USER_SET_NICK_NAME,
    nickName: nickName
  }
}

export function setHeadPic(headPic) {
  return {
    type: USER_SET_HEAD_PIC,
    headPic: headPic
  }
}

// 从 cookie 同步
export function syncCookieInfo() {
  var host = location.host
  var domain = host.substr(host.indexOf('zjqycf'))
  var options = {
    domain: domain,
    path: '/'
  }

  return {
    type: USER_SYNC_COOKIE_INFO,
    info: {
      uid: Cookie.get('uid', options),
      sid: Cookie.get('sid', options),
      phone: Cookie.get('phone', options),
      userType: Cookie.get('userType', options)
    }
  }
}

export function setSpreadQRCode(data) {
  return {
    type: USER_SET_SPREAD_QRCODE,
    data: data
  }
}

export function addIMEvent(type, eventHandler) {
  return {
    type: IM_ADD_EVENT,
    data: {
      type,
      eventHandler
    }
  }
}

export function removeIMEvent(type) {
  return {
    type: IM_REMOVE_EVENT,
    data: {
      type
    }
  }
}
