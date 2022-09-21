import { combineReducers } from "redux";
import { authorReducer } from "./authorReducer";
import { categoryReducer } from "./categoryReducer";
import { bookAddReducer } from "./bookAddReducer";
import { memberReducer } from "./memberReducer";
import { genreReducer } from "./genreReducer";

export const rootReducer = combineReducers({
    categoryState: categoryReducer,
    authorState: authorReducer,
    booksAddState: bookAddReducer,
    memberState: memberReducer,
    genreState : genreReducer ,
})