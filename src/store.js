import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import axios from "axios";

const initialState = {
  houses: [],
  filter: "",
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

axios
  .get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
  .then((res) => {
    const productsArray = [];
    for (let key in res.data) {
      productsArray.push({ ...res.data[key], id: key });
    }
    store.dispatch({ type: "GET_DATA", data: productsArray });
  })
  .catch((e) => console.log(e));

export default store;

// axios
//   .get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
//   .then((res) => {
//     const productsArray = [];
//     for (let key in res.data) {
//       productsArray.push({ ...res.data[key], id: key });
//     }
//     console.log(productsArray);
//     return productsArray;
//   })
//   .catch((e) => console.log(e));
