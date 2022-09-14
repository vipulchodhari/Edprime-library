import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects';
import { memberUrl } from "../../utils/common";
import { RECEIVE_MEMBER_DATA, RECEIVE_SEARCH_MEMBER, REQUEST_MEMBER_DATA, REQUEST_SEARCH_MEMBER } from "../action/actionTypes";

function* getMemberData(){
    let data = yield axios.get(memberUrl);
    // console.log("fetch member data in saga", data);

    yield put({type: RECEIVE_MEMBER_DATA, payload:{data}})
}

function* searchMember(payload){
    console.log("before in saga", payload);
    let query = payload.query
    let data = yield axios.get(`http://192.100.100.52:3002/members?q=${query}`);
    console.log("after member data in saga", data);

    yield put({type: RECEIVE_SEARCH_MEMBER, payload:{data}})
}

function* memberSaga(){
    yield takeEvery(REQUEST_MEMBER_DATA, getMemberData)
    yield takeEvery(REQUEST_SEARCH_MEMBER, searchMember)

}

export default memberSaga;