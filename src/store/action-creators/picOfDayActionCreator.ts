import axios from "axios";
import { Dispatch } from "redux";
import { API_KEY } from "../../API_DATA";
import { PicOfDayAction, PicOfDayActionTypes } from "../types/picOfDay";

export const getPicOfDay = (count = 1) => {
  return async (dispatch: Dispatch<PicOfDayAction>) => {
    try {
      dispatch({ type: PicOfDayActionTypes.FETCH_PIC_OF_DAY });

      const response = await axios.get(`https://api.nasa.gov/planetary/apod`, {
        params: {
          api_key: API_KEY,
          count: count,
        },
      });
      console.log(response.data);
      dispatch({
        type: PicOfDayActionTypes.FETCH_PIC_OF_DAY_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: PicOfDayActionTypes.FETCH_PIC_OF_DAY_ERROR,
        payload:
          "Can not get picture(s) of day data from server, pls reload or try later",
      });
    }
  };
};
