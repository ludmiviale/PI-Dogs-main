import { GET_ALL_DOGS } from "./action-types";
import axios from "axios";

const URL = "https://api.thedogapi.com/v1/breeds";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(URL);
      return dispatch({ type: GET_ALL_DOGS, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
