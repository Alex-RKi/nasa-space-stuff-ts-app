export interface SearchedState {
  movies: any[];
  loading: boolean;
  error: null | boolean;
  page: number;
}
export enum SearchedActionTypes {
  FETCH_SEARCHED = "FETCH_SEARCHED",
  FETCH_SEARCHED_SUCCESS = "FETCH_SEARCHED_SUCCESS",
  FETCH_SEARCHED_ERROR = "FETCH_SEARCHED_ERROR",
  SET_SEARCHED_PAGE = "SET_SEARCHED_PAGE",
}
interface FetchSearchedAction {
  type: SearchedActionTypes.FETCH_SEARCHED;
}
interface FetchSearchedSuccessAction {
  type: SearchedActionTypes.FETCH_SEARCHED_SUCCESS;
  payload: any[];
}
interface FetchSearchedErrorAction {
  type: SearchedActionTypes.FETCH_SEARCHED_ERROR;
  payload: string;
}
interface SetSearchedPageAction {
  type: SearchedActionTypes.SET_SEARCHED_PAGE;
  payload: number;
}
export type SearchedAction =
  | FetchSearchedAction
  | FetchSearchedSuccessAction
  | FetchSearchedErrorAction
  | SetSearchedPageAction;
