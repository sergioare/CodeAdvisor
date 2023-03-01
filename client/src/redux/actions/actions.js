import axios from "axios"

export const GET_AUTORS = "GET_AUTORS";
export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_ADVISORS = 'GET_ADVISORS';
export const ADVISOR_DETAIL = 'ADVISOR_DETAIL';
export const LOAD_PROFESSIONALS = "LOAD_PROFESSIONALS";
export const FILTER_BY_SPECIALTY = "FILTER_BY_SPECIALTY";
export const FILTER_BY_LANGUAGE = "FILTER_BY_LANGUAGE";
export const FILTER_BY_PROGRAMMING_LANGUAGE = "FILTER_BY_PROGRAMMING_LANGUAGE";
export const FILTER_BY_RESIDENCE = "FILTER_BY_RESIDENCE";
export const SORT_ADVISORS = "SORT_ADVISORS";
export const SORT_BY_AVAILABILITY = "SORT_BY_AVAILABILITY";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
export const GET_TECHSKILLS = 'GET_TECHSKILLS';
export const GET_PROFILE = 'GET_PROFILE'
export const GET_ADVISORS_REVIEWS = 'GET_ADVISORS_REVIEWS'
export const BLOCK_ACCOUNT = 'BLOCK_ACCOUNT'
export const UNBLOCK_ACCOUNT = 'UNBLOCK_ACCOUNT'


export const getAutors = () => {
  return async function (dispatch) {
    const apiData = await axios.get("https://code-advisor-xi.vercel.app/data/autores/");
    const autors = apiData.data;
    dispatch({ type: GET_AUTORS, payload: autors });//... este info va al reducer

  };
};

export const blockAccount = (id) => {
  return async function (dispatch) {
    dispatch({ type: BLOCK_ACCOUNT, payload: id })
  };
}

export const unBlockAccount = (id) => {
  return async function (dispatch) {
    dispatch({ type: UNBLOCK_ACCOUNT, payload: id })
  };
}

export const getAdvisorReviews = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`https://code-advisor-xi.vercel.app/Advisors/${id}/Reviwers`);
    const reviews = apiData.data;
    dispatch({ type: GET_ADVISORS_REVIEWS, payload: reviews });

  };
};

export const getReviews = () => {
  return async function (dispatch) {
    const response = await axios.get('https://code-advisor-xi.vercel.app/data/CommunityComments');
    const reviews = response.data;
    dispatch({ type: GET_REVIEWS, payload: reviews });
  };
};

export const getAdvisors = () => {
  return async function (dispatch) {
    const response = await axios.get('https://code-advisor-xi.vercel.app/Advisors');
    const advisors = response.data;
    dispatch({ type: GET_ADVISORS, payload: advisors })
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://code-advisor-xi.vercel.app/Advisors/${id}`);
    const advisor = response.data;
    dispatch({ type: ADVISOR_DETAIL, payload: advisor })
  }
}

export const getProfile = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://code-advisor-xi.vercel.app/Advisors/${id}`);
    const advisor = response.data;
    dispatch({ type: GET_PROFILE, payload: advisor })
  }
}

export const getTechSkills = () => {
  return async function (dispatch) {
    const response = await axios.get('https://code-advisor-xi.vercel.app/data/TechSkills');
    const techSkills = response.data;
    dispatch({ type: GET_TECHSKILLS, payload: techSkills })
  }
}

export const loadProfessionals = () => {
  return function (dispatch) {
    fetch("https://code-advisor-xi.vercel.app/Advisors")
      .then(res => res.json())
      .then(data => dispatch({ type: LOAD_PROFESSIONALS, payload: data }));
  }
}

export const filterBySpecialty = (specialty) => {
  return {
    type: FILTER_BY_SPECIALTY,
    payload: specialty,
  };
};

export const filterByLanguage = (language) => {
  return {
    type: FILTER_BY_LANGUAGE,
    payload: language,
  };
};

export const filterByProgrammingLanguage = (programmingLanguages) => {
  return {
    type: FILTER_BY_PROGRAMMING_LANGUAGE,
    payload: programmingLanguages,
  };
};

export const filterByResidence = (countries) => {
  return {
    type: FILTER_BY_RESIDENCE,
    payload: countries,
  };
};

export const sortAdvisors = (method) => {
  return {
    type: SORT_ADVISORS,
    payload: method
  };
};

/* export const sortByAvailability = () => {
  return {
    type: SORT_BY_AVAILABILITY,
  };
}; */
export const POST_COMMENT ='POST_COMMENT';
export const GET_COMMENT ='GET_COMMENT';
export const DELETE_COMMENT ='DELETE_COMMENT';
export const PUT_RATING ='PUT_RATING';


export function postComment(id, comment) {
  return async function (dispatch) {
    const tokken = window.localStorage.getItem("tokken");
    const json = await axios.post(`https://code-advisor-xi.vercel.app/Advisors/${id}/Reviwers`, {
      headers: {
        authorization: "Bearer " + tokken,
      },
      id,
      comment: comment.comment,
    });
    return dispatch({
      type: POST_COMMENT,
      payload: json.data,
    });
  };
}

export function getComment(id) {
  try {
    return async function (dispatch) {
      const response = await axios.get(`https://code-advisor-xi.vercel.app/Advisors/${id}/Reviwers`);
      dispatch({
        type: GET_COMMENT,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function deleteComment(id) {
  try {
    return async function (dispatch) {
      const response = await axios.delete(`https://code-advisor-xi.vercel.app/Advisors/${id}/Reviwers/${id}`);
      dispatch({
        type: DELETE_COMMENT,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}

export function putRating(id, rating) {
  try {
    return async function (dispatch) {
      console.log(id, rating);
      const response = await axios.put(`/course/${id}`, {
        rating: rating,
      });
      dispatch({
        type: PUT_RATING,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}