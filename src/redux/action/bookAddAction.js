import {REQUEST_BOOK_DATA, REQUEST_EDITBOOK_DATA, REQUEST_SEARCH_BOOK } from "./actionTypes";

export const Request_Book_Data = () => {
    // console.log('action called');
    return {
        type: REQUEST_BOOK_DATA
    }
}

export const Request_Search_Book = (query) => {
    console.log('action called', query);
    return {
        type: REQUEST_SEARCH_BOOK,
        query
    }
}

export const Request_BookEdit_Data = (data) => {
    console.log('action called', data);
    return {
        type: REQUEST_EDITBOOK_DATA,
        payload: data
    }
}