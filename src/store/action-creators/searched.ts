import axios from "axios";
import { Dispatch } from "redux";
import { _API_KEY, _API_URL } from "../../API_DATA";
import { SearchedAction, SearchedActionTypes } from "../types/searched";

export const fetchSearched = (
  page = 1,
  query: string = "",
  lang: "en-US" | "ru-RU" = "en-US"
) => {
  return async (dispatch: Dispatch<SearchedAction>) => {
    try {
      dispatch({ type: SearchedActionTypes.FETCH_SEARCHED });
      const response = await axios.get(`${_API_URL}search/movie`, {
        params: {
          api_key: _API_KEY,
          language: lang,
          query: query,
          page: page,
          include_adult: false,
        },
      });
      dispatch({
        type: SearchedActionTypes.FETCH_SEARCHED_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: SearchedActionTypes.FETCH_SEARCHED_ERROR,
        payload:
          "Can not get searche results from server, pls reload or try later",
      });
    }
  };
};

export function setSearchedPage(page: number): SearchedAction {
  return { type: SearchedActionTypes.SET_SEARCHED_PAGE, payload: page };
}
