import { Map, List } from 'immutable'
import {
  USER_SYNC_COOKIE_INFO,
  USER_LOAD_ASSETS,
  USER_LOAD_STRATEGY_ASSETS
} from '../constants/ActionTypes'

const initialState = Map({
  cookieInfo: Map({}),
  assets: Map({}),
  strategyAssets: Map({}),
  logined: false
})

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_SYNC_COOKIE_INFO:
      return action.data ? state.set('cookieInfo', Map(action.data)) : state.set('logined', false).set('assets', Map({})).set('strategyAssets', Map({})).set('cookieInfo',Map({}))
    case USER_LOAD_ASSETS:
      return action.data ? state.set('assets', Map(action.data)).set('logined', true) : state.set('logined', false)
    case USER_LOAD_STRATEGY_ASSETS:
      return action.data ? state.set('strategyAssets', Map(action.data)).set('logined', true) : state.set('logined', false)
    default:
      return state
  }
}
