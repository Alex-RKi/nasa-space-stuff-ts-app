import {
  AsteroidsAction,
  AsteroidsActionTypes,
  AsteroidsState,
} from "../types/asteroids";

const InitialState: AsteroidsState = {
  asteroidsList: {},
  loading: false,
  error: null,
};

export const asteroidsReducer = (
  state = InitialState,
  action: AsteroidsAction
): AsteroidsState => {
  switch (action.type) {
    case AsteroidsActionTypes.FETCH_ASTEROIDS:
      return { ...state, loading: true };
    case AsteroidsActionTypes.FETCH_ASTEROIDS_SUCCESS:
      return {
        ...state,
        loading: false,
        asteroidsList: action.payload,
        error: "",
      };
    case AsteroidsActionTypes.FETCH_ASTEROIDS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
