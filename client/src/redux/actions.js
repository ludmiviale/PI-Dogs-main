import { GET_DOGS, GET_DOG_BY_ID, DOGS_CLEANER } from "./action-types";
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
