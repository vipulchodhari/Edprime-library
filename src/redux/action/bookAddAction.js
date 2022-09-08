import { REQUEST_CLASS_DATA, REQUEST_EDITBOOK_DATA, REQUEST_GENRE_DATA, REQUEST_SUBJECT_DATA } from "./actionTypes";

export const Request_Subject_Data = () => {
    console.log('action called');
    return {
        type: REQUEST_SUBJECT_DATA
    }
}

export const Request_Genre_Data = () => {
    // console.log('action called');
    return {
        type: REQUEST_GENRE_DATA
    }
}

export const Request_BookEdit_Data = (data) => {
    console.log('action called', data);
    return {
        type: REQUEST_EDITBOOK_DATA,
        payload: data
    }
}