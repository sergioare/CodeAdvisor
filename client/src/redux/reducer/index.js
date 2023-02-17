import { GET_AUTORS, GET_REVIEWS, GET_ADVISORS, ADVISOR_DETAIL } from '../actions/actions';

const initialState = {
  users: [],
  advisors: [],
  advisorDetail: [],
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

    case GET_ADVISORS:
      return {
        ...state, advisors: action.payload
      }

    case ADVISOR_DETAIL:
      return {
        ...state, advisorDetail: action.payload
      }

    default:
      return { ...state }
  }
}

export default rootReducer;