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
  dogsFilterByTemperament: [],
  dogsFilterBySource: [],
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

    case FILTER_BY_TEMPERAMENT:
      const filterByTemperament = state.allDogs.filter((dog) => {
        const temperamentsString = dog.temperament;
        if (temperamentsString) {
          const temperamentsArray = temperamentsString.split(", ");
          return temperamentsArray.some((temp) => temp === action.payload);
        }
        return false;
      });
      return {
        ...state,
        allDogsCopy: filterByTemperament,
      };

    case FILTER_BY_SOURCE:
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

    case SORT_ALPHABETICALLY:
      let sortAlphabetically =
        action.payload === "ascending"
          ? [...state.allDogs].sort((a, b) => a.name.localeCompare(b.name))
          : [...state.allDogs].sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        allDogsCopy: sortAlphabetically,
      };

    case SORT_BY_WEIGHT:
      let sortByWeight = [...state.allDogs].sort((a, b) => {
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

/*
  case FILTER_BY_TEMPERAMENT:
      let updatedStateWithTemperament = { ...state };
      let dogsWithTemperamentAndSource;

      if (state.dogsFilterBySource.length) {
        // Filtrar por temperamento si ya existe un filtro por origen
        dogsWithTemperamentAndSource = state.dogsFilterBySource.filter(
          (dog) => {
            const temperamentsString = dog.temperament;
            if (temperamentsString) {
              const temperamentsArray = temperamentsString.split(", ");
              return temperamentsArray.some((temp) => temp === action.payload);
            }
            return false;
          }
        );
      } else {
        // Si no hay filtro por origen, filtrar directamente por temperamento
        dogsWithTemperamentAndSource = state.allDogsCopy.filter((dog) => {
          const temperamentsString = dog.temperament;
          if (temperamentsString) {
            const temperamentsArray = temperamentsString.split(", ");
            return temperamentsArray.some((temp) => temp === action.payload);
          }
          return false;
        });
      }

      // Actualizar el estado con los resultados del filtro
      updatedStateWithTemperament.dogsFilterByTemperament =
        dogsWithTemperamentAndSource;
      updatedStateWithTemperament.allDogsCopy = dogsWithTemperamentAndSource;

      return updatedStateWithTemperament;


 */
