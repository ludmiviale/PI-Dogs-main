import { GET_ALL_DOGS, GET_DOG_BY_NAME } from "./action-types";

let initialState = {
  allDogs: [],
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
    default:
      return state;
  }
};

export default reducer;
