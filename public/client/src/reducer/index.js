import { combineReducers } from "redux";
import layouts from "./layouts";

const rootReducer = combineReducers({
  layouts: layouts,
});

export default rootReducer;
