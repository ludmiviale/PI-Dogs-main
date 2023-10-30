import { GET_ALL_DOGS, GET_DOG_BY_NAME } from "./action-types";
import axios from "axios";

export const getAllDogs = () => {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_ALL_DOGS, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDogByName = (name) => {
  const endpoint = `http://localhost:3001/dogs/?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({ type: GET_DOG_BY_NAME, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
