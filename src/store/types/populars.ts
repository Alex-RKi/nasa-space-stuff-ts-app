export interface PopularsState {
  movies: any[];
  loading: boolean;
  error: null | boolean;
  page: number;
}
export enum PopularsActionTypes {
  FETCH_POPULARS = "FETCH_POPULARS",
  FETCH_POPULARS_SUCCESS = "FETCH_POPULARS_SUCCESS",
  FETCH_POPULARS_ERROR = "FETCH_POPULARS_ERROR",
  SET_POPULARS_PAGE = "SET_POPULARS_PAGE",
}
interface FetchPopularsAction {
  type: PopularsActionTypes.FETCH_POPULARS;
}
interface FetchPopularsSuccessAction {
  type: PopularsActionTypes.FETCH_POPULARS_SUCCESS;
  payload: any[];
}
interface FetchPopularsErrorAction {
  type: PopularsActionTypes.FETCH_POPULARS_ERROR;
  payload: string;
}
interface SetPopularsPageAction {
  type: PopularsActionTypes.SET_POPULARS_PAGE;
  payload: number;
}
export type PopularsAction =
  | FetchPopularsAction
  | FetchPopularsSuccessAction
  | FetchPopularsErrorAction
  | SetPopularsPageAction;
