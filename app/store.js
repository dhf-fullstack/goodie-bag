import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
// TODO import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

const initialState = {
  candies: []
};

const GET_CANDIES = 'GET_CANDIES';

export const getCandies = (candies) => {
  console.log('STORE getCandies')
  return { type: GET_CANDIES, candies };
}

export const fetchCandies = () => {
  console.log('STORE fetchCandies')
  return async (dispatch) => {
    const candies = await axios.get('/api/candies');
    console.log('fetchCandies', candies.data);
    dispatch(getCandies(candies.data));
  }
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_CANDIES:
      return {
        ...state,
        candies: action.candies
      };

    default:
      return state;
  }

}

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)
