import { createStore } from "redux";
import rootReducer from "./Reducer";

//redux store
const store = createStore(rootReducer);
export default store;
