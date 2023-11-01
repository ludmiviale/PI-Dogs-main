import {
  GET_ALL_DOGS,
  GET_DOG_BY_NAME,
  GET_DOG_BY_ID,
  DOGS_CLEANER,
} from "./action-types";

let initialState = {
  allDogs: [],
  allDogsCopy: [],
  dogDetail: [],
  temperaments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_DOG_BY_NAME:
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
    default:
      return state;
  }
};

export default reducer;
