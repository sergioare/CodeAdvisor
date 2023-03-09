import {
  LOAD_PROFESSIONALS,
  FILTER_BY_SPECIALTY,
  FILTER_BY_LANGUAGE,
  FILTER_BY_PROGRAMMING_LANGUAGE,
  FILTER_BY_RESIDENCE,
  SORT_ADVISORS,
  GET_AUTORS, GET_REVIEWS, GET_ADVISORS, ADVISOR_DETAIL, GET_TECHSKILLS, GET_PROFILE, GET_ADVISORS_REVIEWS,
  BLOCK_ACCOUNT, UNBLOCK_ACCOUNT, GET_DATES,
  POST_REVIWER,
  GET_CART_ITEMS, CLEAR_CART,
  // DELETE_REVIWER,PUT_SCORE,
  UPDATE_DATES, UPDATE_AVAILABILITY, GET_AVAILABILITY,
  GET_ADMIN_DATA
} from '../actions/actions';

const initialState = {
  adminData: {},
  users: [],
  advisors: [],
  advisorDetail: [],
  reviews: [],
  comments: [],
  autors: [],
  techSkills: [],
  profile: [],
  advisorReviews: [],
  blockedAccounts: [],
  dates: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  },
  availability: [
    {Day: '4', Month: 1, Year: 2023, StartingHour: 7, EndingHour: 8, State: "available"},
    {Day: '4', Month: 1, Year: 2023, StartingHour: 8, EndingHour: 9, State: "reserved"},
    {Day: '5', Month: 1, Year: 2023, StartingHour: 8, EndingHour: 9, State: "available"},
    {Day: '5', Month: 1, Year: 2023, StartingHour: 15, EndingHour: 16, State: "available"},
    {Day: '6', Month: 1, Year: 2023, StartingHour: 12, EndingHour: 13, State: "reserved"},
    {Day: '6', Month: 1, Year: 2023, StartingHour: 13, EndingHour: 14, State: "reserved"},
    {Day: '7', Month: 1, Year: 2023, StartingHour: 0, EndingHour: 1, State: "available"},
    {Day: '7', Month: 1, Year: 2023, StartingHour: 1, EndingHour: 2, State: "reserved"},
  ],

  advisorsInDisplay: [],
  filters: {
    F_Specialty: [],
    F_Language: [],
    F_Programming_L: [],
    F_Residence: [],
  },
  sortMethod: "",
  datesBack:[],
  cart:[],
  productsInCart:[],
}



const rootReducer = (state = initialState, action) => {

  console.log(action.type)
  switch (action.type) {
    case GET_ADMIN_DATA:
      console.log("reducer")
      console.log(action.payload)
      return {
        ...state,
        adminData: action.payload
      };

    case GET_AVAILABILITY:

      return {
        ...state,
        //availability: action.payload.Schedules
        //para poder usar lo hardcodeado, cambiar por la version comentada cuando este todo listo :D
        availability: [...state.availability, ...action.payload.Schedules]
      }

    case UPDATE_AVAILABILITY:
      return {
        ...state,
        availability: action.payload,
      };


    case UPDATE_DATES:
      return {
        ...state,
        dates: {
          month: action.payload.month,
          year: action.payload.year,
        }
      }

    case BLOCK_ACCOUNT:
      const blockedUser = state.users.find(a => a.id === action.payload);
      const blockedAdvisor = state.advisorsInDisplay.find(a => a.id === action.payload);

      return {
        ...state,
        users: state.users.filter(a => a.id !== action.payload),
        advisorsInDisplay: state.advisorsInDisplay.filter(a => a.id !== action.payload),
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
        advisorsInDisplay: updatedAdvisors
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
    case POST_REVIWER:
      return { ...state, comments: action.payload }

    // case PUT_SCORE:
    //   return { ...state, comments: action.payload }


      case GET_DATES:
      return {
        ...state,
        dates: action.payload
      };

      case GET_CART_ITEMS:
        return{
          ...state,
        cart: action.payload,
        productsInCart: {cart: action.payload}
      };

      case CLEAR_CART: 
      return {...state, 
        productsInCart:[]
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