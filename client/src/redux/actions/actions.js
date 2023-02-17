import axios from "axios"

export const GET_AUTORS = "GET_AUTORS";
export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_ADVISORS = 'GET_ADVISORS';
export const ADVISOR_DETAIL = 'ADVISOR_DETAIL';

export const getAutors = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3002/data/autores/");
    const autors = apiData.data;
    dispatch({ type: GET_AUTORS, payload: autors });//... este info va al reducer
  };
};

export const getReviews = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3002/data/reviewrs');
    const reviews = response.data;
    dispatch({ type: GET_REVIEWS, payload: reviews });
  };
};

export const getAdvisors = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3002/users');
    const advisors = response.data;
    dispatch({ type: GET_ADVISORS, payload: advisors })
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3002/user/${id}`);
    const advisor = response.data;
    dispatch({ type: ADVISOR_DETAIL, payload: advisor })
  }
}