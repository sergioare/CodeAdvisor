import {
  LOAD_PROFESSIONALS,
  FILTER_BY_SPECIALTY,
  FILTER_BY_LANGUAGE,
  FILTER_BY_PROGRAMMING_LANGUAGE,
  FILTER_BY_RESIDENCE,
  SORT_ADVISORS,
  GET_AUTORS, GET_REVIEWS, GET_ADVISORS, ADVISOR_DETAIL, GET_TECHSKILLS,
} from '../actions/actions';

const initialState = {
  users: [],
  advisors: [],
  advisorDetail: [],
  reviews: [],
  autors: [],
  techSkills: [],

  advisorsInDisplay: [],
  filters: {
    F_Specialty: [],
    F_Language: [],
    F_Programming_L: [],
    F_Residence: [],
  },
  sortMethod: "",
}

const filterApplyer = (advisors, filters, method) => {
  let advisorsToDisplay = [...advisors];

  if (filters.F_Specialty && filters.F_Specialty.length > 0) {
    advisorsToDisplay = advisorsToDisplay.filter(advisor =>
      filters.F_Specialty.every(specialty => advisor.Specialty.includes(specialty))
    );
  }

  if (filters.F_Language && filters.F_Language.length > 0) {
    advisorsToDisplay = advisorsToDisplay.filter(advisor => {
      return filters.F_Language.every(lang => advisor.Language.includes(lang));
    });
  }


  if (filters.F_Programming_L && filters.F_Programming_L.length > 0) {
    advisorsToDisplay = advisorsToDisplay.filter(advisors => {
      for (let i = 0; i < filters.F_Programming_L.length; i++) {
        if (!advisors.TechSkills.includes(filters.F_Programming_L[i])) {
          return false;
        }
      }
      return true;
    });

  }

  if (filters.F_Residence && filters.F_Residence.length > 0) {
    advisorsToDisplay = advisorsToDisplay.filter(advisors => filters.F_Residence.includes(advisors.Residence));
  }

  if (advisorsToDisplay.length === advisors.length) {
    // No filters active, return original array of advisors
    return sortAdvisors(advisorsToDisplay, method);
  } else {
    // Filters active, return filtered array of advisors
    const advisorsSorted = sortAdvisors(advisorsToDisplay, method);
    return advisorsSorted;
  }
};


function sortAdvisors(advisors, sortBy) {
  const sortedAdvisors = [...advisors];
  switch (sortBy) {
    case "Best Score":
      sortedAdvisors.sort((advisor1, advisor2) => advisor2.Score - advisor1.Score);
      break;
    case "More expensive":
      sortedAdvisors.sort((advisor1, advisor2) => advisor2.Price - advisor1.Price);
      break;
    case "More Affordable":
      sortedAdvisors.sort((advisor1, advisor2) => advisor1.Price - advisor2.Price);
      break;
    case "A to Z":
      sortedAdvisors.sort((advisor1, advisor2) => advisor1.Lastname.localeCompare(advisor2.Lastname));
      break;
    case "Z to A":
      sortedAdvisors.sort((advisor1, advisor2) => advisor2.Lastname.localeCompare(advisor1.Lastname));
      break;
    default:
      break;
  }
  return sortedAdvisors;
}


const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_AUTORS:
      return {
        ...state,
        autors: action.payload
      };

    case LOAD_PROFESSIONALS:
      return {
        ...state,
        advisors: action.payload,
        advisorsInDisplay: action.payload,
      };
    case FILTER_BY_SPECIALTY:
      const filteredBySpecialty = filterApplyer(state.advisors, {
        ...state.filters,
        F_Specialty: action.payload,
      }, state.sortMethod);
      return {
        ...state,
        filters: {
          ...state.filters,
          F_Specialty: action.payload,
        },
        advisorsInDisplay: filteredBySpecialty,
      };

    case FILTER_BY_LANGUAGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          F_Language: action.payload,
        },
        advisorsInDisplay: filterApplyer(state.advisors, {
          ...state.filters,
          F_Language: action.payload,
        }, state.sortMethod),
      };
    case FILTER_BY_PROGRAMMING_LANGUAGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          F_Programming_L: action.payload,
        },
        advisorsInDisplay: filterApplyer(state.advisors, {
          ...state.filters,
          F_Programming_L: action.payload,
        }, state.sortMethod),
      };
    case FILTER_BY_RESIDENCE:
      return {
        ...state,
        filters: {
          ...state.filters,
          F_Residence: action.payload,
        },
        advisorsInDisplay: filterApplyer(state.advisors, {
          ...state.filters,
          F_Residence: action.payload,
        }, state.sortMethod),
      };

    case SORT_ADVISORS:
      const sortedAdvisors = sortAdvisors(state.advisorsInDisplay, action.payload);
      return {
        ...state,
        sortMethod: action.payload,
        advisorsInDisplay: sortedAdvisors,
      };

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

    case GET_TECHSKILLS:
      return {
        ...state, techSkills: action.payload
      }
    default:
      return { ...state }
  }
}


export default rootReducer;