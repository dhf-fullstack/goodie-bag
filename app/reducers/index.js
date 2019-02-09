import { combineReducers } from 'redux'
import candiesReducer from './candies'
export * from './candies'

const initialState = {}

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers(
  {
    candies: candiesReducer,
    root: defaultReducer
  }
);
