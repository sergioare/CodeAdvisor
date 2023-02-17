import { GET_AUTORS, GET_REVIEWS } from '../actions/actions';

const initialState = {
  users: [],
  reviews: [],
  autors: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_AUTORS:
      return {
        ...state,
        autors: action.payload
      }

    case GET_REVIEWS:
      return {
        ...state, reviews: action.payload
      }

    default:
      return { ...state }
  }
}

export default rootReducer;