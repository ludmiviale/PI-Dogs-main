import {
  GET_DOGS,
  GET_DOG_BY_ID,
  DOGS_CLEANER,
  CREATE_DOG,
  GET_ALL_TEMPERAMENTS,
} from "./action-types";
import axios from "axios";

export const getDogs = (name) => {
  const endpoint = `http://localhost:3001/dogs/?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_DOGS, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDogById = (id) => {
  const endpoint = `http://localhost:3001/dogs/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_DOG_BY_ID, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const dogsCleaner = () => ({ type: DOGS_CLEANER });

export const createDog = (newDogData) => {
  const {
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    maxLifeSpan,
    minLifeSpan,
    referenceImage,
    temperament,
  } = newDogData;
  const endpoint = "http://localhost:3001/dogs/";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, {
        name: name,
        height: `${minHeight} - ${maxHeight}`,
        weight: `${minWeight} - ${maxWeight}`,
        life_span: `${minLifeSpan} - ${maxLifeSpan}`,
        reference_image_id: referenceImage,
        temperaments: [temperament],
      });
      return dispatch({ type: CREATE_DOG, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getAllTemperaments = () => {
  const endpoint = "http://localhost:3001/temperaments/";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
