import { createStore } from "redux";
import rootReducer from "./pagecontrol";

const store = createStore(rootReducer);

export default store;
