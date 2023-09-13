import { combineReducers } from "redux";
import homeReducer from "./home/homeReducer";

const rootReducer = combineReducers({
  homeReducer,
})

export default rootReducer;