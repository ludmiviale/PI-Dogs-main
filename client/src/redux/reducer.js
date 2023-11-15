import {
  GET_DOGS,
  GET_DOG_BY_ID,
  DOGS_CLEANER,
  CREATE_DOG,
  DELETE_DOG,
  GET_ALL_TEMPERAMENTS,
  FILTERS_AND_SORTS,
} from "./action-types";

import filterAndOrderDogs from "../utils/utils";

let initialState = {
  allDogs: [],
  allDogsCopy: [],
  dogDetail: [],
  newDog: [],
  temperaments: [],
  filters: {
    search: "",
    source: "all",
    temperament: "all",
  },
  sort: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      if (!state.allDogs.length) {
        return {
          ...state,
          allDogs: action.payload.data,
          allDogsCopy: filterAndOrderDogs(
            action.payload.data,
            action.payload.filters,
            action.payload.sort
          ),
        };
      }
      return {
        ...state,
        allDogsCopy: filterAndOrderDogs(
          action.payload.data,
          action.payload.filters,
          action.payload.sort
        ),
      };

    case GET_DOG_BY_ID:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case DOGS_CLEANER:
      return {
        ...state,
        dogDetail: [],
      };

    case CREATE_DOG:
      return {
        ...state,
        newDog: [...state.newDog, action.payload],
        allDogs: [...state.allDogs, action.payload],
        allDogsCopy: [...state.allDogsCopy, action.payload],
      };

    case DELETE_DOG:
      return {
        ...state,
        allDogs: state.allDogs.filter((dog) => dog.id !== action.payload),
        allDogsCopy: state.allDogsCopy.filter(
          (dog) => dog.id !== action.payload
        ),
        newDog: state.newDog.filter((dog) => dog.id !== action.payload),
      };

    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTERS_AND_SORTS:
      return {
        ...state,
        filters: action.payload.filters,
        sort: action.payload.sort,
        allDogsCopy: filterAndOrderDogs(
          action.payload.dogs,
          action.payload.filters,
          action.payload.sort
        ),
      };

    default:
      return state;
  }
};

export default reducer;
