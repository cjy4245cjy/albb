import Api from '../constants/Api'
import ApiCaller from '../../utils/ApiCaller'
import Cookie from '../../utils/Cookie'
import Runtime from '../../utils/Runtime'
import {
  USER_SYNC_COOKIE_INFO,
  USER_LOAD_ASSETS,
  USER_LOAD_STRATEGY_ASSETS,
  GLOBAL_SWITCH_LOGIN_VISIBLE
} from '../constants/ActionTypes'

const cookieOptions = {
  path: '/',
  domain: Runtime.getDomain()
}

// 同步 cookie 信息
export function userSyncCookieInfo() {
  const cookieInfo = {
    uid: Cookie.get('uid', cookieOptions),
    sid: Cookie.get('sid', cookieOptions),
    phone: Cookie.get('phone', cookieOptions),
    userType: Cookie.get('userType', cookieOptions)
  }
  return {
    type: USER_SYNC_COOKIE_INFO,
    data: !!cookieInfo.uid && !!cookieInfo.sid ? cookieInfo : false
  }
}

// 加载资产
export function userLoadAssets(onError = ()=>{}) {
  return dispath => {
    ApiCaller.call(Api.user.getAssets, (res) => {
      if (res.code == 0) {
        dispath({
          type: USER_LOAD_ASSETS,
          data: res.data
        })
      } else {
        onError(res)
        dispath({
          type: USER_LOAD_ASSETS,
          data: false
        })
      }
    })
  }
}

// 加载策略资产
export function userLoadStrategyAssets(onError = ()=>{}) {
  return dispath => {
    ApiCaller.call(Api.user.getStrategyAssets, (res) => {
      if (res.code == 0) {
        dispath({
          type: USER_LOAD_STRATEGY_ASSETS,
          data: res.data
        })
      } else {
        onError(res)
        dispath({
          type: USER_LOAD_STRATEGY_ASSETS,
          data: false
        })
      }
    })
  }
}

// 显示/隐藏登录框
export function globalSwitchLoginVisible(visible) {
  return {
    type: GLOBAL_SWITCH_LOGIN_VISIBLE,
    visible: visible
  }
}
