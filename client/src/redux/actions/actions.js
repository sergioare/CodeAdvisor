import axios from "axios"
export const GET_AUTORS = "GET_AUTORS"
export const LOAD_PROFESSIONALS = "LOAD_PROFESSIONALS";
export const FILTER_BY_SPECIALTY = "FILTER_BY_SPECIALTY";
export const FILTER_BY_LANGUAGE = "FILTER_BY_LANGUAGE";
export const FILTER_BY_PROGRAMMING_LANGUAGE = "FILTER_BY_PROGRAMMING_LANGUAGE";
export const FILTER_BY_RESIDENCE = "FILTER_BY_RESIDENCE";
export const SORT_BY_SCORE  = "SORT_BY_SCORE";
export const SORT_BY_AVAILABILITY  = "SORT_BY_AVAILABILITY";

export const getAutors = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3002/data/autores/");
        const autors = apiData.data;
        dispatch({ type: GET_AUTORS, payload: autors });//... este info va al reducer
        
    };
};

export const loadProfessionals = () => {
    return function (dispatch) {
        fetch("http://localhost:3002/users")
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
  
  export const sortByScore = () => {
    return {
      type: SORT_BY_SCORE,
    };
  };
  
  export const sortByAvailability = () => {
    return {
      type: SORT_BY_AVAILABILITY,
    };
  };