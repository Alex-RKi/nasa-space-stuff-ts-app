import { Dispatch } from "redux";
import { FavoritsAction, FavoritsActionTypes } from "../types/favorits";
import { movieInterface } from "../types/movie";

export const toggleFavorit = (
  movie: movieInterface,
  favoritsList: movieInterface[]
) => {
  return async (dispatch: Dispatch<FavoritsAction>) => {
    //! CHECK delet async!
    const { id } = movie;
    let movieInList = favoritsList.some(
      (elem: movieInterface) => elem.id === id
    );
    if (movieInList) {
      dispatch({
        type: FavoritsActionTypes.DELETE_FROM_FAVORITS,
        payload: removeFromArr(id, favoritsList),
      });
    } else {
      dispatch({
        type: FavoritsActionTypes.ADD_TO_FAVORITS,
        payload: addToArr(movie, favoritsList),
      });
    }
  };
  //utils
  function addToArr(item: object, arr: Array<object> | []): Array<object> {
    return [...arr, item];
  }
  function removeFromArr(id: number, arr: Array<any> | []): Array<object> {
    const index = arr.findIndex((elem) => elem.id === id);
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
};
