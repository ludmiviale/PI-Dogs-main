import {
  GET_DOGS,
  GET_DOG_BY_ID,
  DOGS_CLEANER,
  CREATE_DOG,
  GET_ALL_TEMPERAMENTS,
} from "./action-types";

let initialState = {
  allDogs: [],
  allDogsCopy: [], //para filtros, después volver al allDogs original
  dogDetail: [],
  newDog: [],
  temperaments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_DOG_BY_ID:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case DOGS_CLEANER:
      return {
        ...state,
        allDogs: [],
        dogDetail: [],
      };
    case CREATE_DOG:
      return {
        ...state,
        newDog: [...state.newDog, action.payload],
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
