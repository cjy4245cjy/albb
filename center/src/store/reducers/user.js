import { Map, List } from 'immutable'
import {
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
  USER_SET_SPREAD_QRCODE
} from '../constants/ActionTypes'

const initialState = Map({
  cookieInfo: Map({}),
  baseInfo: Map({}),
  loginInfo: Map({}),
  assets: Map({}),
  bankCardList: List([]),
  strategyAssets: Map({}),
  dataCount: Map({}),
  spreadQRCode: false,
  logined: true
})

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOAD_INFO:
      return state.set('baseInfo', Map(action.info))
                  .set('loginInfo', Map(action.info))
    case USER_LOAD_ASSETS:
      return state.set('assets', Map(action.assets))
    case USER_LOAD_STRATEGY_ASSETS:
      return state.set('strategyAssets', Map(action.assets))
    case USER_LOAD_BANK_CARD:
      return state.set('bankCardList', List(action.list))
    case USER_LOAD_DATA_COUNT:
      return state.set('dataCount', Map(action.count))
    case USER_SET_DATA_COUNT:
      return state.set('dataCount', state.get('dataCount').merge(Map(action.dataCount)))
    case USER_SET_TRADE_PWD:
      return state.set('baseInfo', state.get('baseInfo').set('transPwd', 'true'))
    case USER_SET_NICK_NAME:
      return state.set('baseInfo', state.get('baseInfo').set('nickName', action.nickName))
    case USER_SET_HEAD_PIC:
      return state.set('baseInfo', state.get('baseInfo').set('headImage', action.headPic))
    case USER_SYNC_COOKIE_INFO:
      const info = action.info
      if (!info.uid || !info.sid)
        return state.set('logined', false)
      return state.set('cookieInfo', Map(action.info))
    case USER_SET_SPREAD_QRCODE:
      return state.set('spreadQRCode', action.data)
    default:
      return state
  }
}
