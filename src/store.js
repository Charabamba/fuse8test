import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const initialState = {
  //with combineReducers, your need to have one reducer per initialState key, named the same
  //also, each reducer only gets its slice from the state : in the numbers reducer, state is [1, 2, 3]
  numbers: [1, 2, 3]
};
const enhancers = [];
const middleware = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
