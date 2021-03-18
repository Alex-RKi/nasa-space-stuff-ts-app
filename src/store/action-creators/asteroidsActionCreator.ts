import axios from "axios";
import { Dispatch } from "redux";
import { API_KEY } from "../../API_DATA";
import { AsteroidsAction, AsteroidsActionTypes } from "../types/asteroids";
import moment from "moment";
const today = moment().format("YYYY-MM-DD");

export const getAsteroids = (date = today) => {
  let inputIsCorrect = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date);
  if (!inputIsCorrect) {
    console.log('Pls use "YYYY-MM-DD" format for date parameter');
    return;
  }
  return async (dispatch: Dispatch<AsteroidsAction>) => {
    try {
      dispatch({ type: AsteroidsActionTypes.FETCH_ASTEROIDS });
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed`,
        {
          params: {
            api_key: API_KEY,
            date: date,
          },
        }
      );
      dispatch({
        type: AsteroidsActionTypes.FETCH_ASTEROIDS_SUCCESS,
        payload: response.data.near_earth_objects,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: AsteroidsActionTypes.FETCH_ASTEROIDS_ERROR,
        payload:
          "Can not get asteroids list from server, pls reload or try later",
      });
    }
  };
};
