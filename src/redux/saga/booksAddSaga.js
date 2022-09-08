import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { classUrl, genresUrl } from '../../utils/common';
import { RECEIVE_CLASS_DATA, RECEIVE_EDITBOOK_DATA, RECEIVE_GENRE_DATA, REQUEST_CLASS_DATA, REQUEST_EDITBOOK_DATA, REQUEST_GENRE_DATA, REQUEST_SUBJECT_DATA } from '../action/actionTypes';

function* getsubjectData(){

}

function* getGenreData(){
    let data = yield axios.get(genresUrl)
    // console.log("fetch data in saga", data);
    yield put({type: RECEIVE_GENRE_DATA, payload:{data}})
}

function* getBookEditData(payload){
    console.log("before", payload);
    let id = payload.payload.id;
    let data = yield axios.get(`http://192.100.100.52:5000/books/${id}`)
    console.log("fetch data in saga", data);
    yield put({type: RECEIVE_EDITBOOK_DATA, payload:{data}})
}

function* booksAddSaga() {
    yield takeEvery(REQUEST_SUBJECT_DATA, getsubjectData)
    yield takeEvery(REQUEST_GENRE_DATA, getGenreData)
    yield takeEvery(REQUEST_EDITBOOK_DATA, getBookEditData)
    // yield takeEvery(REQUEST_DELETE_AUTHOR, deleteAuthorData)
    // yield takeEvery(REQUEST_EDIT_AUTHOR, editAuthorData)
}

export default booksAddSaga;