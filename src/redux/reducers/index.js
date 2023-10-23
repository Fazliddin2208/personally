import { combineReducers } from "redux";
import localeReducer from "./localeReducer";

const allReducers = combineReducers({
    locale: localeReducer
})

export default allReducers;