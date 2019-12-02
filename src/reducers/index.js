import { combineReducers } from "redux";
import queryReducer from "./queryReducer";
import landingReducer from "./landingReducer";
import individualSchoolReducer from "./individualSchoolReducer";

export default combineReducers({
  query: queryReducer,
  landing: landingReducer,
  schoolData: individualSchoolReducer
});
