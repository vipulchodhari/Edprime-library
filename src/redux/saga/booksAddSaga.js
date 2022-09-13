import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { booksUrl } from '../../utils/common';
import { RECEIVE_BOOK_DATA, RECEIVE_EDITBOOK_DATA, REQUEST_BOOK_DATA, REQUEST_EDITBOOK_DATA, REQUEST_SEARCH_BOOK } from '../action/actionTypes';

function* searchBook(query){
    // console.log("before", query);
    // let data = yield axiox.get(``)
}

function* getBookData(){
    let data = yield axios.get(booksUrl)
    // console.log("fetch data in saga", data);
    yield put({type: RECEIVE_BOOK_DATA, payload:{data}})
}

function* getBookEditData(payload){
    console.log("before", payload);
    let id = payload.payload.id;
    let data = yield axios.get(`http://192.100.100.111:3000/books/${id}`)
    console.log("fetch data in saga", data);
    yield put({type: RECEIVE_EDITBOOK_DATA, payload:{data}})
}

function* booksAddSaga() {
    yield takeEvery(REQUEST_EDITBOOK_DATA, getBookEditData)
    yield takeEvery(REQUEST_BOOK_DATA, getBookData)
    yield takeEvery(REQUEST_SEARCH_BOOK, searchBook)
}

export default booksAddSaga;