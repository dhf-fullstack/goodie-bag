const initialState = {
  candies: []
};

const GET_CANDIES = 'GET_CANDIES';

export const getCandies = (candies) => {
  return { type: GET_CANDIES, candies };
}

export const fetchCandies = () => {
  return async (dispatch, _getState, {axios}) => {
    const candies = await axios.get('/api/candies');
    dispatch(getCandies(candies.data));
  }
}

export default (state = initialState, action) => {

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
