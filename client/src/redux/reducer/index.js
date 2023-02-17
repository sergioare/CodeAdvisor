import {
    LOAD_PROFESSIONALS,
    FILTER_BY_SPECIALTY,
    FILTER_BY_LANGUAGE,
    FILTER_BY_PROGRAMMING_LANGUAGE,
    FILTER_BY_RESIDENCE,
    SORT_BY_SCORE,
    SORT_BY_PRICE,
    SORT_BY_ALPHABET,
    SORT_BY_AVAILABILITY,
    GET_AUTORS
  } from '../actions/actions';
  

const initialState = {
    advisors: [],
    reviews: [],
    autors: [],
    advisorsInDisplay: [],
    filters: {
      F_Specialty: [],
      F_Language: [],
      F_Programming_L: [],
      F_Residence: [],
    },
};

  
  const filterApplyer = (advisors, filters) => {
    let advisorsToDisplay = [...advisors];
    if (filters.F_Specialty && filters.F_Specialty.length > 0) {
        advisorsToDisplay = advisorsToDisplay.filter(advisors => filters.F_Specialty.includes(advisors.Specialty));
    }
      
    if (filters.F_Language && filters.F_Language.length > 0) {
        advisorsToDisplay = advisorsToDisplay.filter(advisors => filters.F_Language.includes(advisors.Language));
    }

    if (filters.F_Programming_L && filters.F_Programming_L.length > 0) {
        advisorsToDisplay = advisorsToDisplay.filter(advisors => {
        for (let i = 0; i < filters.F_Programming_L.length; i++) {
          if (!advisors.ProgrammingLanguage.includes(filters.F_Programming_L[i])) {
            return false;
          }
        }
        return true;
      });
      
    }

    if (filters.F_Residence) {
        advisorsToDisplay = advisorsToDisplay.filter(advisors => filters.F_Residence.includes(advisors.Residence));
    }

    return advisorsToDisplay;
  };
  
const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_AUTORS:
            return{
                ...state,
                autors:action.payload
            };

        case LOAD_PROFESSIONALS:
            return {
            ...state,
            advisors: action.payload,
            advisorsInDisplay: action.payload,
            };
        case FILTER_BY_SPECIALTY:
            return {
            ...state,
            filters: {
                ...state.filters,
                F_Specialty: action.payload,
            },
            advisorsInDisplay: filterApplyer(state.advisors, state.filters),
            };
        case FILTER_BY_LANGUAGE:
            return {
            ...state,
            filters: {
                ...state.filters,
                F_Language: action.payload,
            },
            advisorsInDisplay: filterApplyer(state.advisors, state.filters),
            };
        case FILTER_BY_PROGRAMMING_LANGUAGE:
            return {
            ...state,
            filters: {
                ...state.filters,
                F_Programming_L: action.payload,
            },
            advisorsInDisplay: filterApplyer(state.advisors, state.filters),
            };
        case FILTER_BY_RESIDENCE:
            return {
            ...state,
            filters: {
                ...state.filters,
                F_Residence: action.payload,
            },
            advisorsInDisplay: filterApplyer(state.advisors, state.filters),
            };
        case SORT_BY_SCORE:
            const advisorsToSortByScore = [...state.advisorsInDisplay];
            advisorsToSortByScore.sort((advisor1, advisor2) => advisor2.Score - advisor1.Score);
            return {
                ...state,
                advisorsInDisplay: advisorsToSortByScore,
            };
        case SORT_BY_PRICE:
            const advisorsToSortByPrice = [...state.advisorsInDisplay];
            if(action.payload == "Higher") {
                advisorsToSortByPrice.sort((advisor1, advisor2) => advisor2.Price - advisor1.Price);
            } else if(action.payload == "Lower")advisorsToSortByPrice.sort((advisor1, advisor2) => advisor1.Price - advisor2.Price);
            return {
                ...state,
                advisorsInDisplay: advisorsToSortByPrice,
            };
        case SORT_BY_ALPHABET:
            const advisorsToSortByAlphabet = [...state.advisorsInDisplay];
            if (action.payload === "Straight") {
                advisorsToSortByAlphabet.sort((advisor1, advisor2) => advisor1.name.localeCompare(advisor2.name));
            } else if (action.payload === "Inverse") {
                advisorsToSortByAlphabet.sort((advisor1, advisor2) => advisor2.name.localeCompare(advisor1.name));
            }
        
            return {
                ...state,
                advisorsInDisplay: advisorsToSortByAlphabet,
            };
            
        default:
            return{...state}
    }
  };
  
  export default rootReducer;