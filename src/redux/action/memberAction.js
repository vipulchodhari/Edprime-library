import { REQUEST_MEMBER_DATA, REQUEST_SEARCH_MEMBER } from "./actionTypes";

export const Request_Member_Data = () => {
    // console.log('member action called');
    return {
        type: REQUEST_MEMBER_DATA
    }
}

export const Request_Search_Member = (query) => {
    console.log('member action called', query);
    return {
        type: REQUEST_SEARCH_MEMBER,
        query
    }
}