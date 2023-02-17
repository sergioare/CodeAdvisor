import {
    LOAD_PROFESSIONALS,
    FILTER_BY_SPECIALTY,
    FILTER_BY_LANGUAGE,
    FILTER_BY_PROGRAMMING_LANGUAGE,
    FILTER_BY_RESIDENCE,
    SORT_BY_SCORE,
    SORT_BY_AVAILABILITY,
  } from '../actions/actions';
  

  const initialState = {
    users: [],
    usersInDisplay: [],
    filters: {
      F_Specialty: [],
      F_Language: [],
      F_Programming_L: [],
      F_Residence: [],
    },
  };
  
  const filterApplyer = (users, filters) => {
    let usersToDisplay = [...users];
    if (filters.F_Specialty && filters.F_Specialty.length > 0) {
        usersToDisplay = usersToDisplay.filter(user => filters.F_Specialty.includes(user.Specialty));
    }
      
    if (filters.F_Language && filters.F_Language.length > 0) {
      usersToDisplay = usersToDisplay.filter(user => filters.F_Language.includes(user.Language));
    }

    if (filters.F_Programming_L && filters.F_Programming_L.length > 0) {
      usersToDisplay = usersToDisplay.filter(user => {
        for (let i = 0; i < filters.F_Programming_L.length; i++) {
          if (!user.ProgrammingLanguage.includes(filters.F_Programming_L[i])) {
            return false;
          }
        }
        return true;
      });
      
    }

    if (filters.F_Residence) {
      usersToDisplay = usersToDisplay.filter(user => filters.F_Residence.includes(user.Residence));
    }

    return usersToDisplay;
  };
  
  const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case LOAD_PROFESSIONALS:
        return {
          ...state,
          users: action.payload,
          usersInDisplay: action.payload,
        };
      case FILTER_BY_SPECIALTY:
        return {
          ...state,
          filters: {
            ...state.filters,
            F_Specialty: action.payload,
          },
          usersInDisplay: filterApplyer(state.users, state.filters),
        };
      case FILTER_BY_LANGUAGE:
        return {
          ...state,
          filters: {
            ...state.filters,
            F_Language: action.payload,
          },
          usersInDisplay: filterApplyer(state.users, state.filters),
        };
      case FILTER_BY_PROGRAMMING_LANGUAGE:
        return {
          ...state,
          filters: {
            ...state.filters,
            F_Programming_L: action.payload,
          },
          usersInDisplay: filterApplyer(state.users, state.filters),
        };
      case FILTER_BY_RESIDENCE:
        return {
          ...state,
          filters: {
            ...state.filters,
            F_Residence: action.payload,
          },
          usersInDisplay: filterApplyer(state.users, state.filters),
        };
        
      default:
        return state;
    }
  };
  
  export default rootReducer;