import { AsteroidDescriptionProps } from "../../components/AsteroidDescription/AsteroidDescription";

export interface near_earth_objects {
  [key: string]: AsteroidDescriptionProps[];
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
  payload: AsteroidDescriptionProps[];
}
interface FetchAsteroidsErrorAction {
  type: AsteroidsActionTypes.FETCH_ASTEROIDS_ERROR;
  payload: string;
}

export type AsteroidsAction =
  | FetchAsteroidsAction
  | FetchAsteroidsSuccessAction
  | FetchAsteroidsErrorAction;
