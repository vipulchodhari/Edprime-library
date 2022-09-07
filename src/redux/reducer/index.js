import { combineReducers } from "redux";
import { authorReducer } from "./authorReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
    categoryState: categoryReducer,
    authorState: authorReducer
})