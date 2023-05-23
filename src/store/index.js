import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { GETFOOTERLINKES, GETARTICLES } from './action'

const initialState = {
  links: [],
  articles: [],
}

function presentReducer(state = initialState, action) {
  switch (action.type) {
    case GETFOOTERLINKES:
      return { ...state, links: action.payload }
    case GETARTICLES:
      return { ...state, articles: action.payload }

    default:
      return state
  }
}

const rootReducer = combineReducers({ present: presentReducer })
export const store = createStore(rootReducer, applyMiddleware(thunk))
