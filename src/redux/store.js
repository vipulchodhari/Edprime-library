import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import { rootReducer } from "./reducer";
import authorSaga from "./saga/authorSaga";
import booksAddSaga from "./saga/booksAddSaga";
import categorySaga from "./saga/categorySaga";

const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleWare]
    }
)

sagaMiddleWare.run(categorySaga)
sagaMiddleWare.run(authorSaga)
sagaMiddleWare.run(booksAddSaga)