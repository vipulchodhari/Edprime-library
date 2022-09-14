import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { authorUrl } from '../../utils/common';
import { RECEIVE_ADD_AUTHOR, RECEIVE_AUTHOR_DATA, RECEIVE_DELETE_AUTHOR, RECEIVE_EDIT_AUTHOR, RECEIVE_FILTER_AUTHOR, REQUEST_ADD_AUTHOR, REQUEST_AUTHOR_DATA, 
        REQUEST_DELETE_AUTHOR, 
        REQUEST_EDIT_AUTHOR,
        REQUEST_FILTER_AUTHOR} from '../action/actionTypes';

function* getautorData(){
    let data = yield axios.get(authorUrl)

    // console.log("fetch data in saga", data);

    yield put({type: RECEIVE_AUTHOR_DATA, payload:{data}})
}

function* addAuthorData(payload){
    // console.log("before add data in saga", payload);

    try{
        yield axios.post(authorUrl, {
            title: payload.payload.name,
            author_image: payload.payload.img,
            created_by: payload.payload.Cname
        })
    
        alert('Added a new author')
    
        let data = yield axios.get(authorUrl)
        // console.log("after add data in saga", data);
        yield put({type: RECEIVE_ADD_AUTHOR, payload:{data}})
    }catch(err){
        console.log(err.response.data.error)
    }
}

function* deleteAuthorData(payload){
    // console.log("id in saga", payload);
    let id = payload.id;
    try{
        yield axios.delete(`http://192.100.100.111:3000/authors/${id}`)
    
        alert('Author is deleted')
    
        let data = yield axios.get(authorUrl)
        // console.log("delete data in saga", data);
        yield put({type: RECEIVE_DELETE_AUTHOR, payload:{data}})
    }catch(err){
        console.log(err.response.data.error)
    }
}

function* editAuthorData(payload){
    // console.log("before edit data in saga", payload);
    let id = payload.payload.id
    try{
        yield axios.patch(`http://192.100.100.111:3000/authors/${id}`, {
            title: payload.payload.name,
            created_by: payload.payload.Cname
        })
    
        alert('Author update successfully')
    
        let data = yield axios.get(authorUrl)
        // console.log("after edit data in saga", data);
        yield put({type: RECEIVE_EDIT_AUTHOR, payload:{data}})
    }catch(err){
        console.log(err.response.data.error)
    }
}

function* filterAuthorData(payload){
    // console.log("before edit data in saga", payload);
    let query = payload.payload.query
    let data = yield axios.get(`http://192.100.100.111:3000/authors?q=${query}`)

    // console.log("after edit data in saga", data);

    yield put({type: RECEIVE_FILTER_AUTHOR, payload:{data}})
}

function* authorSaga() {
    yield takeEvery(REQUEST_AUTHOR_DATA, getautorData)
    yield takeEvery(REQUEST_ADD_AUTHOR, addAuthorData)
    yield takeEvery(REQUEST_DELETE_AUTHOR, deleteAuthorData)
    yield takeEvery(REQUEST_EDIT_AUTHOR, editAuthorData)
    yield takeEvery(REQUEST_FILTER_AUTHOR, filterAuthorData)
}

export default authorSaga;