import {
  GET_DOGS,
  GET_DOG_BY_ID,
  DOGS_CLEANER,
  CREATE_DOG,
  GET_ALL_TEMPERAMENTS,
  FILTER_BY_SOURCE,
} from "./action-types";

let initialState = {
  allDogs: [],
  allDogsCopy: [],
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
        allDogsCopy: action.payload,
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

    //case FILTER_BY_TEMPERAMENT:

    case FILTER_BY_SOURCE:
      console.log(action.payload);

      let filterBySource;
      if (action.payload === "all") {
        filterBySource = [...state.allDogs];
      } else if (action.payload === "database") {
        filterBySource = [...state.allDogs].filter(
          (dog) => typeof dog.id === "string"
        );
      } else {
        filterBySource = [...state.allDogs].filter(
          (dog) => typeof dog.id == "number"
        );
      }
      return {
        ...state,
        allDogsCopy: filterBySource,
      };
    default:
      return state;
  }
};

export default reducer;

/*


   let updatedStateWithTemperament = { ...state };
      if (state.dogsFilteredBySource.length) {
        const dogsByTemperamentAndSource = state.dogsFilteredBySource.filter(
          (dog) =>
            dog.temperaments.some(
              (temperament) => temperament.name === action.payload
            )
        )
        updatedStateWithTemperament.allDogsCopy = dogsByTemperamentAndSource;
      }




  if (action.payload === "All") {
        allDogsCopy = [...state.allDogs];
      } else if (action.payload === "Database") {
        allDogsCopy = [...state.allDogsCopy].filter(
          (dog) => typeof dog.id === "string"
        );
      } else {
        allDogsCopy = [...state.allDogsCopy].filter(
          (dog) => typeof dog.id === "number"
        );
      }
      return {
        ...state,
        allDogsCopy: allDogsCopy,
      };
*/
