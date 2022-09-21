import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { categoryUrl, genresUrl } from '../../utils/common';
import { RECEIVE_ADD_DATA, RECEIVE_ADD_DATA_GENRE, RECEIVE_DELETE_GENRE, RECEIVE_EDIT_DATA_GENRE, RECEIVE_FETCHDATA_GENRE,REQUEST_ADD_DATA_GENRE, REQUEST_DELETE, REQUEST_DELETE_GENRE,REQUEST_EDIT_DATA_GENRE, REQUEST_FETCHDATA, REQUEST_FETCHDATA_GENRE } from '../action/actionTypes';

function* getData() {
    let data = yield axios.get(genresUrl)

    // console.log("fetch data in saga", data);

    yield put({ type: RECEIVE_FETCHDATA_GENRE, payload: { data } })
}

function* deleteData(payload) {
    // console.log("id in saga", payload);
    let id = payload.id;
    try{
        yield axios.delete(`http://192.100.100.111:1000/genres/${id}`)
    
        alert('Your genre deleted')
    
        let data = yield axios.get(genresUrl)
        // console.log("delete data in saga", data);
        yield put({ type: RECEIVE_DELETE_GENRE, payload: { data } })
    }catch (err) {
        console.log(err.response.data.error)
    }
}

function* addData(payload) {
    console.log("before add data in saga", payload);
    let status = (payload.payload.status === "true")
    console.log("status", status);
    try {
        yield axios.post(genresUrl, {
            genre_image: payload.payload.image,
            title: payload.payload.title,
            created_by: payload.payload.created_by,
            modified_by: payload.payload.modified_by,
            status: status
        })
        alert('Added a new genre')

        let data = yield axios.get(genresUrl)
        console.log("after add data in saga", data);
        yield put({ type: RECEIVE_ADD_DATA_GENRE, payload: { data } })
    } catch (err) {
        console.log(err.response.data.error)
    }
}

function* editData(payload) {
    console.log("before edit data in saga", payload);
    let id = payload.payload.id
    let status = (payload.payload.status === "true" || 
                  payload.payload.status === true ||
                  payload.payload.status === "Active")
    console.log("status", status);
    try{
        yield axios.patch(`http://192.100.100.111:1000/genres/${id}`, {
            genre_image: payload.payload.image,
            title: payload.payload.title,
            created_by: payload.payload.created_by,
            modified_by: payload.payload.modified_by,
            status: status
        })
    
        alert('genre update successfully')
    
        let data = yield axios.get(genresUrl)
        console.log("after edit data in saga", data);
        yield put({ type: RECEIVE_EDIT_DATA_GENRE, payload: { data } })
    }catch(err){
        console.log(err.response.data.error)
    }
}

function* genreSaga() {
    yield takeEvery(REQUEST_FETCHDATA_GENRE, getData)
    yield takeEvery(REQUEST_DELETE_GENRE, deleteData)
    yield takeEvery(REQUEST_ADD_DATA_GENRE, addData)
    yield takeEvery(REQUEST_EDIT_DATA_GENRE, editData)

}

export default genreSaga;