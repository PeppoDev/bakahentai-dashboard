import { createStore } from "redux";
import rootReducer from "./pagecontrol";

const store = createStore(
  rootReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
