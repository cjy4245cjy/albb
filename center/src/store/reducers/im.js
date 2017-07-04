import { IM_ADD_EVENT, IM_REMOVE_EVENT } from '../constants/ActionTypes'
import { Map, List } from 'immutable'

const initialState = Map({
  events: Map({})
})

export default function global(state = initialState, action) {
  const actionData = action.data
  const events = state.get('events')
  switch (action.type) {
    case IM_ADD_EVENT:
      return state.set('events', events.set(actionData.type + '', actionData.eventHandler))
    case IM_REMOVE_EVENT:
      delete events[actionData.type + '']
      return state.set('events', Map(events))
    default:
      return state
  }
}
