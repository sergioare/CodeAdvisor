import {
  LOAD_PROFESSIONALS,
  FILTER_BY_SPECIALTY,
  FILTER_BY_LANGUAGE,
  FILTER_BY_PROGRAMMING_LANGUAGE,
  FILTER_BY_RESIDENCE,
  SORT_ADVISORS,
  GET_AUTORS, GET_REVIEWS, GET_ADVISORS, ADVISOR_DETAIL, GET_TECHSKILLS, GET_PROFILE, GET_ADVISORS_REVIEWS,
  BLOCK_ACCOUNT, UNBLOCK_ACCOUNT,
} from '../actions/actions';

const initialState = {
  users: [],
  advisors: [],
  advisorDetail: [],
  reviews: [],
  autors: [],
  techSkills: [],
  profile: [],
  advisorReviews: [],
  blockedAccounts: [],

  advisorsInDisplay: [],
  filters: {
    F_Specialty: [],
    F_Language: [],
    F_Programming_L: [],
    F_Residence: [],
  },
  sortMethod: "",
}



const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case BLOCK_ACCOUNT:
    const blockedUser = state.users.find(a => a.id === action.payload);
    const blockedAdvisor = state.advisors.find(a => a.id === action.payload);

    return {
      ...state,
      users: state.users.filter(a => a.id !== action.payload),
      advisors: state.advisors.filter(a => a.id !== action.payload),
      blockedAccounts: [
        ...state.blockedAccounts,
        blockedUser || blockedAdvisor // add the filtered user or advisor object
      ]
    };



    case UNBLOCK_ACCOUNT:
    const unblockedAccount = state.blockedAccounts.find(a => a.id === action.payload);
    
    if (!unblockedAccount) {
      return state; // if the account isn't blocked, do nothing
    }

    const updatedUsers = [...state.users];
    const updatedAdvisors = [...state.advisors];

    if (unblockedAccount.Specialty) {
      updatedAdvisors.push(unblockedAccount);
    } else {
      updatedUsers.push(unblockedAccount);
    }

    return {
      ...state,
      blockedAccounts: state.blockedAccounts.filter(a => a.id !== action.payload),
      users: updatedUsers,
      advisors: updatedAdvisors
    };


    case GET_ADVISORS_REVIEWS:
      return {
        ...state,
        advisorReviews: action.payload
      };

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

    case GET_PROFILE:
      return {
        ...state, profile: action.payload
      }

    case GET_TECHSKILLS:
      return {
        ...state, techSkills: action.payload
      }
      default:
        return { ...state }
  }
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
    // console.log(sortAdvisors(advisorsToDisplay, method))
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

export default rootReducer;