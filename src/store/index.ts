import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const LocalDBName = "MovieSearcherApp2";

const localStorageData = localStorage.getItem(LocalDBName);
const persistedState: RootStateType =
  localStorageData !== null ? JSON.parse(localStorageData) : {};

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem(LocalDBName, JSON.stringify(store.getState()));
});
