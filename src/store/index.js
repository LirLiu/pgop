import { createStore } from 'redux'
import { UPDATEUSER } from './action'

const initialState = {
  user: {
    id: 0,
    name: 'lir',
    age: 24,
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATEUSER:
      return {...state.user,...action.payload}

    default:
      return state;
  }
}
export const store = createStore(reducer)

