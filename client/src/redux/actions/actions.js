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
export const POST_REVIWER = 'POST_REVIWER';
export const DELETE_REVIWER = 'DELETE_REVIWER';
// export const PUT_SCORE = 'PUT_SCORE';


export function postReviwer(id, Reviwer, score) {
  return async function (dispatch) {
    const tokken = window.localStorage.getItem("tokken");
    const json = await axios.post(`https://code-advisor-xi.vercel.app/Advisors/${id}/Reviwers`,
      {
        id,
        Reviwer: Reviwer.Reviwer,
        score: score
      },
      {
        headers: {
          authorization: "Bearer " + tokken,
        },
      }
    );
    return dispatch({
      type: POST_REVIWER,
      payload: json.data,
    });
  };
}

// export function putScore(id, score) {
//   return async function (dispatch) {
//     console.log(id, score);
//     try {
//       const response = await axios.put(`https://code-advisor-xi.vercel.app/Advisors/${id}/Reviwers`, {
//         score: score,
//       });
//       dispatch({
//         type: PUT_SCORE,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

export function deleteReviwer(id) {
  try {
    return async function (dispatch) {
      const response = await axios.delete(`https://code-advisor-xi.vercel.app/Advisors/${id}/Reviwers/${id}`);
      dispatch({
        type: DELETE_REVIWER,
        payload: response.data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
}
