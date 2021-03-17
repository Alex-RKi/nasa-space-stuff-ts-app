import axios from "axios";
import { Dispatch } from "redux";
import { _API_KEY, _API_URL } from "../../API_DATA";
import { PopularsAction, PopularsActionTypes } from "../types/populars";

export const fetchPopulars = (page = 1, lang: "en-US" | "ru-RU" = "en-US") => {
  return async (dispatch: Dispatch<PopularsAction>) => {
    try {
      dispatch({ type: PopularsActionTypes.FETCH_POPULARS });
      const response = await axios.get(`${_API_URL}movie/popular`, {
        params: { api_key: _API_KEY, language: lang, page: page },
      });
      dispatch({
        type: PopularsActionTypes.FETCH_POPULARS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: PopularsActionTypes.FETCH_POPULARS_ERROR,
        payload:
          "Can not load popular movies from server, pls rload or try later",
      });
    }
  };
};
export function setPopularsPage(page: number): PopularsAction {
  return { type: PopularsActionTypes.SET_POPULARS_PAGE, payload: page };
}
