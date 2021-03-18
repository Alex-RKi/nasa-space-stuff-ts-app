export interface near_earth_objects {
  [key: string]: any[];
}
export interface AsteroidsState {
  asteroidsList: near_earth_objects | {};
  loading: boolean;
  error: null | string;
}

export enum AsteroidsActionTypes {
  FETCH_ASTEROIDS = "FETCH_ASTEROIDS",
  FETCH_ASTEROIDS_SUCCESS = "FETCH_ASTEROIDS_SUCCESS",
  FETCH_ASTEROIDS_ERROR = "FETCH_ASTEROIDS_ERROR",
}
interface FetchAsteroidsAction {
  type: AsteroidsActionTypes.FETCH_ASTEROIDS;
}
interface FetchAsteroidsSuccessAction {
  type: AsteroidsActionTypes.FETCH_ASTEROIDS_SUCCESS;
  payload: any[];
}
interface FetchAsteroidsErrorAction {
  type: AsteroidsActionTypes.FETCH_ASTEROIDS_ERROR;
  payload: string;
}

export type AsteroidsAction =
  | FetchAsteroidsAction
  | FetchAsteroidsSuccessAction
  | FetchAsteroidsErrorAction;
