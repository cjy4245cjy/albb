import { combineReducers } from 'redux'
import global from './global'
import user from './user'
import im from './im'

const rootReducer = combineReducers({
  global,
  user,
  im
})

export default rootReducer
