import { GET_DOGS, GET_DOG_BY_ID, DOGS_CLEANER } from "./action-types";

let initialState = {
  allDogs: [],
  allDogsCopy: [],
  dogDetail: [],
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
    default:
      return state;
  }
};

export default reducer;
