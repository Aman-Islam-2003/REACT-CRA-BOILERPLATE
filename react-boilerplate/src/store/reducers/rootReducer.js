import { combineReducers } from "redux";
import userProfile from "./Profile/profile";
const rootReducer = combineReducers({
  userProfile,
});

export default rootReducer;
