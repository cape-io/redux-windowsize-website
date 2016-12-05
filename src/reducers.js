import { combineReducers } from 'redux'
import windowSize, { REDUCER_KEY } from 'redux-windowsize'

const reducers = {
  [REDUCER_KEY]: windowSize,
}

export default combineReducers(reducers)
