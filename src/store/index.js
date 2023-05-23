import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { UPDATEUSER, GETFOOTERLINKES } from './action'

const initialState = {
  user: {
    id: 0,
    name: 'lir',
    age: 24,
  },
  links: [],
}

function presentReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATEUSER:
      return { ...state.user, ...action.payload }
    case GETFOOTERLINKES:
      console.log(action.payload, 'action payload')
      return { ...state.links, links: action.payload }

    default:
      return state
  }
}

const rootReducer = combineReducers({ present: presentReducer })
export const store = createStore(rootReducer, applyMiddleware(thunk))
