import axios from "axios";
import { takeEvery, put } from 'redux-saga/effects';
import { memberUrl } from "../../utils/common";
import { RECEIVE_ADD_MEMBER, RECEIVE_DELETE_MEMBER, RECEIVE_EDIT_MEMBER, RECEIVE_MEMBER_DATA, RECEIVE_SEARCH_MEMBER, REQUEST_ADD_MEMBER, REQUEST_DELETE_MEMBER, REQUEST_EDIT_MEMBER, REQUEST_MEMBER_DATA, REQUEST_SEARCH_MEMBER } from "../action/actionTypes";

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

function* editMember(payload) {
    console.log("before edit data in saga", payload);
    let id = payload.payload.id
    let status = (payload.payload.EStatus === "true" ||
                  payload.payload.EStatus === true || 
                  payload.payload.EStatus === "Active")
    console.log("status", status);
    try{
        yield axios.patch(`http://192.100.100.111:3000/members/${id}`, {
            name: payload.payload.EName,
            member_type: payload.payload.Emember_type,
            created_by: payload.payload.Ecreate_by,
            modified_by: payload.payload.Emodified_by,
            status: status
        })
    
        alert('member update successfully')
    
        let data = yield axios.get(memberUrl)
        console.log("after edit data in saga", data);
        yield put({ type: RECEIVE_EDIT_MEMBER, payload: { data } })
    }catch(err){
        console.log(err.response.data.error)
    }
}

function* addMember(payload) {
    console.log("before add data in saga", payload);
    let status = (payload.payload.status === "true")
    console.log("status", status);
    try {
        yield axios.post(memberUrl, {
            name: payload.payload.name,
            member_type: payload.payload.member_type,
            sso_id: payload.payload.sso_id,
            created_by: payload.payload.create_by,
            modified_by: payload.payload.modified_by,
            status: status
        })
        alert('Added a new Member')

        let data = yield axios.get(memberUrl)
        console.log("after add data in saga", data);
        yield put({ type: RECEIVE_ADD_MEMBER, payload: { data } })
    } catch (err) {
        console.log(err.response.data.error)
    }
}

function* deleteMember(payload) {
    console.log("id in saga", payload);
    let id = payload.payload.id;
    try{
        yield axios.delete(`http://192.100.100.111:3000/members/${id}`)
    
        alert('Your member deleted')
    
        let data = yield axios.get(memberUrl)
        console.log("delete data in saga", data);
        yield put({ type: RECEIVE_DELETE_MEMBER, payload: { data } })
    }catch (err) {
        console.log(err.response.data.error)
    }
}

function* memberSaga(){
    yield takeEvery(REQUEST_MEMBER_DATA, getMemberData)
    yield takeEvery(REQUEST_SEARCH_MEMBER, searchMember)
    yield takeEvery(REQUEST_EDIT_MEMBER, editMember)
    yield takeEvery(REQUEST_ADD_MEMBER, addMember)
    yield takeEvery(REQUEST_DELETE_MEMBER, deleteMember)

}

export default memberSaga;