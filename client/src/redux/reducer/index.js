import {GET_AUTORS } from '../actions/actions';

const initialState = {
    users: [],
    reviews: [],
    autors: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_AUTORS:
            return{
                ...state,
                autors:action.payload
            }

            default:
                return{...state}
    }
}

export default rootReducer;