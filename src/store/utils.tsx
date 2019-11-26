import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { fetchData } from "../epics/fetchData";
import { autocomplete } from "./AutocompleteReducers";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const createAppStore = () => {

  const rootEpic = combineEpics(
    fetchData,
  );

  const rootReducer = combineReducers({
    autocomplete,
  });

  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}