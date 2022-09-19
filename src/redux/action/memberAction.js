import { REQUEST_ADD_MEMBER, REQUEST_DELETE_MEMBER, REQUEST_EDIT_MEMBER, REQUEST_MEMBER_DATA, REQUEST_SEARCH_MEMBER } from "./actionTypes";

export const Request_Member_Data = () => {
    // console.log('member action called');
    return {
        type: REQUEST_MEMBER_DATA
    }
}

export const Request_Edit_Member = (Ename,Emember_type, Ecreate_by, Emodified_by, EStatus, id) => {
    console.log('member action called', Ename,Emember_type, Ecreate_by, Emodified_by, EStatus, id);
    return {
        type: REQUEST_EDIT_MEMBER,
        payload: {Ename,Emember_type, Ecreate_by, Emodified_by, EStatus, id}
    }
}

export const Request_Add_Member = (name, member_type, sso_id, create_by, modified_by, status) => {
    console.log('member action called', name, member_type, sso_id, create_by, modified_by, status)
    return {
        type: REQUEST_ADD_MEMBER,
        payload: {name, member_type, sso_id, create_by, modified_by, status}
    }
}

export const Request_Delete_Member = (id) => {
    console.log('member action called', id)
    return {
        type: REQUEST_DELETE_MEMBER,
        payload: {id}
    }
}

export const Request_Search_Member = (query) => {
    console.log('member action called', query);
    return {
        type: REQUEST_SEARCH_MEMBER,
        query
    }
}