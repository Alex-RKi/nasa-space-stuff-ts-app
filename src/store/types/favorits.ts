export interface FavoritsState {
  movies: any[];
}
export enum FavoritsActionTypes {
  ADD_TO_FAVORITS = "ADD_TO_FAVORITS",
  DELETE_FROM_FAVORITS = "DELETE_FROM_FAVORITS",
}
interface AddToFavoritsAction {
  type: FavoritsActionTypes.ADD_TO_FAVORITS;
  payload: any[];
}
interface DeleteFromFavoritsAction {
  type: FavoritsActionTypes.DELETE_FROM_FAVORITS;
  payload: any[];
}

export type FavoritsAction = AddToFavoritsAction | DeleteFromFavoritsAction;
