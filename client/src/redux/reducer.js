import {
  GET_DOGS,
  GET_DOG_BY_ID,
  DOGS_CLEANER,
  CREATE_DOG,
  GET_ALL_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_SOURCE,
  SORT_ALPHABETICALLY,
  SORT_BY_WEIGHT,
} from "./action-types";

let initialState = {
  allDogs: [],
  allDogsCopy: [],
  dogDetail: [],
  newDog: [],
  temperaments: [],
  isFilteredSource: false,
  isFilteredTemperament: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      if (!state.allDogs.length) {
        return {
          ...state,
          allDogs: action.payload,
          allDogsCopy: action.payload,
        };
      }
      return {
        ...state,
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
        dogDetail: [],
      };

    case CREATE_DOG:
      return {
        ...state,
        newDog: [...state.newDog, action.payload],
        allDogs: [...state.allDogs, action.payload],
        allDogsCopy: [...state.allDogsCopy, action.payload],
      };

    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTER_BY_SOURCE:
      let filterBySource;
      let onlySource;
      if (action.payload === "all") {
        filterBySource = [...state.allDogs];
      } else if (action.payload === "database") {
        filterBySource = state.allDogs.filter(
          (dog) => typeof dog.id === "string"
        );
        onlySource = state.allDogs.filter((dog) => typeof dog.id === "string");
      } else {
        filterBySource = state.allDogs.filter(
          (dog) => typeof dog.id === "number"
        );
        onlySource = state.allDogs.filter((dog) => typeof dog.id === "number");
      }
      return {
        ...state,
        allDogsCopy: filterBySource.filter((dog) => {
          if (state.isFilteredTemperament) {
            return state.copyWithTemperamentFilter.includes(dog);
          }
          return true;
        }),
        copyWithSourceFilter: onlySource || filterBySource,
        isFilteredSource: action.payload !== "all",
      };

    case FILTER_BY_TEMPERAMENT:
      let filterByTemperament;
      let onlyTemperaments;
      if (action.payload === "All") {
        filterByTemperament = [...state.allDogs];
      } else {
        filterByTemperament = state.allDogs.filter((dog) => {
          const temperamentsArray = dog.temperament?.split(", ") || [];
          return temperamentsArray.includes(action.payload);
        });
        onlyTemperaments = state.allDogs.filter((dog) => {
          const temperamentsArray = dog.temperament?.split(", ") || [];
          return temperamentsArray.includes(action.payload);
        });
      }
      return {
        ...state,
        allDogsCopy: filterByTemperament.filter((dog) => {
          if (state.isFilteredSource) {
            return state.copyWithSourceFilter.includes(dog);
          }
          return true;
        }),
        copyWithTemperamentFilter: onlyTemperaments || filterByTemperament,
        isFilteredTemperament: action.payload !== "All",
      };

    case SORT_ALPHABETICALLY:
      let sortAlphabetically =
        action.payload === "ascending"
          ? [...state.allDogsCopy].sort((a, b) => a.name.localeCompare(b.name))
          : [...state.allDogsCopy].sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        allDogsCopy: sortAlphabetically,
      };

    case SORT_BY_WEIGHT:
      let sortByWeight = [...state.allDogsCopy].sort((a, b) => {
        const weightA = a.weight.split(" - ");
        const weightB = b.weight.split(" - ");
        const weightValueA = parseFloat(weightA[0]);
        const weightValueB = parseFloat(weightB[0]);
        if (action.payload === "lowerWeight") {
          return weightValueA - weightValueB;
        } else {
          return weightValueB - weightValueA;
        }
      });
      return {
        ...state,
        allDogsCopy: sortByWeight,
      };

    default:
      return state;
  }
};

export default reducer;
