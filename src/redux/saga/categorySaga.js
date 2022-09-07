import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { booksUrl } from '../../utils/common';
import { RECEIVE_ADD_DATA, RECEIVE_DELETE, RECEIVE_EDIT_DATA, RECEIVE_FETCHDATA, REQUEST_ADD_DATA, REQUEST_DELETE, REQUEST_EDIT_DATA, REQUEST_FETCHDATA } from '../action/actionTypes';

function* getData(){
    let data = yield axios.get(booksUrl)

    // console.log("fetch data in saga", data);

    yield put({type: RECEIVE_FETCHDATA, payload:{data}})
}

function* deleteData(payload){
    // console.log("id in saga", payload);
    let id = payload.id;
    yield axios.delete(`http://192.100.100.34:3000/books/${id}`)

    alert('Your category deleted')

    let data = yield axios.get(booksUrl)
    // console.log("delete data in saga", data);
    yield put({type: RECEIVE_DELETE, payload:{data}})
}

function* addData(payload){
    // console.log("before add data in saga", payload);
    yield axios.post(booksUrl, {
        name: payload.payload.name,
        Status: payload.payload.Status
    })

    alert('Added a new categroy')

    let data = yield axios.get(booksUrl)
    // console.log("after add data in saga", data);
    yield put({type: RECEIVE_ADD_DATA, payload:{data}})
}

function* editData(payload){
    console.log("before edit data in saga", payload);
    let id = payload.payload.id
    yield axios.patch(`http://192.100.100.34:3000/books/${id}`, {
        name: payload.payload.name,
        Status: payload.payload.Status
    })

    alert('categroy update successfully')

    let data = yield axios.get(booksUrl)
    console.log("after edit data in saga", data);
    yield put({type: RECEIVE_EDIT_DATA, payload:{data}})
}

function* categorySaga(){
    yield takeEvery(REQUEST_FETCHDATA, getData)
    yield takeEvery(REQUEST_DELETE, deleteData)
    yield takeEvery(REQUEST_ADD_DATA, addData)
    yield takeEvery(REQUEST_EDIT_DATA, editData)

}

export default categorySaga;