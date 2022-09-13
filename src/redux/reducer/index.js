import { combineReducers } from "redux";
import { authorReducer } from "./authorReducer";
import { categoryReducer } from "./categoryReducer";
import { bookAddReducer } from "./bookAddReducer";
import { memberReducer } from "./memberReducer";

export const rootReducer = combineReducers({
    categoryState: categoryReducer,
    authorState: authorReducer,
    booksAddState: bookAddReducer,
    memberState: memberReducer
})