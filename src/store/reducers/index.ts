import { combineReducers } from "redux";
import { picOfDayReducer } from "./picOfDayReducer";
import { asteroidsReducer } from "./asteroidsReducer";

export const rootReducer = combineReducers({
  picOfDay: picOfDayReducer,
  asteroids: asteroidsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
